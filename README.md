# wonder-bros.com（Astro）

株式会社ワンダーブラザースのコーポレートサイト。**Astro** による静的サイトで、
**GitHub Actions** で自動ビルドし **GitHub Pages**（独自ドメイン `wonder-bros.com`）へ公開します。

## 開発

```bash
npm install
npm run dev        # http://localhost:4321
```

## ビルド / プレビュー

```bash
npm run build      # dist/ に静的出力
npm run preview    # 本番同等（ルート配信）でローカル確認
```

## ディレクトリ

```
src/
├── layouts/Base.astro        # <head>/SEO/OGP/JSON-LD/フォント/共通スクリプト
├── components/               # SiteHeader / SiteFooter（固定ページ共通）
├── pages/
│   ├── index.astro           # トップ（Studioデザインを移植）
│   ├── contact.astro         # お問い合わせ（Googleフォーム + reCAPTCHA v3）
│   ├── privacy.astro         # プライバシーポリシー
│   └── 404.astro             # 404 ページ
├── scripts/main.js           # スクロールリビール + Contactフォーム送信
└── styles/                   # global(既存) / index / contact / privacy / content(404用)
public/                       # images, favicon, CNAME, robots.txt（そのまま配信）
```

公開ページは **index / contact / privacy**（＋404）の3ページ構成です。

## ページを増やす場合

固定ページは `src/pages/xxx.astro` を作成すると `/xxx/` で公開されます。
`Base` レイアウト＋`SiteHeader`/`SiteFooter`＋`content.css` を使えば、
404 ページと同じ体裁でサイトの世界観に沿ったページになります（`src/pages/404.astro` が参考実装）。

> お知らせ・実績のような一覧＋Markdown運用（Content Collections）が必要になったら、
> その仕組みを追加できます（相談してください）。

## デプロイ

`main` ブランチへ push すると `.github/workflows/deploy.yml`（`withastro/action`）が
`astro build` して GitHub Pages へ自動公開します。
GitHub の **Settings → Pages → Source** を **「GitHub Actions」** にしておくこと。

## SEO

- `astro.config.mjs` の `site: https://wonder-bros.com` を基準に、canonical / OGP / `sitemap.xml` を自動生成。
- `Base.astro` で title / description / OGP / Twitter / JSON-LD(Organization, WebSite) を一元管理。

## お問い合わせ

`contact.astro` のフォームは自作デザインのまま、送信先を Google フォームに連携（`formResponse`）。
サーバー不要で GitHub Pages 上でも動作します。
