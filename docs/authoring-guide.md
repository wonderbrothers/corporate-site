# コンテンツ運用ガイド（wonder-bros.com）

このサイトは **Astro**（静的サイト）で、`main` ブランチに push すると
**GitHub Actions が自動ビルド＆デプロイ**します。記事や固定ページは、
決まった場所にファイルを追加するだけで公開できます。

---

## 0. 基本の流れ（プレビュー → 公開）

```bash
# 1) ローカルで確認しながら編集
npm install        # 初回のみ
npm run dev        # → http://localhost:4321 （保存すると自動リロード）

# 2) 公開（コミットして push するだけ）
git add -A
git commit -m "お知らせ追加: ○○"
git push origin main
```

push 後、1〜2分で自動的に本番（https://wonder-bros.com）へ反映されます。
`sitemap.xml` も自動更新されます。

> ⚠️ 見た目の最終確認は **ローカル（`npm run dev` / `npm run preview`）** か
> **本番URL** で行ってください。`github.io/corporate-site/` は設定上くずれて見えます（仕様）。

---

## 1. お知らせ（ニュース）を追加する

`src/content/news/` に **Markdown ファイル**を1つ作るだけです。
ファイル名がそのまま URL になります（例 `2026-08-01-example.md` → `/news/2026-08-01-example/`）。

**テンプレート**（`src/content/news/2026-08-01-example.md`）:

```markdown
---
title: ここにタイトル
date: 2026-08-01
description: 一覧やSNS共有に使う短い説明（省略可）
draft: false
---

本文をここに書きます。**太字**、[リンク](https://example.com)、箇条書きなどが使えます。

## 見出し

- 箇条書き1
- 箇条書き2
```

| frontmatter | 必須 | 説明 |
|---|---|---|
| `title` | ✅ | 記事タイトル |
| `date` | ✅ | 公開日（`YYYY-MM-DD`）。一覧は日付の新しい順に自動整列 |
| `description` | 任意 | メタ説明（SEO/OGP）。未指定ならサイト既定文 |
| `draft` | 任意 | `true` にすると**非公開**（ビルドに含まれない）。書きかけに便利 |

- 一覧ページ：`/news/`（自動生成）
- 詳細ページ：`/news/<ファイル名>/`（自動生成）
- ファイル名は英数字とハイフン推奨（日本語も可だがURLが分かりにくくなる）

---

## 2. 実績（ワークス）を追加する

`src/content/works/` に Markdown を作成します。

**テンプレート**（`src/content/works/example-project.md`）:

```markdown
---
title: プロジェクト名
date: 2026-07-01
client: 株式会社サンプル
summary: 一覧・詳細に表示する短い概要（省略可）
thumbnail: /images/works/example.webp
draft: false
---

## 概要

プロジェクトの説明。

## 取り組み

- 実施したこと1
- 実施したこと2

![キャプチャ](/images/works/example-shot.webp)
```

| frontmatter | 必須 | 説明 |
|---|---|---|
| `title` | ✅ | 案件名 |
| `date` | ✅ | 日付（並び順に使用） |
| `client` | 任意 | クライアント名 |
| `summary` | 任意 | 概要（メタ説明にも使用）|
| `thumbnail` | 任意 | 一覧カードのサムネイル画像パス（`/images/...`）|
| `draft` | 任意 | `true` で非公開 |

- 一覧：`/works/`（カードグリッド、自動生成）
- 詳細：`/works/<ファイル名>/`（自動生成）

---

## 3. 固定ページを追加する（サービス紹介 / 会社概要 / 採用 など）

`src/pages/` に `.astro` ファイルを作ります。**ファイル名がURL**になります。

- `src/pages/services.astro` → `/services/`
- `src/pages/company.astro`  → `/company/`
- `src/pages/recruit.astro`  → `/recruit/`

**テンプレート**（サービス紹介の例：`src/pages/services.astro`）:

