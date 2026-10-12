// INSIGHTS（週次の記事）を読むための道具。記事の置き方は docs/insights.md（ローカルのみ）。
import { getCollection, type CollectionEntry } from "astro:content";
import type { ImageMetadata } from "astro";
import type { Lang } from "./i18n";
import { statSync } from "node:fs";

export type InsightEntry = CollectionEntry<"insights">;

export interface Insight {
  folder: string; // 2026-10-19-design-review
  slug: string; // design-review（URL に使う）
  lang: Lang;
  date: Date; // 公開日（日本時間 0:00）
  dateLabel: string; // 2026.10.19
  dateISO: string; // 2026-10-19
  isPublished: boolean; // 公開日を過ぎていて draft でない
  hero: ImageMetadata;
  thumbnail: ImageMetadata;
  entry: InsightEntry;
}

/** 一覧・詳細ページの URL */
export function insightsIndexPath(lang: Lang): string {
  return lang === "en" ? "/en/insights/" : "/insights/";
}
export function insightPath(lang: Lang, slug: string): string {
  return `${insightsIndexPath(lang)}${slug}/`;
}

// 各記事フォルダの画像（ビルド時に webp へ変換・縮小される）
const images = import.meta.glob<ImageMetadata>(
  "/src/content/insights/*/{hero,thumbnail}.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" },
);
function findImage(folder: string, name: "hero" | "thumbnail"): ImageMetadata | undefined {
  for (const ext of ["png", "jpg", "jpeg", "webp"]) {
    const key = `/src/content/insights/${folder}/${name}.${ext}`;
    const img = images[key];
    if (img) return import.meta.env.DEV ? withDevVersion(img, key) : img;
  }
  return undefined;
}

// npm run dev だけ：画像の URL にファイルの更新日時を付ける。
// 開発サーバーの画像 URL はファイル名と縦横サイズだけで決まり、しかも「1年間キャッシュしてよい」で返されるため、
// 同じ名前・同じサイズで差し替えるとブラウザが古い画像を出し続けた。更新日時が変われば URL も変わるので、普通のリロードで反映される。
// 本番ビルドは画像の中身から URL が決まる（差し替えれば URL が変わる）ので、この処理は不要。
function withDevVersion(img: ImageMetadata, key: string): ImageMetadata {
  try {
    const v = Math.round(statSync(`${process.cwd()}${key}`).mtimeMs);
    return { ...img, src: `${img.src}${img.src.includes("?") ? "&" : "?"}v=${v}` };
  } catch {
    return img;
  }
}

const FOLDER_RE = /^(\d{4})-(\d{2})-(\d{2})-([a-z0-9]+(?:-[a-z0-9]+)*)$/;
const JST_OFFSET = 9 * 60 * 60 * 1000;

function toInsight(entry: InsightEntry, now: number): Insight {
  const [folder, lang] = entry.id.split("/") as [string, Lang];
  const m = folder.match(FOLDER_RE);
  if (!m) {
    throw new Error(
      `src/content/insights/${folder}/ のフォルダ名が決まりと違います。` +
        `「YYYY-MM-DD-英小文字と数字とハイフン」にしてください（例: 2026-10-19-design-review）。`,
    );
  }
  const [, y, mo, d, slug] = m;
  const date = new Date(Date.UTC(+y, +mo - 1, +d) - JST_OFFSET); // 日本時間のその日の 0:00
  if (Number.isNaN(date.getTime()) || `${y}-${mo}-${d}` !== new Date(date.getTime() + JST_OFFSET).toISOString().slice(0, 10)) {
    throw new Error(`src/content/insights/${folder}/ の日付 ${y}-${mo}-${d} が正しくありません。`);
  }
  const hero = findImage(folder, "hero");
  if (!hero) {
    throw new Error(`src/content/insights/${folder}/ に hero 画像（hero.png / hero.jpg / hero.webp）がありません。`);
  }
  return {
    folder,
    slug,
    lang,
    date,
    dateLabel: `${y}.${mo}.${d}`,
    dateISO: `${y}-${mo}-${d}`,
    isPublished: !entry.data.draft && date.getTime() <= now,
    hero,
    thumbnail: findImage(folder, "thumbnail") ?? hero,
    entry,
  };
}

/**
 * その言語の記事を新しい順に返す。
 * 本番ビルドでは公開済みのものだけ。`npm run dev` では確認用に予約・下書きも含める
 * （ページ上に「予約」「下書き」と表示される）。
 */
export async function getInsights(lang: Lang): Promise<Insight[]> {
  const now = Date.now();
  const all = (await getCollection("insights")).map((e) => toInsight(e, now));

  // 同じ URL（slug）のフォルダが2つあると片方が上書きされるので止める
  const seen = new Map<string, string>();
  for (const it of all) {
    const key = `${it.lang}/${it.slug}`;
    const prev = seen.get(key);
    if (prev && prev !== it.folder) {
      throw new Error(`INSIGHTS の URL が重複しています：${prev} と ${it.folder}（日付のあとの部分を変えてください）。`);
    }
    seen.set(key, it.folder);
  }

  return all
    .filter((it) => it.lang === lang && (import.meta.env.DEV || it.isPublished))
    .sort((a, b) => b.date.getTime() - a.date.getTime() || b.folder.localeCompare(a.folder));
}

/** 公開済みの記事が1本でもあるか（ナビに INSIGHTS を出すかどうか） */
export async function hasInsights(lang: Lang): Promise<boolean> {
  return (await getInsights(lang)).length > 0;
}
