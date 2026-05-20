<script lang="ts">
	import ArticleCategoryTag from '$lib/components/articles/ArticleCategoryTag.svelte';
	import type { ArticleSummary } from '$lib/content/articles';

	let { article, featured = false } = $props<{
		article: ArticleSummary;
		featured?: boolean;
	}>();

	const formatter = new Intl.DateTimeFormat('en', {
		day: 'numeric',
		month: 'short',
		year: 'numeric'
	});
</script>

<article class:article-card--featured={featured} class="article-card surface-card">
	<h3><a class="article-card__title" href={article.href}>{article.title}</a></h3>
	<p>{article.excerpt}</p>
	{#if article.tags && article.tags.length > 0}
		<div class="article-tags">
			{#each article.tags as tag}
				<ArticleCategoryTag {tag} />
			{/each}
		</div>
	{/if}
	<div class="article-card__meta">
		<span>Published on <time datetime={article.createdAt}>{formatter.format(new Date(article.createdAt))}</time></span>
	</div>
</article>
