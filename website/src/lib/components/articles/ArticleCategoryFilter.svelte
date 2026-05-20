<script lang="ts">
	import ChevronDown from '@lucide/svelte/icons/chevron-down';

	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { articlesStore } from '$lib/stores/articles.svelte';

	let { categories } = $props<{ categories: string[] }>();

	const selectedCategories = $derived(articlesStore.selectedCategories);

	const summary = $derived.by(() => {
		if (categories.length === 0) {
			return 'No categories';
		}

		if (!articlesStore.hasInitializedSelection || selectedCategories.length === categories.length) {
			return 'All categories';
		}

		if (selectedCategories.length === 0) {
			return 'No categories';
		}

		if (selectedCategories.length === 1) {
			return selectedCategories[0];
		}

		return `${selectedCategories.length} selected`;
	});

	function handleSelectAll(event: Event) {
		event.preventDefault();
		articlesStore.selectAll(categories);
	}

	function handleDeselectAll(event: Event) {
		event.preventDefault();
		articlesStore.deselectAll();
	}

	function handleCategoryChange(nextCategories: string[]) {
		articlesStore.setCategories(nextCategories);
	}
</script>

<DropdownMenu.DropdownMenu>
	<DropdownMenu.Trigger class="article-filter__trigger" aria-label="Filter articles by category">
		<span class="article-filter__trigger-label">Categories</span>
		<span class="article-filter__trigger-value">{summary}</span>
		<ChevronDown size={14} strokeWidth={2.1} />
	</DropdownMenu.Trigger>

	<DropdownMenu.Content class="article-filter__menu" align="end" sideOffset={10}>
		<DropdownMenu.Label class="article-filter__menu-label">Filter articles</DropdownMenu.Label>
		<DropdownMenu.Item
			class="article-filter__menu-item article-filter__menu-item--action"
			closeOnSelect={false}
			onSelect={handleSelectAll}
		>
			Select all
		</DropdownMenu.Item>
		<DropdownMenu.Item
			class="article-filter__menu-item article-filter__menu-item--action"
			closeOnSelect={false}
			onSelect={handleDeselectAll}
		>
			Deselect all
		</DropdownMenu.Item>
		<DropdownMenu.Separator class="article-filter__menu-separator" />
		<DropdownMenu.CheckboxGroup value={selectedCategories} onValueChange={handleCategoryChange}>
			{#each categories as category}
				<DropdownMenu.CheckboxItem
					value={category}
					closeOnSelect={false}
					class="article-filter__menu-item article-filter__menu-item--checkbox"
				>
					{category}
				</DropdownMenu.CheckboxItem>
			{/each}
		</DropdownMenu.CheckboxGroup>
	</DropdownMenu.Content>
</DropdownMenu.DropdownMenu>
