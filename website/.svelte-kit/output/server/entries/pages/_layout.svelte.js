import { a5 as head, $ as escape_html, J as attr, _ as ensure_array_like, ai as spread_props, K as attr_class, Y as derived } from "../../chunks/renderer.js";
import { s as siteConfig } from "../../chunks/site.js";
import { S as SocialIcon } from "../../chunks/SocialIcon.js";
import { p as page } from "../../chunks/index.js";
import "clsx";
import { I as Icon } from "../../chunks/Icon.js";
function Seo($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { seo } = $$props;
    head("gsrl61", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(seo.title)}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", seo.description)}/> <link rel="canonical"${attr("href", seo.canonical)}/> <meta property="og:type"${attr("content", seo.type)}/> <meta property="og:title"${attr("content", seo.title)}/> <meta property="og:description"${attr("content", seo.description)}/> <meta property="og:url"${attr("content", seo.canonical)}/> <meta property="og:image"${attr("content", seo.image)}/> <meta property="og:site_name"${attr("content", siteConfig.name)}/> <meta property="og:locale"${attr("content", siteConfig.locale)}/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:site"${attr("content", siteConfig.twitterHandle)}/> <meta name="twitter:creator"${attr("content", siteConfig.twitterHandle)}/> <meta name="twitter:title"${attr("content", seo.title)}/> <meta name="twitter:description"${attr("content", seo.description)}/> <meta name="twitter:image"${attr("content", seo.image)}/> <meta name="theme-color" media="(prefers-color-scheme: light)" content="#F8F9FA"/> <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#121212"/> `);
      if (seo.keywords.length > 0) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<meta name="keywords"${attr("content", seo.keywords.join(", "))}/>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (seo.type === "article" && seo.publishedTime) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<meta property="article:published_time"${attr("content", seo.publishedTime)}/>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (seo.type === "article" && seo.modifiedTime) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<meta property="article:modified_time"${attr("content", seo.modifiedTime)}/>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (seo.type === "article") {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<!--[-->`);
        const each_array = ensure_array_like(seo.keywords);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let keyword = each_array[$$index];
          $$renderer3.push(`<meta property="article:tag"${attr("content", keyword)}/>`);
        }
        $$renderer3.push(`<!--]-->`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]-->`);
    });
  });
}
function SiteFooter($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    $$renderer2.push(`<footer class="site-footer"><div class="container site-footer__inner"><p class="site-footer__copy">© ${escape_html(currentYear)} ${escape_html(siteConfig.name)}</p> <div class="site-footer__links"><a class="social-link"${attr("href", siteConfig.socials.github)} aria-label="GitHub" rel="noreferrer" target="_blank"><span class="sr-only">GitHub</span>`);
    SocialIcon($$renderer2, { name: "github", size: 15 });
    $$renderer2.push(`<!----></a> <a class="social-link"${attr("href", siteConfig.socials.twitter)} aria-label="X" rel="noreferrer" target="_blank"><span class="sr-only">X</span>`);
    SocialIcon($$renderer2, { name: "x", size: 15 });
    $$renderer2.push(`<!----></a> <a class="social-link"${attr("href", siteConfig.socials.linkedin)} aria-label="LinkedIn" rel="noreferrer" target="_blank"><span class="sr-only">LinkedIn</span>`);
    SocialIcon($$renderer2, { name: "linkedin", size: 15 });
    $$renderer2.push(`<!----></a></div></div></footer>`);
  });
}
function Search($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["path", { "d": "m21 21-4.34-4.34" }],
    ["circle", { "cx": "11", "cy": "11", "r": "8" }]
  ];
  Icon($$renderer, spread_props([
    { name: "search" },
    /**
     * @component @name Search
     * @description Lucide SVG icon component, renders SVG Element with children.
     *
     * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMjEgMjEtNC4zNC00LjM0IiAvPgogIDxjaXJjbGUgY3g9IjExIiBjeT0iMTEiIHI9IjgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/search
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
function SearchDialog($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Moon($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "path",
      {
        "d": "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "moon" },
    /**
     * @component @name Moon
     * @description Lucide SVG icon component, renders SVG Element with children.
     *
     * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAuOTg1IDEyLjQ4NmE5IDkgMCAxIDEtOS40NzMtOS40NzJjLjQwNS0uMDIyLjYxNy40Ni40MDIuODAzYTYgNiAwIDAgMCA4LjI2OCA4LjI2OGMuMzQ0LS4yMTUuODI1LS4wMDQuODAzLjQwMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/moon
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
function Sun($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "4" }],
    ["path", { "d": "M12 2v2" }],
    ["path", { "d": "M12 20v2" }],
    ["path", { "d": "m4.93 4.93 1.41 1.41" }],
    ["path", { "d": "m17.66 17.66 1.41 1.41" }],
    ["path", { "d": "M2 12h2" }],
    ["path", { "d": "M20 12h2" }],
    ["path", { "d": "m6.34 17.66-1.41 1.41" }],
    ["path", { "d": "m19.07 4.93-1.41 1.41" }]
  ];
  Icon($$renderer, spread_props([
    { name: "sun" },
    /**
     * @component @name Sun
     * @description Lucide SVG icon component, renders SVG Element with children.
     *
     * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI0IiAvPgogIDxwYXRoIGQ9Ik0xMiAydjIiIC8+CiAgPHBhdGggZD0iTTEyIDIwdjIiIC8+CiAgPHBhdGggZD0ibTQuOTMgNC45MyAxLjQxIDEuNDEiIC8+CiAgPHBhdGggZD0ibTE3LjY2IDE3LjY2IDEuNDEgMS40MSIgLz4KICA8cGF0aCBkPSJNMiAxMmgyIiAvPgogIDxwYXRoIGQ9Ik0yMCAxMmgyIiAvPgogIDxwYXRoIGQ9Im02LjM0IDE3LjY2LTEuNDEgMS40MSIgLz4KICA8cGF0aCBkPSJtMTkuMDcgNC45My0xLjQxIDEuNDEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/sun
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
function Sun_moon($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["path", { "d": "M12 2v2" }],
    [
      "path",
      {
        "d": "M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"
      }
    ],
    ["path", { "d": "M16 12a4 4 0 0 0-4-4" }],
    ["path", { "d": "m19 5-1.256 1.256" }],
    ["path", { "d": "M20 12h2" }]
  ];
  Icon($$renderer, spread_props([
    { name: "sun-moon" },
    /**
     * @component @name SunMoon
     * @description Lucide SVG icon component, renders SVG Element with children.
     *
     * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMnYyIiAvPgogIDxwYXRoIGQ9Ik0xNC44MzcgMTYuMzg1YTYgNiAwIDEgMS03LjIyMy03LjIyMmMuNjI0LS4xNDcuOTcuNjYuNzE1IDEuMjQ4YTQgNCAwIDAgMCA1LjI2IDUuMjU5Yy41ODktLjI1NSAxLjM5Ni4wOSAxLjI0OC43MTUiIC8+CiAgPHBhdGggZD0iTTE2IDEyYTQgNCAwIDAgMC00LTQiIC8+CiAgPHBhdGggZD0ibTE5IDUtMS4yNTYgMS4yNTYiIC8+CiAgPHBhdGggZD0iTTIwIDEyaDIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/sun-moon
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
function ThemeToggle($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const options = [
      { label: "Auto", value: "system", icon: Sun_moon },
      { label: "Light", value: "light", icon: Sun },
      { label: "Dark", value: "dark", icon: Moon }
    ];
    let preference = "system";
    let menuOpen = false;
    const currentOption = derived(() => options.find((option) => option.value === preference) ?? options[0]);
    $$renderer2.push(`<div${attr_class("theme-switcher", void 0, { "open": menuOpen })}><button type="button" class="theme-switcher__trigger"${attr("aria-expanded", menuOpen)}${attr("aria-label", `Theme: ${currentOption().label}`)}>`);
    if (currentOption().icon) {
      $$renderer2.push("<!--[-->");
      currentOption().icon($$renderer2, { size: 16, strokeWidth: 2 });
      $$renderer2.push("<!--]-->");
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push("<!--]-->");
    }
    $$renderer2.push(`</button> <div class="theme-switcher__panel" role="group" aria-label="Theme options"><!--[-->`);
    const each_array = ensure_array_like(options);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let option = each_array[$$index];
      $$renderer2.push(`<button type="button"${attr_class("theme-switcher__option", void 0, { "active": preference === option.value })}${attr("aria-label", option.label)}${attr("title", option.label)}>`);
      if (option.icon) {
        $$renderer2.push("<!--[-->");
        option.icon($$renderer2, { size: 16, strokeWidth: 2 });
        $$renderer2.push("<!--]-->");
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push("<!--]-->");
      }
      $$renderer2.push(`</button>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
function SiteHeader($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { navigation } = $$props;
    const showPrimaryNavigation = derived(() => page.url.pathname !== "/articles");
    $$renderer2.push(`<header class="site-header"><div class="container site-header__inner"><div class="site-header__start"><a class="brand" href="/">mortimer.nl</a> `);
    if (showPrimaryNavigation()) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<nav class="primary-nav" aria-label="Primary"><!--[-->`);
      const each_array = ensure_array_like(navigation);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let item = each_array[$$index];
        $$renderer2.push(`<a${attr("href", item.href)}>${escape_html(item.label)}</a>`);
      }
      $$renderer2.push(`<!--]--></nav>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="site-header__actions"><button class="search-button" type="button" aria-label="Open search" title="Search">`);
    Search($$renderer2, { size: 17, strokeWidth: 2.3 });
    $$renderer2.push(`<!----> <span class="sr-only">Search</span></button> `);
    ThemeToggle($$renderer2);
    $$renderer2.push(`<!----></div></div></header> `);
    SearchDialog($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
const favicon = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='107'%20height='128'%20viewBox='0%200%20107%20128'%3e%3ctitle%3esvelte-logo%3c/title%3e%3cpath%20d='M94.157%2022.819c-10.4-14.885-30.94-19.297-45.792-9.835L22.282%2029.608A29.92%2029.92%200%200%200%208.764%2049.65a31.5%2031.5%200%200%200%203.108%2020.231%2030%2030%200%200%200-4.477%2011.183%2031.9%2031.9%200%200%200%205.448%2024.116c10.402%2014.887%2030.942%2019.297%2045.791%209.835l26.083-16.624A29.92%2029.92%200%200%200%2098.235%2078.35a31.53%2031.53%200%200%200-3.105-20.232%2030%2030%200%200%200%204.474-11.182%2031.88%2031.88%200%200%200-5.447-24.116'%20style='fill:%23ff3e00'/%3e%3cpath%20d='M45.817%20106.582a20.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.503%2018%2018%200%200%201%20.624-2.435l.49-1.498%201.337.981a33.6%2033.6%200%200%200%2010.203%205.098l.97.294-.09.968a5.85%205.85%200%200%200%201.052%203.878%206.24%206.24%200%200%200%206.695%202.485%205.8%205.8%200%200%200%201.603-.704L69.27%2076.28a5.43%205.43%200%200%200%202.45-3.631%205.8%205.8%200%200%200-.987-4.371%206.24%206.24%200%200%200-6.698-2.487%205.7%205.7%200%200%200-1.6.704l-9.953%206.345a19%2019%200%200%201-5.296%202.326%2020.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.502%2017.99%2017.99%200%200%201%208.13-12.052l26.081-16.623a19%2019%200%200%201%205.3-2.329%2020.72%2020.72%200%200%201%2022.237%208.243%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-.624%202.435l-.49%201.498-1.337-.98a33.6%2033.6%200%200%200-10.203-5.1l-.97-.294.09-.968a5.86%205.86%200%200%200-1.052-3.878%206.24%206.24%200%200%200-6.696-2.485%205.8%205.8%200%200%200-1.602.704L37.73%2051.72a5.42%205.42%200%200%200-2.449%203.63%205.79%205.79%200%200%200%20.986%204.372%206.24%206.24%200%200%200%206.698%202.486%205.8%205.8%200%200%200%201.602-.704l9.952-6.342a19%2019%200%200%201%205.295-2.328%2020.72%2020.72%200%200%201%2022.237%208.242%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-8.13%2012.053l-26.081%2016.622a19%2019%200%200%201-5.3%202.328'%20style='fill:%23fff'/%3e%3c/svg%3e";
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children, data } = $$props;
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<link rel="icon"${attr("href", favicon)}/>`);
    });
    Seo($$renderer2, { seo: data.seo ?? data.defaultSeo });
    $$renderer2.push(`<!----> <div class="site-shell">`);
    SiteHeader($$renderer2, {
      navigation: data.navigation,
      searchEntries: data.searchEntries
    });
    $$renderer2.push(`<!----> <main class="site-main">`);
    children($$renderer2);
    $$renderer2.push(`<!----></main> `);
    SiteFooter($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  _layout as default
};
