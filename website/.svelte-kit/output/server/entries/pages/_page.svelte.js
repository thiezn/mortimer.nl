import { ai as spread_props, $ as escape_html, _ as ensure_array_like, J as attr } from "../../chunks/renderer.js";
import { A as ArticleCard } from "../../chunks/ArticleCard.js";
import { S as SocialIcon } from "../../chunks/SocialIcon.js";
import "clsx";
import { s as siteConfig } from "../../chunks/site.js";
import { I as Icon } from "../../chunks/Icon.js";
function Arrow_right($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["path", { "d": "M5 12h14" }],
    ["path", { "d": "m12 5 7 7-7 7" }]
  ];
  Icon($$renderer, spread_props([
    { name: "arrow-right" },
    /**
     * @component @name ArrowRight
     * @description Lucide SVG icon component, renders SVG Element with children.
     *
     * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSAxMmgxNCIgLz4KICA8cGF0aCBkPSJtMTIgNSA3IDctNyA3IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/arrow-right
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
function SectionHeading($$renderer, $$props) {
  let { eyebrow, title, intro } = $$props;
  $$renderer.push(`<div class="section-heading"><p class="eyebrow">${escape_html(eyebrow)}</p> <h2>${escape_html(title)}</h2> <p>${escape_html(intro)}</p></div>`);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    const focusAreas = [
      "Rust systems programming",
      "Python tooling and automation",
      "Infrastructure and cloud architecture",
      "Hobby electronics and robotics"
    ];
    const currentThreads = [
      {
        title: "Building reliable tools",
        copy: "Most of the interesting work starts at the seam between software and operations: deployment flows, wrappers, CLIs, integrations, and the odd bit of low-level debugging."
      },
      {
        title: "Working across stacks",
        copy: "Rust and Python are recurring anchors, but I keep drifting into iOS, Swift, bug bounty work, photography, and other projects that reward curiosity and patience."
      }
    ];
    $$renderer2.push(`<section class="section section--hero" id="about"><div class="container hero-grid"><div class="hero-copy"><p class="eyebrow">About me</p> <h1>Rust, Python, infrastructure, and a habit of building small useful things.</h1> <p class="lead">I'm Mathijs Mortimer, a developer from the Netherlands focused on tools, systems, and infrastructure that should feel boring in production and enjoyable to build.</p> <p>A lot of that work lives in Rust and Python. Around the edges, it turns into cloud plumbing, hobby electronics, robotics, iOS experiments, and the occasional security rabbit hole.</p> <div class="pills"><!--[-->`);
    const each_array = ensure_array_like(focusAreas);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let area = each_array[$$index];
      $$renderer2.push(`<span class="pill">${escape_html(area)}</span>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="button-row"><a class="button" href="/articles">Read the articles</a> <a class="button button--secondary" href="/#contact">Get in touch</a></div></div> <aside class="hero-panel surface-card"><p class="kicker">Currently</p> <h2>Shipping tools, refining infra, and writing notes worth reusing.</h2> <dl class="detail-list surface-card"><div><dt>Base</dt> <dd>Netherlands</dd></div> <div><dt>Stack</dt> <dd>Rust, Python, cloud</dd></div> <div><dt>Output</dt> <dd>${escape_html(data.articleCount)} published article${escape_html(data.articleCount === 1 ? "" : "s")}</dd></div></dl> <div class="link-row"><a class="social-link"${attr("href", siteConfig.socials.github)} aria-label="GitHub" rel="noreferrer" target="_blank"><span class="sr-only">GitHub</span>`);
    SocialIcon($$renderer2, { name: "github", size: 16 });
    $$renderer2.push(`<!----></a> <a class="social-link"${attr("href", siteConfig.socials.twitter)} aria-label="X" rel="noreferrer" target="_blank"><span class="sr-only">X</span>`);
    SocialIcon($$renderer2, { name: "x", size: 16 });
    $$renderer2.push(`<!----></a> <a class="social-link"${attr("href", siteConfig.socials.linkedin)} aria-label="LinkedIn" rel="noreferrer" target="_blank"><span class="sr-only">LinkedIn</span>`);
    SocialIcon($$renderer2, { name: "linkedin", size: 16 });
    $$renderer2.push(`<!----></a></div></aside></div></section> <section class="section"><div class="container section-grid"><div class="section-stack">`);
    SectionHeading($$renderer2, {
      eyebrow: "Work",
      title: "The useful overlap between engineering depth and practical delivery.",
      intro: "I like work that has a clear operational edge: tools people keep using, systems that become easier to reason about, and documentation that shortens the next debugging session."
    });
    $$renderer2.push(`<!----></div> <div class="section-stack"><!--[-->`);
    const each_array_1 = ensure_array_like(currentThreads);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let thread = each_array_1[$$index_1];
      $$renderer2.push(`<article class="stacked-card surface-card"><h3>${escape_html(thread.title)}</h3> <p>${escape_html(thread.copy)}</p></article>`);
    }
    $$renderer2.push(`<!--]--></div></div></section> <section class="section" id="articles"><div class="container">`);
    SectionHeading($$renderer2, {
      eyebrow: "Articles",
      title: "Markdown-backed notes with actual publish and update metadata.",
      intro: "Articles are written in mdsvex, surfaced from the dedicated articles folder, and rendered with consistent metadata, routing, and syntax highlighting for code-heavy posts."
    });
    $$renderer2.push(`<!----> <div class="article-grid"><!--[-->`);
    const each_array_2 = ensure_array_like(data.featuredArticles);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let article = each_array_2[$$index_2];
      ArticleCard($$renderer2, { article, featured: true });
    }
    $$renderer2.push(`<!--]--></div> <div class="section-actions"><a class="button button--ghost" href="/articles">Browse all articles `);
    Arrow_right($$renderer2, { size: 16, strokeWidth: 2.3 });
    $$renderer2.push(`<!----></a></div></div></section> <section class="section section--contact" id="contact"><div class="container"><div class="contact-inline surface-card"><p class="eyebrow">Contact</p> <p>Best reached on X or GitHub.</p> <div class="link-row"><a class="social-link"${attr("href", siteConfig.socials.twitter)} aria-label="X" rel="noreferrer" target="_blank"><span class="sr-only">X</span>`);
    SocialIcon($$renderer2, { name: "x", size: 16 });
    $$renderer2.push(`<!----></a> <a class="social-link"${attr("href", siteConfig.socials.github)} aria-label="GitHub" rel="noreferrer" target="_blank"><span class="sr-only">GitHub</span>`);
    SocialIcon($$renderer2, { name: "github", size: 16 });
    $$renderer2.push(`<!----></a></div></div></div></section>`);
  });
}
export {
  _page as default
};
