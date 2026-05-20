<script lang="ts">
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import ArticleCategoryTag from '$lib/components/articles/ArticleCategoryTag.svelte';

	let { data } = $props();

	const formatter = new Intl.DateTimeFormat('en', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	const ArticleContent = $derived(data.article.component);
	const showUpdated = $derived(data.article.updatedAt !== data.article.createdAt);
</script>

<section class="section page-section">
	<div class="container article-shell">
		<a class="back-link" href="/articles"><ArrowLeft size={16} strokeWidth={2.3} /> Back to articles</a>

		<header class="article-header">
			<h1>{data.article.title}</h1>
			<p class="lead">{data.article.description}</p>
			<div class="article-header__details">
				<div class="article-meta">
					<span>Published on <time datetime={data.article.createdAt}>{formatter.format(new Date(data.article.createdAt))}</time></span>
					{#if showUpdated}
						<span>Updated <time datetime={data.article.updatedAt}>{formatter.format(new Date(data.article.updatedAt))}</time></span>
					{/if}
				</div>
				{#if data.article.tags && data.article.tags.length > 0}
					<div class="article-tags">
						{#each data.article.tags as tag}
							<ArticleCategoryTag {tag} />
						{/each}
					</div>
				{/if}
			</div>
		</header>

		<article class="article-content">
			<ArticleContent />
		</article>
	</div>
</section>
