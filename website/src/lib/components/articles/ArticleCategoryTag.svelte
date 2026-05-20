<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	import { articlesStore } from '$lib/stores/articles.svelte';

	let { tag } = $props<{ tag: string }>();

	const href = $derived(`/articles?category=${encodeURIComponent(tag)}`);
	const isArticlesOverview = $derived(page.url.pathname === '/articles');
	const isActive = $derived(articlesStore.isCategorySelected(tag));

	function isPlainLeftClick(event: MouseEvent) {
		return event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
	}

	function handleToggle() {
		articlesStore.toggleCategory(tag);
	}

	function handleNavigate(event: MouseEvent) {
		if (!isPlainLeftClick(event)) {
			return;
		}

		event.preventDefault();
		articlesStore.selectOnly(tag);
		void goto(href);
	}
</script>

{#if isArticlesOverview}
	<button
		type="button"
		class="article-tag article-tag--interactive"
		class:is-active={isActive}
		class:is-inactive={!isActive}
		aria-pressed={isActive}
		onclick={handleToggle}
	>
		{tag}
	</button>
{:else}
	<a class="article-tag article-tag--interactive" href={href} onclick={handleNavigate}>{tag}</a>
{/if}
