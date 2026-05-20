<script lang="ts">
	import { page } from '$app/state';

	import ArticleCard from '$lib/components/articles/ArticleCard.svelte';
	import ArticleCategoryFilter from '$lib/components/articles/ArticleCategoryFilter.svelte';
	import type { ArticleSummary } from '$lib/content/articles';
	import { articlesStore } from '$lib/stores/articles.svelte';

	let { data } = $props();

	const categories = $derived.by(() =>
		Array.from(new Set(data.articles.flatMap((article: ArticleSummary) => article.tags ?? []))).sort((left, right) =>
			left.localeCompare(right)
		)
	);

	let lastSyncSignature = $state('');

	function getRequestedCategories(url: URL) {
		const repeatedCategories = url.searchParams.getAll('category');
		const combinedCategories = url.searchParams.get('categories');

		if (repeatedCategories.length > 0) {
			return repeatedCategories;
		}

		if (!combinedCategories) {
			return [];
		}

		return combinedCategories.split(',').map((category) => category.trim()).filter(Boolean);
	}

	$effect(() => {
		const currentCategories = categories;
		const syncSignature = `${page.url.search}::${currentCategories.join('|')}`;

		if (syncSignature === lastSyncSignature) {
			return;
		}

		const requestedCategories = getRequestedCategories(page.url);
		articlesStore.syncCategories(currentCategories, requestedCategories);
		lastSyncSignature = syncSignature;

		if (requestedCategories.length > 0 && typeof window !== 'undefined') {
			window.history.replaceState(window.history.state, '', `${page.url.pathname}${page.url.hash}`);
		}
	});

	const filteredArticles = $derived.by(() => {
		if (!articlesStore.hasInitializedSelection) {
			return data.articles;
		}

		const currentCategories = categories;

		if (currentCategories.length === 0) {
			return data.articles;
		}

		const selectedCategories = articlesStore.selectedCategories;

		if (selectedCategories.length === 0) {
			return [];
		}

		if (selectedCategories.length === currentCategories.length) {
			return data.articles;
		}

		return data.articles.filter((article: ArticleSummary) =>
			(article.tags ?? []).some((tag) => selectedCategories.includes(tag))
		);
	});
</script>

<section class="section page-section">
	<div class="container page-stack">
		<div class="articles-overview__heading">
			<div class="articles-overview__top">
				<p class="eyebrow">Articles</p>
				{#if categories.length > 0}
					<div class="articles-overview__filter">
						<ArticleCategoryFilter {categories} />
					</div>
				{/if}
			</div>
			<h2>Notes from the toolshed.</h2>
			<p>
				Every article is pulled from the articles directory, parsed through mdsvex frontmatter,
				and exposed with explicit publish metadata plus optional updates.
			</p>
		</div>

		{#if filteredArticles.length > 0}
			<div class="article-grid article-grid--list">
				{#each filteredArticles as article}
					<ArticleCard article={article} />
				{/each}
			</div>
		{:else}
			<div class="articles-overview__empty surface-card">
				<p>No articles match the current category selection.</p>
				<button class="button button--secondary" type="button" onclick={() => articlesStore.selectAll(categories)}>
					Select all categories
				</button>
			</div>
		{/if}
	</div>
</section>
