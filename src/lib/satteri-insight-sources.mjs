// INSIGHTS の記事本文で、「出典：」「補足出典：」「Source:」「Additional source:」で始まる段落に
// class="wb-ins-source" を付け、小さい文字で表示できるようにする（見た目は insights.css）。
// astro.config.mjs の markdown.processor（Astro 7 標準の Sätteri）に hastPlugins として登録している。
const SOURCE = /^(出典：|補足出典：|Source:|Additional source:)/;

export default {
  name: "wb-insight-sources",
  element: {
    filter: ["p"],
    visit(node, ctx) {
      if (!ctx.fileURL?.pathname.includes("/content/insights/")) return;
      if (SOURCE.test(ctx.textContent(node).trim())) ctx.setProperty(node, "className", ["wb-ins-source"]);
    },
  },
};
