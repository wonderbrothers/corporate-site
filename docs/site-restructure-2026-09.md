# トップページ再構築（2026-09）— 分類・情報設計・コピー

目的：WONDER BROTHERS を「UX/UI・DX支援会社」ではなく、
**まだ答えが見えていない問いに対して、見つけ、つくり、学びながら答えを探すデザインスタジオ**として伝える。
ビジュアル（配色・余白・タイポグラフィ・写真・アニメーション）は維持し、情報設計とコピーを組み替えた。

ブランドの中心（確定コピー・変更禁止）

- 答えのない問いを、つくることで確かめる。
- Build to explore the unanswered.
- DISCOVER. MAKE. LEARN.／見つける。つくる。学ぶ。

---

## STEP 2　既存コンテンツの5分類

| 既存コンテンツ | 分類 | 行き先・扱い |
|---|---|---|
| HERO（イラスト・ロゴ・SCROLL・ロゴ登場アニメ） | 残す | そのまま |
| 大見出し Discover. / Design. / Development. | 書き換える | 同じ演出（順次フェードアップ）で「Build to explore / the unanswered.」に。旧3語は Discover / Make / Learn として APPROACH へ |
| OUR MISSION「あったらいいな」 | 削除する | ブランドの中心コピーに置き換え（meta description・JSON-LD も更新） |
| OUR THEME 導入文・注記 | 統合する | 事業内容なので CLIENT WORK の本文へ |
| OUR THEME 1〜3（新規サービス／PoC／DX） | 移動する | CLIENT WORK のサービス5分類へ（New Service Design / PoC・Prototype / DX） |
| OUR VALUE（体験の可視化・UI/UX） | 統合する | APPROACH（Make）と OUR BELIEF へ |
| OUR GOVERNANCE | 書き換える | SECURITY & GOVERNANCE として会社情報の近くへ。要約1文＋「詳しく見る」で折りたたみ |
| WE THINK 見出し | 削除する | 見出しは APPROACH に。「We think by making.」として思想だけ継承 |
| WE THINK サブ「Design is... work of removing unnecessary things」 | 統合する | OUR BELIEF「複雑なものを整理し」へ |
| WE THINK カード（Discover / Design / Development＋円のグラフィック3点） | 書き換える | カードとグラフィックはそのまま、Discover / Make / Learn に。旧4段階表現は廃止 |
| WONDER LAB 見出し・英サブ・イラスト・カルーセル | 残す | そのまま |
| WONDER LAB 導入文（1文ずつ改行） | 書き換える | 段落の読み物に。CLIENT WORK との関係（説明と証明）を明示 |
| 64MONSTERS / RENSOU GAME / mori の紹介文 | 書き換える | 「問い → DISCOVER / MAKE / LEARN」の構造へ。mori は FOREST EXPERIMENT に改称（ロゴは継続） |
| COMPANY INFORMATION | 書き換える | ABOUT に。事業内容を追加、資本金は掲載項目から外した（指示書 §21 の掲載内容に合わせた。戻すなら index.astro の company 配列に1行） |
| CONTACT ボタン | 残す（文言を書き換え） | 「まだ企画になっていない段階でも」という相談しやすい導入文を追加 |
| フッター | 残す | そのまま |
| （新設）ナビゲーション | — | WORK / LAB / APPROACH / ABOUT / CONTACT。HERO を過ぎると上部に出る |
| （新設）SELECTED WORK | — | 業種 × 問い × 支援内容。企業名・案件名・数値は掲載しない |
| （新設）OUR BELIEF | — | MISSION・VALUE・WE THINK の思想部分を統合 |

---

## STEP 3　新しい情報設計

| # | セクション | 役割 | 背景 |
|---|---|---|---|
| 01 | HERO | 何者か：答えのない問いを、つくることで確かめる。 | メインカラー |
| 02 | APPROACH `#approach` | どう向き合うか：DISCOVER. MAKE. LEARN. と循環 | クリーム |
| 03 | CLIENT WORK `#work` | 企業に何ができるか（説明） | クリーム |
| 04 | SELECTED WORK | どの領域で実践してきたか | クリーム |
| 05 | WONDER LAB `#lab` | 自分たちでも実践している（証明） | クリーム |
| 06 | OUR BELIEF | 共通する思想 | メインカラー（帯） |
| 07 | ABOUT `#about` | 会社情報 | クリーム |
| 08 | SECURITY & GOVERNANCE | 安心感の担保（簡潔） | クリーム |
| 09 | CONTACT `#contact` | どう相談できるか | クリーム |

