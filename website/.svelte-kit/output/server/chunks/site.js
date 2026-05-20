const siteConfig = {
  name: "Mathijs Mortimer",
  defaultTitle: "Mathijs Mortimer | Rust, Python, infrastructure",
  description: "Personal site for Mathijs Mortimer, focused on Rust, Python, infrastructure, cloud systems, and articles about building useful tools.",
  siteUrl: "https://mortimer.nl",
  defaultOgImage: "/social-card.svg",
  locale: "en_US",
  twitterHandle: "@thiezn_",
  socials: {
    github: "https://github.com/thiezn",
    twitter: "https://twitter.com/thiezn_",
    linkedin: "https://www.linkedin.com/in/mathijs-mortimer-3776512/"
  }
};
const primaryNavigation = [
  { label: "About me", href: "/#about" },
  { label: "Articles", href: "/#articles" },
  { label: "Contact", href: "/#contact" }
];
const staticSearchEntries = [
  {
    title: "About me",
    description: "Jump to the homepage introduction and current focus areas.",
    href: "/#about",
    kind: "section",
    keywords: ["home", "intro", "rust", "python", "infrastructure"]
  },
  {
    title: "Articles",
    description: "Browse the writing archive and jump to featured posts.",
    href: "/#articles",
    kind: "section",
    keywords: ["blog", "writing", "posts", "publications"]
  },
  {
    title: "Contact",
    description: "Jump to the home page contact section with the main social links.",
    href: "/#contact",
    kind: "section",
    keywords: ["contact", "github", "x", "social"]
  }
];
export {
  staticSearchEntries as a,
  primaryNavigation as p,
  siteConfig as s
};
