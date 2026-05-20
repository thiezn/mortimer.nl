import { s as siteConfig } from "./site.js";
function toAbsoluteUrl(path) {
  return new URL(path, siteConfig.siteUrl).toString();
}
function buildSeo({
  title,
  description = siteConfig.description,
  path = "/",
  image = siteConfig.defaultOgImage,
  type = "website",
  keywords = [],
  publishedTime,
  modifiedTime
} = {}) {
  return {
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.defaultTitle,
    description,
    canonical: toAbsoluteUrl(path),
    image: toAbsoluteUrl(image),
    type,
    keywords,
    publishedTime,
    modifiedTime
  };
}
export {
  buildSeo as b
};
