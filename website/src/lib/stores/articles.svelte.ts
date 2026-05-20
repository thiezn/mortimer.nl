import { loadFromLocal, saveToLocal } from '$lib/stores/local-persist';

const KEY = 'articles-store';

interface ArticlesState {
	knownCategories: string[];
	selectedCategories: string[] | null;
}

const defaults: ArticlesState = {
	knownCategories: [],
	selectedCategories: null
};

function normalizeCategories(categories: string[] | undefined): string[] {
	return Array.from(
		new Set(
			(categories ?? [])
				.map((category) => category.trim())
				.filter(Boolean)
		)
	).sort((left, right) => left.localeCompare(right));
}

function persist(state: ArticlesState) {
	saveToLocal(KEY, {
		knownCategories: state.knownCategories,
		selectedCategories: state.selectedCategories
	});
}

class ArticlesStore {
	#state: ArticlesState = $state(loadFromLocal(KEY, defaults));

	get hasInitializedSelection() {
		return this.#state.selectedCategories !== null;
	}

	get knownCategories() {
		return this.#state.knownCategories;
	}

	get selectedCategories() {
		return this.#state.selectedCategories ?? [];
	}

	#commit(nextState: Partial<ArticlesState>) {
		Object.assign(this.#state, nextState);
		persist(this.#state);
	}

	syncCategories(availableCategories: string[], requestedCategories?: string[]) {
		const knownCategories = normalizeCategories(availableCategories);
		const requested = normalizeCategories(requestedCategories);
		const previousKnown = this.#state.knownCategories;
		const currentSelected = this.#state.selectedCategories;
		const hadAllSelected =
			currentSelected !== null &&
			previousKnown.length > 0 &&
			previousKnown.every((category) => currentSelected.includes(category));

		let nextSelected: string[];

		if (requested.length > 0) {
			nextSelected = requested.filter((category) => knownCategories.includes(category));

			if (nextSelected.length === 0) {
				nextSelected = [...knownCategories];
			}
		} else if (currentSelected === null) {
			nextSelected = [...knownCategories];
		} else {
			nextSelected = currentSelected.filter((category) => knownCategories.includes(category));

			if (hadAllSelected) {
				nextSelected = [...knownCategories];
			}
		}

		this.#commit({
			knownCategories,
			selectedCategories: nextSelected
		});
	}

	setCategories(categories: string[]) {
		this.#commit({
			selectedCategories: normalizeCategories(categories)
		});
	}

	selectAll(categories = this.#state.knownCategories) {
		const knownCategories = normalizeCategories(categories.length > 0 ? categories : this.#state.knownCategories);

		this.#commit({
			knownCategories,
			selectedCategories: [...knownCategories]
		});
	}

	deselectAll() {
		this.#commit({ selectedCategories: [] });
	}

	selectOnly(category: string) {
		this.#commit({
			selectedCategories: normalizeCategories([category])
		});
	}

	toggleCategory(category: string) {
		const normalized = normalizeCategories([category])[0];

		if (!normalized) {
			return;
		}

		const currentSelected = this.#state.selectedCategories ?? this.#state.knownCategories;
		const nextSelected = currentSelected.includes(normalized)
			? currentSelected.filter((value) => value !== normalized)
			: [...currentSelected, normalized];

		this.#commit({
			selectedCategories: normalizeCategories(nextSelected)
		});
	}

	isCategorySelected(category: string) {
		if (this.#state.selectedCategories === null) {
			return true;
		}

		return this.#state.selectedCategories.includes(category);
	}

}

export const articlesStore = new ArticlesStore();
