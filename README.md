# wonder-bros.com（Astro）

株式会社ワンダーブラザースのコーポレートサイト。**Astro** による静的サイトで、
**GitHub Actions** で自動ビルドし **GitHub Pages**（独自ドメイン `wonder-bros.com`）へ公開します。

## このリポジトリで管理するもの

GitHub には **公開サイトのビルドに必要なファイルだけ** を置きます。

| 管理する（GitHub） | 管理しない（ローカルのみ・`.gitignore` 済み） |
| --- | --- |
| `src/` `public/` | `docs/`（設計メモ・手順書・コピー方針など） |
| `astro.config.mjs` `package.json` `package-lock.json` `tsconfig.json` | `worker/`（お問い合わせ用 Cloudflare Worker のソース） |
| `.github/workflows/deploy.yml` `.gitignore` `README.md` | `dist/` `node_modules/` `.astro/` `Claude outputs/` |

`docs/` と `worker/` は GitHub にバックアップされないため、消えると困るものは
別の場所（Google ドライブ等）にも控えておいてください。

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
├── layouts/Base.astro        # <head>/SEO/OGP/JSON-LD/フォント/GTM/共通スクリプト
├── components/               # SiteHeader / SiteFooter（404 など固定ページ共通）
├── pages/
│   ├── index.astro           # トップ（文言は先頭の frontmatter にデータとしてまとめてある）
│   ├── contact.astro         # お問い合わせ（reCAPTCHA v3 → Cloudflare Worker → Google フォーム）
│   ├── privacy.astro         # プライバシーポリシー
│   └── 404.astro             # 404 ページ
├── scripts/main.js           # スクロールリビール / 追従ナビ / SP メニュードロワー / WONDER LAB カルーセル
└── styles/                   # global（デザイントークン）/ index / contact / privacy / content(404用)
public/                       # images, favicon, CNAME, robots.txt（そのまま配信）
```

公開ページは **index / contact / privacy**（＋404）の3ページ構成です。

## トップページの文言を直す

`src/pages/index.astro` 先頭の frontmatter（`---` で囲まれた部分）に、
サービス・事例（SELECTED WORK）・WONDER LAB・会社情報などの日英コピーがまとまっています。
HTML を触らずに文言だけ変更できます。

- SELECTED WORK は `cases` 配列の `published: true` のものだけ表示されます。
  クライアント名・案件名・機密性の高い数値は掲載しません。
- 大見出し（APPROACH / CLIENT WORK など）の文字を変えた場合は、
  `src/styles/global.css` のスマホ用係数を測り直す必要があります（コメント参照）。

## ページを増やす場合

固定ページは `src/pages/xxx.astro` を作成すると `/xxx/` で公開されます。
`Base` レイアウト＋`SiteHeader`/`SiteFooter`＋`content.css` を使えば、
404 ページと同じ体裁でサイトの世界観に沿ったページになります（`src/pages/404.astro` が参考実装）。

## デプロイ（GitHub へ push して公開）

`main` ブランチへ push すると `.github/workflows/deploy.yml`（`withastro/action`）が
`astro build` して GitHub Pages へ自動公開します。

```bash
# 1. 公開前にローカルでビルドが通ることを確認（dist/ はコミットしない）
npm run build

# 2. 変更をステージング（管理しないファイルは .gitignore で除外済み）
git add -A

# 3. 変更内容がわかるメッセージでコミット
git commit -m "変更内容を簡潔に"

# 4. main へ push（これで自動デプロイが走る）
git push origin main
```

push 後、GitHub の **Actions** タブでワークフロー（Deploy to GitHub Pages）が
成功するのを確認します。反映まで数分かかります。

初回のみ、GitHub の **Settings → Pages → Source** を **「GitHub Actions」** に
しておく必要があります（設定済み）。

## SEO

- `astro.config.mjs` の `site: https://wonder-bros.com` を基準に、canonical / OGP / `sitemap.xml` を自動生成。
- `Base.astro` で title / description / OGP / Twitter / JSON-LD(Organization, WebSite) を一元管理。

## アクセス解析

`Base.astro` の `GTM_ID` に Google タグマネージャーのコンテナ ID を設定しています。
GA4 などのタグは GTM の管理画面側で設定し、コードには書きません。
お問い合わせの送信完了は `contact_submit` イベントとして `dataLayer` に送っています。

## お問い合わせ

`contact.astro` のフォームは reCAPTCHA v3 のトークンを付けて Cloudflare Worker（`wb-contact`）へ送信し、
Worker が検証したうえで Google フォームへ転送します。
送信先の URL や reCAPTCHA のシークレットは Worker の Secret で管理し、リポジトリには置きません。
