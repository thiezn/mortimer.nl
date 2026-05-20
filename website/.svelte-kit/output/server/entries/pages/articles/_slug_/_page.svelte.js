import { ai as spread_props, $ as escape_html, J as attr, _ as ensure_array_like, Y as derived } from "../../../../chunks/renderer.js";
import { A as ArticleCategoryTag } from "../../../../chunks/ArticleCategoryTag.js";
import { I as Icon } from "../../../../chunks/Icon.js";
function Arrow_left($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["path", { "d": "m12 19-7-7 7-7" }],
    ["path", { "d": "M19 12H5" }]
  ];
  Icon($$renderer, spread_props([
    { name: "arrow-left" },
    /**
     * @component @name ArrowLeft
     * @description Lucide SVG icon component, renders SVG Element with children.
     *
     * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTIgMTktNy03IDctNyIgLz4KICA8cGF0aCBkPSJNMTkgMTJINSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/arrow-left
     * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
     *
     * @param {Object} props - Lucide icons props and any valid SVG attribute
     * @returns {FunctionalComponent} Svelte component
     *
     */
    props,
    { iconNode }
  ]));
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    const formatter = new Intl.DateTimeFormat("en", { day: "numeric", month: "long", year: "numeric" });
    const ArticleContent = derived(() => data.article.component);
    const showUpdated = derived(() => data.article.updatedAt !== data.article.createdAt);
    $$renderer2.push(`<section class="section page-section"><div class="container article-shell"><a class="back-link" href="/articles">`);
    Arrow_left($$renderer2, { size: 16, strokeWidth: 2.3 });
    $$renderer2.push(`<!----> Back to articles</a> <header class="article-header"><h1>${escape_html(data.article.title)}</h1> <p class="lead">${escape_html(data.article.description)}</p> <div class="article-header__details"><div class="article-meta"><span>Published on <time${attr("datetime", data.article.createdAt)}>${escape_html(formatter.format(new Date(data.article.createdAt)))}</time></span> `);
    if (showUpdated()) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<span>Updated <time${attr("datetime", data.article.updatedAt)}>${escape_html(formatter.format(new Date(data.article.updatedAt)))}</time></span>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> `);
    if (data.article.tags && data.article.tags.length > 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="article-tags"><!--[-->`);
      const each_array = ensure_array_like(data.article.tags);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let tag = each_array[$$index];
        ArticleCategoryTag($$renderer2, { tag });
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></header> <article class="article-content">`);
    if (ArticleContent()) {
      $$renderer2.push("<!--[-->");
      ArticleContent()($$renderer2, {});
      $$renderer2.push("<!--]-->");
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push("<!--]-->");
    }
    $$renderer2.push(`</article></div></section>`);
  });
}
export {
  _page as default
};
