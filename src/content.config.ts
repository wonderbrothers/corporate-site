// サイトの文章（日本語・英語）を src/content/copy/*.yaml から読み込む。
// ja.yaml と en.yaml は同じ項目名で並べる。ページの型（src/components/*.astro）は
// getCopy("ja") / getCopy("en") で受け取った文章を流し込むだけ。
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const copy = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "./src/content/copy" }),
});

export const collections = { copy };