ストーリーの背骨：思想（HERO）→ DISCOVER. MAKE. LEARN.（APPROACH）→ CLIENT WORK（説明）→ WONDER LAB（証明）→ 同じ考え方でつながる（LAB の締め・OUR BELIEF）。

循環の表現：APPROACH の3カードに 01 / 02 / 03 の番号を振り、カードの下に
「Discover → Make → Learn → Discover　学んだことが、次の問いになる。」を置いた（矢印図は使わない）。
表示時に左から順に現れ、最後の Discover だけがメインカラーで灯る。

---

## STEP 4・5　コピー（日本語／英語）

本文のコピーは `src/pages/index.astro` の frontmatter にデータとしてまとめてある。
文言の修正はそこだけで済む（HTML を触らなくてよい）。

### SELECTED WORK の公開ルール

- `cases` 配列の `published: true` だけが表示される。
- 掲載中：Insurance（損害保険会社）、Financial Services（金融サービス事業者）。
- **下書き（非公開）**：FinTech / Payment、Enterprise、Insurance Platform、Digital Service。
  業種の枠だけ用意し、問い・工程は空欄。実際の案件に基づいて記入してから `published: true` にする。
- 書いてはいけないもの：クライアント名、固有のサービス名・プロジェクト名、機密性の高い数値、
  公開許可のない画面、特定企業を推測できる内部情報、実際には行っていない工程、成果数値の創作。
- 業種は「国内大手損害保険会社」ではなく「損害保険会社」の粒度にする。

---

## STEP 7　確認結果

- [x] 「DML」「D.M.L.」「D/M/L」の省略形：ソース内に0件
- [x] 旧4段階（Discover / Design / Build / Learn）・旧3語（Design. / Development.）の見出し：0件
- [x] Discovery Phase / Making Process / Learning Cycle などの言い換え：0件
- [x] 禁止語（世界を変える／革新的／圧倒的／最先端／唯一無二／未来を創造する）：0件
- [x] クライアント企業名・案件名：0件
- [x] 大見出しの SP 係数を Noto Sans 700 の実測値で設定（下記）。300〜540px の全幅で 98.1〜98.8% を埋め、1行に収まることを確認
- [x] 1920〜300px の16幅で、ビューポートからはみ出す要素なし（HERO 画像の意図的な 170% を除く）
- [x] ナビの各リンクで、見出しが固定ナビの下に隠れずに止まる（PC・SP）
- [x] 375px 未満はナビのマークを隠してリンク5つを収める
- [x] フッターの Privacy Policy が 321〜360px ではみ出していた既存の不具合を修正（折り返し可に）
- [ ] SP のページ長は約 1.4 倍（390px 幅で 11,530px → 約 16,600px）。SELECTED WORK と各カードの DISCOVER / MAKE / LEARN が増えたため。
      長すぎる場合の候補：SP だけ各ステップの英文を折りたたむ／事例カードを横スクロールにする

### 大見出しの SP 係数（Noto Sans 700 実測 → 採用値 ＝ 実測 + 約2%）

コンテナに `@fontsource/noto-sans` の woff2 を読み込んで測定。旧係数の検算値
（Development. 6.6091 / WONDER LAB 6.2851 / WE THINK 4.6751）が実機の実測
（6.6075 / 6.2848 / 4.6754）と 0.03% 以内で一致することを確認してから測った。

| 文字列 | letter-spacing | 実測 | 採用 |
|---|---|---|---|
| the unanswered.（Build to explore より長い方） | -0.03em | 7.9320 | 8.09 |
| APPROACH | -0.04em | 5.1201 | 5.22 |
| CLIENT WORK | -0.04em | 6.4280 | 6.56 |
| WONDER LAB（変更なし） | -0.04em | 6.2848 | 6.41 |
| Design is not（decoration. より長い方） | -0.03em | 6.0520 | 6.17 |
