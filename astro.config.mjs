// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { copyFile } from 'node:fs/promises';
import { satteri } from '@astrojs/markdown-satteri';
import insightSources from './src/lib/satteri-insight-sources.mjs';

// robots.txt と Search Console は https://wonder-bros.com/sitemap.xml を見る。
// @astrojs/sitemap は sitemap-index.xml / sitemap-0.xml を出すので、ビルドの最後に
// sitemap-0.xml（URL 一覧そのもの）を sitemap.xml としても置く。中身は同じもの。
// ページが増えて sitemap-1.xml 以降に分かれる規模（5万URL）になったら、robots.txt を
// sitemap-index.xml に切り替えること。
const sitemapAlias = {
  name: 'sitemap-alias',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      await copyFile(new URL('sitemap-0.xml', dir), new URL('sitemap.xml', dir));
    },
  },
};

// 本番は独自ドメイン wonder-bros.com をルート配信する前提。
// canonical / OGP / sitemap はすべてこの site を基準に絶対URL化される。
export default defineConfig({
  site: 'https://wonder-bros.com',
  trailingSlash: 'always',
  integrations: [sitemap(), sitemapAlias],
  // INSIGHTS の記事：出典の段落に印を付けて小さく表示する（src/lib/satteri-insight-sources.mjs）
  markdown: { processor: satteri({ hastPlugins: [insightSources] }) },
  // CSS はネスト記法で書く（各要素の定義を1箇所にまとめるため）。
  // lightningcss が出力時にネストを展開するので、古いブラウザでも従来どおり動く。
  vite: {
    css: {
      transformer: 'lightningcss',
      lightningcss: { targets: { safari: 15 << 16, chrome: 100 << 16, firefox: 100 << 16, edge: 100 << 16 } },
    },
  },
  build: { format: 'directory', cssMinify: 'lightningcss' },
});
