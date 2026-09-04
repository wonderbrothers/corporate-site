// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 本番は独自ドメイン wonder-bros.com をルート配信する前提。
// canonical / OGP / sitemap はすべてこの site を基準に絶対URL化される。
export default defineConfig({
  site: 'https://wonder-bros.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
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
