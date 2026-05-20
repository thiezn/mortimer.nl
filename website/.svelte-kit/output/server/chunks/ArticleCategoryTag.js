import { K as attr_class, J as attr, $ as escape_html, Y as derived } from "./renderer.js";
import "@sveltejs/kit/internal";
import "./exports.js";
import "./utils.js";
import "@sveltejs/kit/internal/server";
import "./root.js";
import { p as page } from "./index.js";
import "clsx";
function loadFromLocal(key, defaults2) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return defaults2;
    const parsed = JSON.parse(raw);
    return { ...defaults2, ...parsed };
  } catch {
    return defaults2;
  }
}
function saveToLocal(key, state) {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch {
    console.error(`Failed to save ${key} to localStorage`);
  }
}
const KEY = "articles-store";
const defaults = { knownCategories: [], selectedCategories: null };
function normalizeCategories(categories) {
  return Array.from(new Set((categories ?? []).map((category) => category.trim()).filter(Boolean))).sort((left, right) => left.localeCompare(right));
}
function persist(state) {
  saveToLocal(KEY, {
    knownCategories: state.knownCategories,
    selectedCategories: state.selectedCategories
  });
}
class ArticlesStore {
  #state = loadFromLocal(KEY, defaults);
  get hasInitializedSelection() {
    return this.#state.selectedCategories !== null;
  }
  get knownCategories() {
    return this.#state.knownCategories;
  }
  get selectedCategories() {
    return this.#state.selectedCategories ?? [];
  }
  #commit(nextState) {
    Object.assign(this.#state, nextState);
    persist(this.#state);
  }
  syncCategories(availableCategories, requestedCategories) {
    const knownCategories = normalizeCategories(availableCategories);
    const requested = normalizeCategories(requestedCategories);
    const previousKnown = this.#state.knownCategories;
    const currentSelected = this.#state.selectedCategories;
    const hadAllSelected = currentSelected !== null && previousKnown.length > 0 && previousKnown.every((category) => currentSelected.includes(category));
    let nextSelected;
    if (requested.length > 0) {
      nextSelected = requested.filter((category) => knownCategories.includes(category));
      if (nextSelected.length === 0) {
        nextSelected = [...knownCategories];
      }
    } else if (currentSelected === null) {
      nextSelected = [...knownCategories];
    } else {
      nextSelected = currentSelected.filter((category) => knownCategories.includes(category));
      if (hadAllSelected) {
        nextSelected = [...knownCategories];
      }
    }
    this.#commit({ knownCategories, selectedCategories: nextSelected });
  }
  setCategories(categories) {
    this.#commit({ selectedCategories: normalizeCategories(categories) });
  }
  selectAll(categories = this.#state.knownCategories) {
    const knownCategories = normalizeCategories(categories.length > 0 ? categories : this.#state.knownCategories);
    this.#commit({ knownCategories, selectedCategories: [...knownCategories] });
  }
  deselectAll() {
    this.#commit({ selectedCategories: [] });
  }
  selectOnly(category) {
    this.#commit({ selectedCategories: normalizeCategories([category]) });
  }
  toggleCategory(category) {
    const normalized = normalizeCategories([category])[0];
    if (!normalized) {
      return;
    }
    const currentSelected = this.#state.selectedCategories ?? this.#state.knownCategories;
    const nextSelected = currentSelected.includes(normalized) ? currentSelected.filter((value) => value !== normalized) : [...currentSelected, normalized];
    this.#commit({ selectedCategories: normalizeCategories(nextSelected) });
  }
  isCategorySelected(category) {
    if (this.#state.selectedCategories === null) {
      return true;
    }
    return this.#state.selectedCategories.includes(category);
  }
}
const articlesStore = new ArticlesStore();
function ArticleCategoryTag($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { tag } = $$props;
    const href = derived(() => `/articles?category=${encodeURIComponent(tag)}`);
    const isArticlesOverview = derived(() => page.url.pathname === "/articles");
    const isActive = derived(() => articlesStore.isCategorySelected(tag));
    if (isArticlesOverview()) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<button type="button"${attr_class("article-tag article-tag--interactive", void 0, { "is-active": isActive(), "is-inactive": !isActive() })}${attr("aria-pressed", isActive())}>${escape_html(tag)}</button>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<a class="article-tag article-tag--interactive"${attr("href", href())}>${escape_html(tag)}</a>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  ArticleCategoryTag as A,
  articlesStore as a
};
