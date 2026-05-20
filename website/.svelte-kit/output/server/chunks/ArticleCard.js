import { K as attr_class, J as attr, $ as escape_html, _ as ensure_array_like } from "./renderer.js";
import { A as ArticleCategoryTag } from "./ArticleCategoryTag.js";
function ArticleCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { article, featured = false } = $$props;
    const formatter = new Intl.DateTimeFormat("en", { day: "numeric", month: "short", year: "numeric" });
    $$renderer2.push(`<article${attr_class("article-card surface-card", void 0, { "article-card--featured": featured })}><h3><a class="article-card__title"${attr("href", article.href)}>${escape_html(article.title)}</a></h3> <p>${escape_html(article.excerpt)}</p> `);
    if (article.tags && article.tags.length > 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="article-tags"><!--[-->`);
      const each_array = ensure_array_like(article.tags);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let tag = each_array[$$index];
        ArticleCategoryTag($$renderer2, { tag });
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <div class="article-card__meta"><span>Published on <time${attr("datetime", article.createdAt)}>${escape_html(formatter.format(new Date(article.createdAt)))}</time></span></div></article>`);
  });
}
export {
  ArticleCard as A
};
