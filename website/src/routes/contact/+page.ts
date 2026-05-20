import { buildSeo } from '$lib/seo';

export function load() {
    return {
        seo: buildSeo({
            title: 'Contact',
            path: '/contact',
            keywords: ['contact', 'github', 'linkedin', 'twitter']
        })
    };
}
