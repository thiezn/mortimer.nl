<script lang="ts">
	import type { SeoMetadata } from '$lib/seo';
	import { siteConfig } from '$lib/site';

	let { seo } = $props<{ seo: SeoMetadata }>();
</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
	<link rel="canonical" href={seo.canonical} />
	<meta property="og:type" content={seo.type} />
	<meta property="og:title" content={seo.title} />
	<meta property="og:description" content={seo.description} />
	<meta property="og:url" content={seo.canonical} />
	<meta property="og:image" content={seo.image} />
	<meta property="og:site_name" content={siteConfig.name} />
	<meta property="og:locale" content={siteConfig.locale} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content={siteConfig.twitterHandle} />
	<meta name="twitter:creator" content={siteConfig.twitterHandle} />
	<meta name="twitter:title" content={seo.title} />
	<meta name="twitter:description" content={seo.description} />
	<meta name="twitter:image" content={seo.image} />
	<meta name="theme-color" media="(prefers-color-scheme: light)" content="#F8F9FA" />
	<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#121212" />
	{#if seo.keywords.length > 0}
		<meta name="keywords" content={seo.keywords.join(', ')} />
	{/if}
	{#if seo.type === 'article' && seo.publishedTime}
		<meta property="article:published_time" content={seo.publishedTime} />
	{/if}
	{#if seo.type === 'article' && seo.modifiedTime}
		<meta property="article:modified_time" content={seo.modifiedTime} />
	{/if}
	{#if seo.type === 'article'}
		{#each seo.keywords as keyword}
			<meta property="article:tag" content={keyword} />
		{/each}
	{/if}
</svelte:head>
