import { getAllArticles, getArticleBySlug } from '$lib/content/articles';
import { buildSeo } from '$lib/seo';

export function entries() {
    return getAllArticles().map(({ slug }) => ({ slug }));
}

export function load({ params }) {
    const article = getArticleBySlug(params.slug);

    return {
        article,
        seo: buildSeo({
            title: article.title,
            description: article.description,
            path: article.href,
            type: 'article',
            keywords: article.tags ?? [],
            publishedTime: article.createdAt,
            modifiedTime: article.updatedAt
        })
    };
}
