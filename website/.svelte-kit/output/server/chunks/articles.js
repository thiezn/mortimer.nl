import "clsx";
import { h as html } from "./html.js";
import { error } from "@sveltejs/kit";
const metadata$2 = {
  "title": "Hello World",
  "description": "A small starter article to verify the mdsvex content pipeline and article metadata model.",
  "createdAt": "2026-05-19",
  "updatedAt": "2026-05-19",
  "excerpt": "A short starter post that confirms the article system is wired correctly.",
  "tags": ["setup", "sveltekit"],
  "featured": false
};
const {
  title: title$2,
  description: description$2,
  createdAt: createdAt$2,
  updatedAt: updatedAt$2,
  excerpt: excerpt$2,
  tags: tags$2,
  featured: featured$2
} = metadata$2;
function Hello_world_md($$renderer) {
  $$renderer.push(`<p>Welcome to the first article on mortimer.nl. This post exists mainly to verify that frontmatter, routing, and markdown rendering are working together.</p>`);
}
const metadata$1 = {
  "title": "Python automation that stays readable",
  "description": "A small pattern for keeping Python automation scripts explicit enough to revisit months later.",
  "createdAt": "2026-05-11",
  "updatedAt": "2026-05-18",
  "excerpt": "A Python example that keeps configuration, IO, and orchestration simple enough to debug at 2 a.m.",
  "tags": ["python", "automation", "infrastructure"],
  "featured": true
};
const {
  title: title$1,
  description: description$1,
  createdAt: createdAt$1,
  updatedAt: updatedAt$1,
  excerpt: excerpt$1,
  tags: tags$1,
  featured: featured$1
} = metadata$1;
function Python_automation_checklist_md($$renderer) {
  $$renderer.push(`<p>Automation often starts as a one-off script and ends up as the thing people quietly depend on every week.</p> <p>When that happens, the first improvement is rarely abstract architecture. It is usually just making the control flow obvious enough that the next edit feels safe.</p> <pre class="language-python">${html(`<code class="language-python"><span class="token keyword">from</span> __future__ <span class="token keyword">import</span> annotations

<span class="token keyword">from</span> dataclasses <span class="token keyword">import</span> dataclass
<span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path
<span class="token keyword">import</span> json


<span class="token decorator annotation punctuation">@dataclass</span><span class="token punctuation">(</span>slots<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Settings</span><span class="token punctuation">:</span>
    source<span class="token punctuation">:</span> Path
    destination<span class="token punctuation">:</span> Path
    dry_run<span class="token punctuation">:</span> <span class="token builtin">bool</span> <span class="token operator">=</span> <span class="token boolean">False</span>


<span class="token keyword">def</span> <span class="token function">load_settings</span><span class="token punctuation">(</span>config_path<span class="token punctuation">:</span> Path<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> Settings<span class="token punctuation">:</span>
    payload <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>config_path<span class="token punctuation">.</span>read_text<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Settings<span class="token punctuation">(</span>
        source<span class="token operator">=</span>Path<span class="token punctuation">(</span>payload<span class="token punctuation">[</span><span class="token string">"source"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        destination<span class="token operator">=</span>Path<span class="token punctuation">(</span>payload<span class="token punctuation">[</span><span class="token string">"destination"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        dry_run<span class="token operator">=</span>payload<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">"dry_run"</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">sync</span><span class="token punctuation">(</span>settings<span class="token punctuation">:</span> Settings<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    files <span class="token operator">=</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span>settings<span class="token punctuation">.</span>source<span class="token punctuation">.</span>glob<span class="token punctuation">(</span><span class="token string">"*.json"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> settings<span class="token punctuation">.</span>dry_run<span class="token punctuation">:</span>
        <span class="token keyword">for</span> item <span class="token keyword">in</span> files<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"would copy </span><span class="token interpolation"><span class="token punctuation">&#123;</span>item<span class="token punctuation">.</span>name<span class="token punctuation">&#125;</span></span><span class="token string"> -> </span><span class="token interpolation"><span class="token punctuation">&#123;</span>settings<span class="token punctuation">.</span>destination<span class="token punctuation">&#125;</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>

    settings<span class="token punctuation">.</span>destination<span class="token punctuation">.</span>mkdir<span class="token punctuation">(</span>parents<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> exist_ok<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> item <span class="token keyword">in</span> files<span class="token punctuation">:</span>
        target <span class="token operator">=</span> settings<span class="token punctuation">.</span>destination <span class="token operator">/</span> item<span class="token punctuation">.</span>name
        target<span class="token punctuation">.</span>write_text<span class="token punctuation">(</span>item<span class="token punctuation">.</span>read_text<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"copied </span><span class="token interpolation"><span class="token punctuation">&#123;</span>item<span class="token punctuation">.</span>name<span class="token punctuation">&#125;</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">"__main__"</span><span class="token punctuation">:</span>
    sync<span class="token punctuation">(</span>load_settings<span class="token punctuation">(</span>Path<span class="token punctuation">(</span><span class="token string">"sync.json"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code>`)}</pre> <p>There is nothing especially advanced here. The point is that configuration is isolated, the side effects are in one function, and the dry-run path gives you confidence before you touch real files.</p> <p>That is usually enough structure to stop an automation script from becoming mysterious.</p>`);
}
const metadata = {
  "title": "Designing a calmer Rust CLI",
  "description": "Notes on shaping a Rust command-line tool so logs, errors, and defaults help instead of getting in the way.",
  "createdAt": "2026-05-14",
  "updatedAt": "2026-05-19",
  "excerpt": "A short Rust article about building friendlier command-line tools with clear errors and predictable config.",
  "tags": ["rust", "cli", "tooling"],
  "featured": true
};
const {
  title,
  description,
  createdAt,
  updatedAt,
  excerpt,
  tags,
  featured
} = metadata;
function Rust_cli_observability_md($$renderer) {
  $$renderer.push(`<p>I keep coming back to the same principle: if a tool is meant to be used repeatedly, the default path should feel frictionless and the failure path should still explain itself.</p> <p>That usually means three things:</p> <ol><li>sensible defaults</li> <li>one clear place for configuration</li> <li>error messages that say what failed <em>and</em> what to try next</li></ol> <p>Here is a small example of the shape I like for a Rust CLI:</p> <pre class="language-rust">${html(`<code class="language-rust"><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span></span><span class="token punctuation">&#123;</span>fs<span class="token punctuation">,</span> <span class="token namespace">path<span class="token punctuation">::</span></span><span class="token class-name">PathBuf</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token namespace">anyhow<span class="token punctuation">::</span></span><span class="token punctuation">&#123;</span><span class="token class-name">Context</span><span class="token punctuation">,</span> <span class="token class-name">Result</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">clap<span class="token punctuation">::</span></span><span class="token class-name">Parser</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">serde<span class="token punctuation">::</span></span><span class="token class-name">Deserialize</span><span class="token punctuation">;</span>

<span class="token attribute attr-name">#[derive(Debug, Parser)]</span>
<span class="token keyword">struct</span> <span class="token type-definition class-name">Args</span> <span class="token punctuation">&#123;</span>
    <span class="token attribute attr-name">#[arg(long, default_value = <span class="token string">"config.toml"</span>)]</span>
    config<span class="token punctuation">:</span> <span class="token class-name">PathBuf</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span>

<span class="token attribute attr-name">#[derive(Debug, Deserialize)]</span>
<span class="token keyword">struct</span> <span class="token type-definition class-name">Config</span> <span class="token punctuation">&#123;</span>
    endpoint<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span>
    retries<span class="token punctuation">:</span> <span class="token keyword">u8</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">-></span> <span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">let</span> args <span class="token operator">=</span> <span class="token class-name">Args</span><span class="token punctuation">::</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> raw <span class="token operator">=</span> <span class="token namespace">fs<span class="token punctuation">::</span></span><span class="token function">read_to_string</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>args<span class="token punctuation">.</span>config<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">with_context</span><span class="token punctuation">(</span><span class="token closure-params"><span class="token closure-punctuation punctuation">|</span><span class="token closure-punctuation punctuation">|</span></span> <span class="token macro property">format!</span><span class="token punctuation">(</span><span class="token string">"failed to read &#123;&#125;"</span><span class="token punctuation">,</span> args<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> config<span class="token punctuation">:</span> <span class="token class-name">Config</span> <span class="token operator">=</span> <span class="token namespace">toml<span class="token punctuation">::</span></span><span class="token function">from_str</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>raw<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">"invalid TOML configuration"</span><span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">;</span>

    <span class="token macro property">println!</span><span class="token punctuation">(</span>
        <span class="token string">"sending requests to &#123;&#125; with &#123;&#125; retries"</span><span class="token punctuation">,</span>
        config<span class="token punctuation">.</span>endpoint<span class="token punctuation">,</span> config<span class="token punctuation">.</span>retries
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Ok</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`)}</pre> <p>The code is not complicated, but the important part is the shape of the failure modes. A missing file turns into a useful path-specific message and bad configuration stays clearly separated from runtime problems.</p> <p>That separation matters more as tools grow. If the user can instantly tell whether the problem is input, environment, or code, the whole experience becomes easier to trust.</p>`);
}
const articleComponentModules = /* @__PURE__ */ Object.assign({
  "/src/articles/hello-world.md": Hello_world_md,
  "/src/articles/python-automation-checklist.md": Python_automation_checklist_md,
  "/src/articles/rust-cli-observability.md": Rust_cli_observability_md
});
const articleMetadataModules = /* @__PURE__ */ Object.assign({
  "/src/articles/hello-world.md": metadata$2,
  "/src/articles/python-automation-checklist.md": metadata$1,
  "/src/articles/rust-cli-observability.md": metadata
});
function slugFromPath(path) {
  return path.split("/").at(-1)?.replace(/\.md$/, "") ?? path;
}
function ensureFrontmatter(path, metadata2) {
  const missing = ["title", "description", "createdAt", "updatedAt", "excerpt"].filter(
    (key) => typeof metadata2[key] !== "string" || !metadata2[key].trim()
  );
  if (missing.length > 0) {
    throw new Error(`Article ${path} is missing required frontmatter: ${missing.join(", ")}`);
  }
  return {
    title: metadata2.title,
    description: metadata2.description,
    createdAt: metadata2.createdAt,
    updatedAt: metadata2.updatedAt,
    excerpt: metadata2.excerpt,
    tags: Array.isArray(metadata2.tags) ? metadata2.tags.filter((tag) => typeof tag === "string") : [],
    featured: Boolean(metadata2.featured)
  };
}
function toSummary(path, metadataModule) {
  const slug = slugFromPath(path);
  const metadata2 = ensureFrontmatter(path, metadataModule);
  return {
    ...metadata2,
    slug,
    href: `/articles/${slug}`
  };
}
function getAllArticles() {
  return Object.entries(articleMetadataModules).map(([path, metadata2]) => toSummary(path, metadata2)).sort((left, right) => right.createdAt.localeCompare(left.createdAt));
}
function getFeaturedArticles(limit = 3) {
  return getAllArticles().filter((article) => article.featured).slice(0, limit);
}
function getArticleBySlug(slug) {
  const targetPath = `/src/articles/${slug}.md`;
  const component = articleComponentModules[targetPath];
  const metadata2 = articleMetadataModules[targetPath];
  if (!component || !metadata2) {
    throw error(404, `Article not found: ${slug}`);
  }
  const summary = toSummary(targetPath, metadata2);
  return {
    ...summary,
    component
  };
}
function getArticleSearchEntries() {
  return getAllArticles().map((article) => ({
    title: article.title,
    description: article.description,
    href: article.href,
    kind: "article",
    keywords: article.tags
  }));
}
export {
  getArticleBySlug as a,
  getArticleSearchEntries as b,
  getFeaturedArticles as c,
  getAllArticles as g
};
