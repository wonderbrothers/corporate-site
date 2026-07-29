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
├── components/               # SiteHeader / SiteFooter（新規ページ共通）
├── pages/
│   ├── index.astro           # トップ（Studioデザインを移植）
│   ├── contact.astro         # お問い合わせ（Googleフォーム連携）
│   ├── privacy.astro         # プライバシーポリシー
│   ├── news/                 # お知らせ 一覧 + 詳細（[...slug]）
│   └── works/                # 実績 一覧 + 詳細（[...slug]）
├── content/                  # Markdown コンテンツ
│   ├── news/*.md
│   └── works/*.md
├── content.config.ts         # コレクション定義（news / works）
├── scripts/main.js           # スクロールリビール + Contactフォーム送信
└── styles/                   # global(既存) / index / contact / privacy / content
public/                       # images, favicon, CNAME, robots.txt（そのまま配信）
```

## ページの増やし方

> 📝 コピペ用テンプレート付きの詳しい手順は **[docs/authoring-guide.md](docs/authoring-guide.md)** を参照。

- **お知らせ**: `src/content/news/` に Markdown を追加（frontmatter: `title`, `date`, `description?`, `draft?`）。一覧・詳細・sitemap が自動生成されます。
- **実績**: `src/content/works/` に Markdown を追加（`title`, `date`, `client?`, `summary?`, `thumbnail?`）。
- **固定ページ（会社概要 / サービス / 採用 など）**: `src/pages/xxx.astro` を作成し、`Base` レイアウトと `SiteHeader`/`SiteFooter`・`content.css` を使えばすぐ追加できます。

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
