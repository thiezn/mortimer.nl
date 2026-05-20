import { b as buildSeo } from "../../../chunks/seo.js";
function load() {
  return {
    seo: buildSeo({
      title: "Contact",
      path: "/contact",
      keywords: ["contact", "github", "linkedin", "twitter"]
    })
  };
}
export {
  load
};
