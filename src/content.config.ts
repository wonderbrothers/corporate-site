import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// お知らせ / ブログ
const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// 実績 / ワークス
const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/works" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    client: z.string().optional(),
    summary: z.string().optional(),
    thumbnail: z.string().optional(), // 例: /images/works/xxx.webp
    draft: z.boolean().default(false),
  }),
});

export const collections = { news, works };
