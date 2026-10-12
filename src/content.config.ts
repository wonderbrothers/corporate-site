// サイトの文章（日本語・英語）を src/content/copy/*.yaml から読み込む。
// ja.yaml と en.yaml は同じ項目名で並べる。ページの型（src/components/*.astro）は
// getCopy("ja") / getCopy("en") で受け取った文章を流し込むだけ。
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const copy = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "./src/content/copy" }),
});

// INSIGHTS（週次の記事）。1記事 = 1フォルダ（src/content/insights/YYYY-MM-DD-slug/）。
//   ja.md / en.md … 本文（どちらか一方だけでもよい）
//   hero.*        … 詳細ページの FV 画像（必須。png / jpg / jpeg / webp）
//   thumbnail.*   … 一覧のサムネイル（省略時は hero を使う）
// 公開日と URL はフォルダ名から決まる（2026-10-19-design-review → 2026-10-19 公開・/insights/design-review/）。
// 「_」で始まるフォルダ（_template など）は読み込まない。
// 書き方・ChatGPT への指示は docs/insights.md（ローカルのみ）。
const insights = defineCollection({
  loader: glob({
    pattern: "[!_]*/{ja,en}.md",
    base: "./src/content/insights",
    generateId: ({ entry }) => entry.replace(/\.md$/, ""),
  }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1), // 一覧・検索結果・SNS に出る要約
    heroAlt: z.string().min(1), // FV 画像の代替テキスト（画像に何が描かれているか）
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false), // true の間は公開日が来ても出さない
  }),
});

export const collections = { copy, insights };
