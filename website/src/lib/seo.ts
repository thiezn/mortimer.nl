import { siteConfig } from '$lib/site';

export type SeoMetadata = {
    title: string;
    description: string;
    canonical: string;
    image: string;
    type: 'website' | 'article';
    keywords: string[];
    publishedTime?: string;
    modifiedTime?: string;
};

export type SeoInput = {
    title?: string;
    description?: string;
    path?: string;
    image?: string;
    type?: 'website' | 'article';
    keywords?: string[];
    publishedTime?: string;
    modifiedTime?: string;
};

export function toAbsoluteUrl(path: string): string {
    return new URL(path, siteConfig.siteUrl).toString();
}

export function buildSeo({
    title,
    description = siteConfig.description,
    path = '/',
    image = siteConfig.defaultOgImage,
    type = 'website',
    keywords = [],
    publishedTime,
    modifiedTime
}: SeoInput = {}): SeoMetadata {
    return {
        title: title ? `${title} | ${siteConfig.name}` : siteConfig.defaultTitle,
        description,
        canonical: toAbsoluteUrl(path),
        image: toAbsoluteUrl(image),
        type,
        keywords,
        publishedTime,
        modifiedTime
    };
}
