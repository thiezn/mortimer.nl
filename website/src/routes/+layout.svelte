<script lang="ts">
	import type { Snippet } from 'svelte';

	import type { SeoMetadata } from '$lib/seo';
	import type { NavigationItem, SearchEntry } from '$lib/site';

	import './layout.css';
	import Seo from '$lib/components/Seo.svelte';
	import SiteFooter from '$lib/components/chrome/SiteFooter.svelte';
	import SiteHeader from '$lib/components/chrome/SiteHeader.svelte';
	import favicon from '$lib/assets/favicon.svg';

	let { children, data } = $props<{
		children: Snippet;
		data: {
			defaultSeo: SeoMetadata;
			seo?: SeoMetadata;
			navigation: NavigationItem[];
			searchEntries: SearchEntry[];
		};
	}>();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Seo seo={data.seo ?? data.defaultSeo} />

<div class="site-shell">
	<SiteHeader navigation={data.navigation} searchEntries={data.searchEntries} />
	<main class="site-main">{@render children()}</main>
	<SiteFooter />
</div>