```astro
---
import Base from "../layouts/Base.astro";
import SiteHeader from "../components/SiteHeader.astro";
import SiteFooter from "../components/SiteFooter.astro";
import "../styles/content.css";
---

<Base
  title="サービス | 株式会社ワンダーブラザース"
  description="ワンダーブラザースが提供するデザイン・ブランディング・開発のサービス紹介。"
  path="/services/"
>
  <div class="content-page">
    <SiteHeader />
    <main class="content-main">
      <div class="content-card">
        <h1 class="page-title"><span class="page-title__en">SERVICES</span>サービス</h1>

        <div class="article__body">
          <h2>デザイン</h2>
          <p>ここにサービスの説明を書きます。</p>

          <h2>ブランディング</h2>
          <p>ここに説明。</p>

          <h2>開発</h2>
          <p>ここに説明。</p>
        </div>

        <a class="back-link" href="/">トップページへ戻る</a>
      </div>
    </main>
    <SiteFooter />
  </div>
</Base>
```

### 使えるクラス（`content.css`）
| クラス | 用途 |
|---|---|
| `content-page` | ページ全体（オレンジ地・フレックス）。必ず一番外側に |
| `content-main` / `content-card` | 中央寄せコンテナ／クリームのカード |
| `page-title` / `page-title__en` | 見出し（日本語）／その上の英字ラベル |
| `article__body` | 本文エリア（h2/h3/p/ul/a などが自動で整う）|
| `back-link` | 枠線ボタン（戻る等）|
| `<SiteHeader />` / `<SiteFooter />` | 共通ロゴヘッダー／フッター |

### Base に渡す値
| props | 説明 |
|---|---|
| `title` | `<title>`・OGP タイトル |
| `description` | メタ説明（SEO/OGP）|
| `path` | そのページのパス（例 `/services/`）。canonical/OGP のURL生成に使用。**末尾スラッシュ必須** |
| `noindex` | 検索除外したいページのみ `noindex` を付ける |

---

## 4. 画像の追加

- 画像は **`public/images/`** に置きます（実績用にサブフォルダを作ってもOK：`public/images/works/`）。
- 参照は先頭スラッシュ付きの絶対パス：**`/images/ファイル名`**
  - 例：`public/images/works/abc.webp` → 記事内で `![説明](/images/works/abc.webp)`
- 形式は `webp`（軽い・推奨）/ `png` / `jpg` / `svg` / `gif`。

---

## 5. トップページからの導線（ナビ）について

トップ（`/`）は Studio 由来のデザインを移植したページのため、
**新規ページへのリンクは自動では追加されません**。
`/services/` などは URL 直打ち・sitemap 経由ではアクセスできますが、
トップやフッターにメニューを足したい場合は別途デザイン作業が必要です（相談してください）。

---

## 6. よくある質問・注意点

- **公開したくない下書き** → frontmatter に `draft: true`。`false` にして push すると公開。
- **日付順** → 一覧は `date` の新しい順に自動整列。
- **URL** → ファイル名がそのまま URL（英数字＋ハイフン推奨）。
- **sitemap / SEO** → ページを追加すれば `sitemap.xml` に自動追加、canonical/OGP も `Base` が自動生成。
- **本番URL** → https://wonder-bros.com （独自ドメイン・HTTPS）。
- **お問い合わせフォーム** → `src/pages/contact.astro`。reCAPTCHA v3 のサイトキー／Worker URL は同ファイル冒頭の定数。送信検証は Cloudflare Worker（`worker/recaptcha-proxy.js`）。
- **デプロイが失敗したら** → GitHub の **Actions** タブでエラー内容を確認（Astro は Node 22 が必要。ワークフローで指定済み）。

---

## 早見表：やりたいこと → 置き場所

| やりたいこと | 置き場所 | 反映先URL |
|---|---|---|
| お知らせを書く | `src/content/news/○○.md` | `/news/○○/` |
| 実績を載せる | `src/content/works/○○.md` | `/works/○○/` |
| 固定ページを作る | `src/pages/○○.astro` | `/○○/` |
| 画像を足す | `public/images/○○` | `/images/○○` |

作成 → `npm run dev` で確認 → `git push origin main` で公開、が基本サイクルです。
