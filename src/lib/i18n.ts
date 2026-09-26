// 日本語・英語の文章ファイル（src/content/copy/ja.yaml / en.yaml）を読むための小さな道具。
import { getEntry } from "astro:content";

export type Lang = "ja" | "en";

/** 言語ごとのページの URL。言語切り替えと hreflang に使う */
export const PATHS = {
  home: { ja: "/", en: "/en/" },
  contact: { ja: "/contact/", en: "/en/contact/" },
} as const;

/** 文章ファイルを丸ごと返す（項目名は ja.yaml / en.yaml と同じ） */
export async function getCopy(lang: Lang): Promise<any> {
  const entry = await getEntry("copy", lang);
  if (!entry) throw new Error(`src/content/copy/${lang}.yaml が見つかりません`);
  return entry.data;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * 文章ファイルに書ける簡単な記法を HTML にする（set:html で使う）。
 *   \n              … 改行（<br>）。見出しの意図的な改行に使う
 *   {{ … }}         … この中では改行しない（例: {{PoCを設計する。}}）
 *   [文字](/path/)  … リンク
 * それ以外の HTML は書けない（< > はそのまま文字として表示される）。
 */
export function rich(text?: string | null): string {
  if (!text) return "";
  let h = escapeHtml(String(text));
  h = h.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a class="wb-inline-link" href="$2">$1</a>');
  h = h.replace(/\{\{(.+?)\}\}/g, '<span class="wb-nobr">$1</span>');
  h = h.replace(/\n/g, "<br />");
  return h;
}
