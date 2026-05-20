import { error } from '@sveltejs/kit';
import type { Component } from 'svelte';

import type { SearchEntry } from '$lib/site';

export type ArticleFrontmatter = {
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    excerpt: string;
    tags?: string[];
    featured?: boolean;
};

export type ArticleSummary = ArticleFrontmatter & {
    slug: string;
    href: string;
};

export type ArticleRecord = ArticleSummary & {
    component: Component;
};

type ArticleModule = {
    default: Component;
    metadata: Record<string, unknown>;
};

const articleComponentModules = import.meta.glob<Component>('/src/articles/*.md', {
    eager: true,
    import: 'default'
});

const articleMetadataModules = import.meta.glob<Record<string, unknown>>('/src/articles/*.md', {
    eager: true,
    import: 'metadata'
});

function slugFromPath(path: string): string {
    return path.split('/').at(-1)?.replace(/\.md$/, '') ?? path;
}

function ensureFrontmatter(path: string, metadata: Record<string, unknown>): ArticleFrontmatter {
    const missing = ['title', 'description', 'createdAt', 'updatedAt', 'excerpt'].filter(
        (key) => typeof metadata[key] !== 'string' || !(metadata[key] as string).trim()
    );

    if (missing.length > 0) {
        throw new Error(`Article ${path} is missing required frontmatter: ${missing.join(', ')}`);
    }

    return {
        title: metadata.title as string,
        description: metadata.description as string,
        createdAt: metadata.createdAt as string,
        updatedAt: metadata.updatedAt as string,
        excerpt: metadata.excerpt as string,
        tags: Array.isArray(metadata.tags) ? metadata.tags.filter((tag) => typeof tag === 'string') : [],
        featured: Boolean(metadata.featured)
    };
}

function toSummary(path: string, metadataModule: Record<string, unknown>): ArticleSummary {
    const slug = slugFromPath(path);
    const metadata = ensureFrontmatter(path, metadataModule);

    return {
        ...metadata,
        slug,
        href: `/articles/${slug}`
    };
}

export function getAllArticles(): ArticleSummary[] {
    return Object.entries(articleMetadataModules)
        .map(([path, metadata]) => toSummary(path, metadata))
        .sort((left, right) => right.createdAt.localeCompare(left.createdAt));
}

export function getFeaturedArticles(limit = 3): ArticleSummary[] {
    return getAllArticles()
        .filter((article) => article.featured)
        .slice(0, limit);
}

export function getArticleBySlug(slug: string): ArticleRecord {
    const targetPath = `/src/articles/${slug}.md`;
    const component = articleComponentModules[targetPath];
    const metadata = articleMetadataModules[targetPath];

    if (!component || !metadata) {
        throw error(404, `Article not found: ${slug}`);
    }

    const summary = toSummary(targetPath, metadata);

    return {
        ...summary,
        component
    };
}

export function getArticleSearchEntries(): SearchEntry[] {
    return getAllArticles().map((article) => ({
        title: article.title,
        description: article.description,
        href: article.href,
        kind: 'article',
        keywords: article.tags
    }));
}
