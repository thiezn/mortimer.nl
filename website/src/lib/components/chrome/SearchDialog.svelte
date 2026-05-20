<script lang="ts">
	import Search from '@lucide/svelte/icons/search';
	import { tick } from 'svelte';

	import type { SearchEntry } from '$lib/site';

	type SearchFilter = 'all' | 'article' | 'home';

	const filters: Array<{ label: string; value: SearchFilter }> = [
		{ label: 'All', value: 'all' },
		{ label: 'Articles', value: 'article' },
		{ label: 'Home', value: 'home' }
	];

	let { entries, open, close } = $props<{
		entries: SearchEntry[];
		open: boolean;
		close: () => void;
	}>();

	let query = $state('');
	let activeFilter = $state<SearchFilter>('all');
	let inputElement = $state<HTMLInputElement | undefined>(undefined);

	const filteredEntries = $derived.by(() => {
		const normalizedQuery = query.trim().toLowerCase();

		if (!normalizedQuery) {
			return [];
		}

		return entries
			.filter((entry: SearchEntry) => {
				const matchesFilter =
					activeFilter === 'all' ||
					(activeFilter === 'article' && entry.kind === 'article') ||
					(activeFilter === 'home' && entry.kind !== 'article');

				if (!matchesFilter) {
					return false;
				}

				const haystack = [entry.title, entry.description, ...(entry.keywords ?? [])].join(' ').toLowerCase();
				return haystack.includes(normalizedQuery);
			})
			.slice(0, 10);
	});

	$effect(() => {
		if (open) {
			tick().then(() => inputElement?.focus());
			return;
		}

		query = '';
		activeFilter = 'all';
	});

	function handleBackdropClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			close();
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			close();
		}
	}
</script>

{#if open}
	<div
		class="search-dialog-backdrop"
		role="presentation"
		onclick={handleBackdropClick}
		onkeydown={handleKeydown}
	>
		<div class="search-dialog" role="dialog" aria-modal="true" aria-labelledby="search-title">
			<h2 id="search-title" class="sr-only">Search</h2>
			<div class="search-dialog__header">
				<label class="search-dialog__field" for="site-search">
					<Search size={16} strokeWidth={2.2} />
					<input
						id="site-search"
						bind:this={inputElement}
						class="search-field"
						type="search"
						placeholder="Search"
						bind:value={query}
					/>
				</label>
				<button class="search-dialog__close" type="button" aria-label="Close search" onclick={close}>ESC</button>
			</div>

			{#if query.trim()}
				<div class="search-dialog__body">
					<div class="search-results">
						{#if filteredEntries.length > 0}
							{#each filteredEntries as entry}
								<a class="search-result" href={entry.href} onclick={close}>
									{entry.title}
								</a>
							{/each}
						{:else}
							<div class="search-results__empty">no results found</div>
						{/if}
					</div>
				</div>
			{/if}

			<div class="search-dialog__footer">
				<span>Filter</span>
				<label class="search-filter-select">
					<span class="sr-only">Filter search results</span>
					<select bind:value={activeFilter} aria-label="Search filters">
						{#each filters as filter}
							<option value={filter.value}>{filter.label}</option>
						{/each}
					</select>
				</label>
			</div>
		</div>
	</div>
{/if}
