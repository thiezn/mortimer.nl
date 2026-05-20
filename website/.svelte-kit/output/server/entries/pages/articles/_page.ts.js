import { g as getAllArticles } from "../../../chunks/articles.js";
import { b as buildSeo } from "../../../chunks/seo.js";
function load() {
  return {
    articles: getAllArticles(),
    seo: buildSeo({
      title: "Articles",
      path: "/articles",
      keywords: ["articles", "mdsvex", "rust", "python", "infrastructure"]
    })
  };
}
export {
  load
};
