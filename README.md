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
├── content/copy/
│   ├── ja.yaml               # 日本語版の文章（トップ / とお問い合わせ /contact/）
│   └── en.yaml               # 英語版の文章（/en/ と /en/contact/）
├── content.config.ts         # 上の YAML を読み込む設定
├── lib/i18n.ts               # 文章ファイルの読み込み・記法（改行など）の変換・各言語のURL
├── layouts/Base.astro        # <head>/SEO/OGP/hreflang/フォント/GTM/共通スクリプト
├── components/
│   ├── Home.astro            # トップページの型（日英共通。文章は持たない）
│   ├── ContactPage.astro     # お問い合わせページの型（日英共通）
│   └── SiteHeader / SiteFooter（404 など固定ページ共通）
├── pages/
│   ├── index.astro           # / … Home に ja を流し込むだけ
│   ├── contact.astro         # /contact/ … ContactPage に ja
│   ├── en/index.astro        # /en/ … Home に en
│   ├── en/contact.astro      # /en/contact/ … ContactPage に en
│   ├── privacy.astro         # プライバシーポリシー（日本語のみ）
│   └── 404.astro             # 404 ページ
├── scripts/main.js           # スクロールリビール / 追従ナビ / SP メニュードロワー / カルーセル
└── styles/                   # global（デザイントークン）/ index / contact / privacy / content(404用)
public/                       # images, favicon, CNAME, robots.txt（そのまま配信）
```

公開ページは **/ ・ /contact/ ・ /en/ ・ /en/contact/ ・ /privacy/**（＋404）です。

## 文言を直す（日本語・英語）

文章は **`src/content/copy/ja.yaml`（日本語）と `en.yaml`（英語）だけ** に書きます。
ページの型（`src/components/Home.astro` など）には文章を書きません。

- 直すときは `:` の右側だけを書き換える。項目名や字下げは変えない。
- 日英で項目名をそろえる。空欄（`""`）にした項目は、その言語のページでは表示されない。
- 書ける記法：`\n` 改行 ／ `{{ … }}` この中は改行しない ／ `[文字](/path/)` リンク。
- SELECTED WORK の事例を足すときは、`ja.yaml` と `en.yaml` の `cases.items` に同じ順番で足す。
  クライアント名・案件名・機密性の高い数値は掲載しません。
- 大見出し（APPROACH / CLIENT WORK など）の文字を変えた場合は、
  `src/styles/global.css` のスマホ用係数を測り直す必要があります（コメント参照）。
- ロゴ・画像・リンク先・並び順（Discover → Make → Learn、WONDER LAB の3プロジェクト）は型の側にあります。

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
- title は「ページ名 | 株式会社ワンダーブラザース」（トップだけ社名｜ステートメント）。description はページごとに固有の文にする。
- `sitemap.xml` は `@astrojs/sitemap` の `sitemap-0.xml` をビルドの最後に同じ名前で複製している（`astro.config.mjs` の `sitemapAlias`）。
  robots.txt と Search Console はこの `sitemap.xml` を見る。404 は sitemap に入らない。
- 内部リンクは正規のURL（`/`・`/contact/`・`/privacy/`）で書く。`index.html` 付きで書かない（別URLとして扱われるため）。
- HERO 画像は `hero-1024.webp` / `hero-1600.webp` / `hero.webp`（2048px）の3サイズを srcset で出し分けている。差し替えるときは3つとも作り直す。

## アクセス解析

`Base.astro` の `GTM_ID` に Google タグマネージャーのコンテナ ID を設定しています。
GA4 などのタグは GTM の管理画面側で設定し、コードには書きません。
お問い合わせの送信完了は `contact_submit`、フォームへの最初の入力は `contact_start` イベントとして `dataLayer` に送っています（入力内容は送らない）。GA4 に届けるには GTM 側にそれぞれのトリガーとタグが要ります。

### Cookie 同意（Google Consent Mode v2）

GTM は `Base.astro` に直接書かず、`src/scripts/wb-consent.js` が「アクセス解析を許可した人」にだけ読み込みます。
フッターの「Cookie設定」から、いつでも許可・拒否を変えられます。
仕組みは wonder-bros.com・64モンスターズ・連想ゲームの3サイト共通で、`wb-consent.js` 1本にまとまっています。

- **正本は `corporate-site/src/scripts/wb-consent.js`**。64モンスターズ（`docs/assets/wb-consent.js`）と連想ゲーム（`wb-consent.js`）はコピーで、各サイトのビルド（`npm run stamp` / `npm run build`）が正本と違っていれば自動で写し直す。コピーを手で直さないこと。各サイトが自分のドメインから配信するので、どれか1サイトが落ちても他は影響を受けない。
- **Basic Consent Mode**。未選択・拒否のあいだは GTM も GA も読み込まない（Google への通信は発生しない）。「許可する」を選んだときだけ、`analytics_storage` を `granted`（広告系3項目は常に `denied`）にしてから GTM を読み込む。
- 同意は Cookie **`wb_consent_v1`**（値は `granted` か `denied` だけ／`Domain=.wonder-bros.com`／`Path=/`／`Secure`／`SameSite=Lax`／`Max-Age=15552000`＝180日）。3サイトで共有する。ページを開くたびに期限を延ばしている（Safari は JavaScript で書いた Cookie の期限を7日に切り詰めるため、延ばさないと iPhone では毎週たずねることになる）。
- 「Cookie設定」を開く入口は、要素に `data-wb-consent-open` を付けるだけ。
- 許可→拒否に変えると、その場で GA の送信を止め（`ga-disable`）、`_ga` / `_ga_*` などの GA Cookie を消す。未選択・拒否の人がページを開いたときも、残っている GA Cookie を消す。
- localStorage / sessionStorage には触らない（診断データ・ゲームの記録は同意の対象外）。
- 同意の中身を大きく変えたら、`wb-consent.js` の `COOKIE_NAME` を `wb_consent_v2` に上げ、古い名前を `OLD_COOKIES` に足す → 全員にもう一度たずねる。
- **GTM のスニペットや noscript の iframe を HTML に直接書かないこと**（同意前に GA が動いてしまう）。

## お問い合わせ

`contact.astro` のフォームは reCAPTCHA v3 のトークンを付けて Cloudflare Worker（`wb-contact`）へ送信し、
Worker が検証したうえで Google フォームへ転送します。
送信先の URL や reCAPTCHA のシークレットは Worker の Secret で管理し、リポジトリには置きません。
