// INSIGHTS の記事本文の「出典」を整える（astro.config.mjs の markdown.processor＝Astro 7 標準の Sätteri に hastPlugins として登録）。
//   1. 「出典：」「補足出典：」「Source:」「Additional source:」で始まる段落に class="wb-ins-source" を付ける
//      （小さい文字で表示。見た目は insights.css）
//   2. その段落の中のリンクは別タブで開く（target="_blank" rel="noopener"）。記事を読みながら出典を確かめられるように。
//      別タブで開くことは、読み上げ用の文言（「新しいタブで開きます」）と CSS の「↗」で伝える。
const SOURCE = /^(出典：|補足出典：|Source:|Additional source:)/;
const NEW_TAB = { ja: "（新しいタブで開きます）", en: " (opens in a new tab)" };

const inInsights = (ctx) => Boolean(ctx.fileURL?.pathname.includes("/content/insights/"));
const isSource = (node, ctx) => node?.tagName === "p" && SOURCE.test(ctx.textContent(node).trim());

export default {
  name: "wb-insight-sources",
  element: [
    {
      filter: ["p"],
      visit(node, ctx) {
        if (inInsights(ctx) && isSource(node, ctx)) ctx.setProperty(node, "className", ["wb-ins-source"]);
      },
    },
    {
      filter: ["a"],
      visit(node, ctx) {
        if (!inInsights(ctx) || !isSource(ctx.parent(node), ctx)) return;
        const lang = /\/en\.md$/.test(ctx.fileURL.pathname) ? "en" : "ja";
        ctx.setProperty(node, "target", "_blank");
        ctx.setProperty(node, "rel", "noopener");
        ctx.appendChild(node, {
          type: "element",
          tagName: "span",
          properties: { className: ["wb-ins-source__newtab"] },
          children: [{ type: "text", value: NEW_TAB[lang] }],
        });
      },
    },
  ],
};
