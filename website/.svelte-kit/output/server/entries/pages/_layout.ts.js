import { b as getArticleSearchEntries } from "../../chunks/articles.js";
import { b as buildSeo } from "../../chunks/seo.js";
import { a as staticSearchEntries, p as primaryNavigation } from "../../chunks/site.js";
const prerender = true;
function load() {
  return {
    defaultSeo: buildSeo(),
    navigation: primaryNavigation,
    searchEntries: [...staticSearchEntries, ...getArticleSearchEntries()]
  };
}
export {
  load,
  prerender
};
