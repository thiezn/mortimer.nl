import { g as getAllArticles, a as getArticleBySlug } from "../../../../chunks/articles.js";
import { b as buildSeo } from "../../../../chunks/seo.js";
function entries() {
  return getAllArticles().map(({ slug }) => ({ slug }));
}
function load({ params }) {
  const article = getArticleBySlug(params.slug);
  return {
    article,
    seo: buildSeo({
      title: article.title,
      description: article.description,
      path: article.href,
      type: "article",
      keywords: article.tags ?? [],
      publishedTime: article.createdAt,
      modifiedTime: article.updatedAt
    })
  };
}
export {
  entries,
  load
};
