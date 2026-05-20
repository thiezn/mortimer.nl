import { g as getAllArticles, c as getFeaturedArticles } from "../../chunks/articles.js";
import { b as buildSeo } from "../../chunks/seo.js";
function load() {
  const allArticles = getAllArticles();
  const featuredArticles = getFeaturedArticles(3);
  const homepageArticles = [
    ...featuredArticles,
    ...allArticles.filter((article) => !featuredArticles.some((featured) => featured.slug === article.slug))
  ].slice(0, 3);
  return {
    seo: buildSeo({
      title: "Mathijs Mortimer",
      path: "/",
      keywords: ["Rust", "Python", "infrastructure", "cloud", "SvelteKit"]
    }),
    articleCount: allArticles.length,
    featuredArticles: homepageArticles
  };
}
export {
  load
};
