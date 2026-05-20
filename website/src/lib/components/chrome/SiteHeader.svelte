<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import Search from '@lucide/svelte/icons/search';

	import type { NavigationItem, SearchEntry } from '$lib/site';
	import SearchDialog from '$lib/components/chrome/SearchDialog.svelte';
	import ThemeToggle from '$lib/components/chrome/ThemeToggle.svelte';

	let { navigation, searchEntries } = $props<{
		navigation: NavigationItem[];
		searchEntries: SearchEntry[];
	}>();

	let isSearchOpen = $state(false);

	const showPrimaryNavigation = $derived(page.url.pathname !== '/articles');

	function openSearch() {
		isSearchOpen = true;
	}

	function closeSearch() {
		isSearchOpen = false;
	}

	function shouldIgnoreShortcutTarget(target: EventTarget | null): boolean {
		if (!(target instanceof HTMLElement)) {
			return false;
		}

		return target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName);
	}

	onMount(() => {
		const handleShortcut = (event: KeyboardEvent) => {
			if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
				event.preventDefault();
				openSearch();
				return;
			}

			if (event.key === '/' && !shouldIgnoreShortcutTarget(event.target)) {
				event.preventDefault();
				openSearch();
			}
		};

		window.addEventListener('keydown', handleShortcut);

		return () => {
			window.removeEventListener('keydown', handleShortcut);
		};
	});
</script>

<header class="site-header">
	<div class="container site-header__inner">
		<div class="site-header__start">
			<a class="brand" href="/">mortimer.nl</a>

			{#if showPrimaryNavigation}
				<nav class="primary-nav" aria-label="Primary">
					{#each navigation as item}
						<a href={item.href}>{item.label}</a>
					{/each}
				</nav>
			{/if}
		</div>

		<div class="site-header__actions">
			<button class="search-button" type="button" aria-label="Open search" title="Search" onclick={openSearch}>
				<Search size={17} strokeWidth={2.3} />
				<span class="sr-only">Search</span>
			</button>
			<ThemeToggle />
		</div>
	</div>
</header>

<SearchDialog entries={searchEntries} open={isSearchOpen} close={closeSearch} />
