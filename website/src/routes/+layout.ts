import { getArticleSearchEntries } from '$lib/content/articles';
import { buildSeo } from '$lib/seo';
import { primaryNavigation, staticSearchEntries } from '$lib/site';

export const prerender = true;

export function load() {
    return {
        defaultSeo: buildSeo(),
        navigation: primaryNavigation,
        searchEntries: [...staticSearchEntries, ...getArticleSearchEntries()]
    };
}
