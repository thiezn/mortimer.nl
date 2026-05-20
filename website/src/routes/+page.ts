import { getAllArticles, getFeaturedArticles } from '$lib/content/articles';
import { buildSeo } from '$lib/seo';

export function load() {
    const allArticles = getAllArticles();
    const featuredArticles = getFeaturedArticles(3);
    const homepageArticles = [
        ...featuredArticles,
        ...allArticles.filter((article) => !featuredArticles.some((featured) => featured.slug === article.slug))
    ].slice(0, 3);

    return {
        seo: buildSeo({
            title: 'Mathijs Mortimer',
            path: '/',
            keywords: ['Rust', 'Python', 'infrastructure', 'cloud', 'SvelteKit']
        }),
        articleCount: allArticles.length,
        featuredArticles: homepageArticles
    };
}
