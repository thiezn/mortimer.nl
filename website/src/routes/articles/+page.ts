import { getAllArticles } from '$lib/content/articles';
import { buildSeo } from '$lib/seo';

export function load() {
    return {
        articles: getAllArticles(),
        seo: buildSeo({
            title: 'Articles',
            path: '/articles',
            keywords: ['articles', 'mdsvex', 'rust', 'python', 'infrastructure']
        })
    };
}
