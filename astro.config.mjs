// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 本番は独自ドメイン wonder-bros.com をルート配信する前提。
// canonical / OGP / sitemap はすべてこの site を基準に絶対URL化される。
export default defineConfig({
  site: 'https://wonder-bros.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
