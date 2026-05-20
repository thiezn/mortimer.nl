<script lang="ts">
	import { onMount } from 'svelte';
	import Moon from '@lucide/svelte/icons/moon';
	import Sun from '@lucide/svelte/icons/sun';
	import SunMoon from '@lucide/svelte/icons/sun-moon';

	type ThemePreference = 'system' | 'light' | 'dark';

	const storageKey = 'mortimer-theme';

	type ThemeOption = {
		label: string;
		value: ThemePreference;
		icon: typeof Sun;
	};

	const options: ThemeOption[] = [
		{ label: 'Auto', value: 'system', icon: SunMoon },
		{ label: 'Light', value: 'light', icon: Sun },
		{ label: 'Dark', value: 'dark', icon: Moon }
	];

	let preference = $state<ThemePreference>('system');
	let menuOpen = $state(false);
	let mediaQuery: MediaQueryList | undefined;
	let rootElement = $state<HTMLElement | undefined>(undefined);

	const currentOption = $derived(options.find((option) => option.value === preference) ?? options[0]);

	function resolveTheme(value: ThemePreference): 'light' | 'dark' {
		if (value === 'system') {
			return mediaQuery?.matches ? 'dark' : 'light';
		}

		return value;
	}

	function applyTheme(value: ThemePreference) {
		const root = document.documentElement;
		const resolved = resolveTheme(value);

		root.dataset.theme = value;
		root.dataset.resolvedTheme = resolved;
		root.style.colorScheme = resolved;
	}

	function updatePreference(value: ThemePreference) {
		preference = value;
		localStorage.setItem(storageKey, value);
		applyTheme(value);
		menuOpen = false;
	}

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}

	onMount(() => {
		mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

		const stored = localStorage.getItem(storageKey);
		if (stored === 'system' || stored === 'light' || stored === 'dark') {
			preference = stored;
		}

		applyTheme(preference);

		const handleThemeChange = () => {
			if (preference === 'system') {
				applyTheme('system');
			}
		};

		const handlePointer = (event: MouseEvent) => {
			if (!rootElement?.contains(event.target as Node)) {
				closeMenu();
			}
		};

		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				closeMenu();
			}
		};

		mediaQuery.addEventListener('change', handleThemeChange);
		window.addEventListener('click', handlePointer);
		window.addEventListener('keydown', handleEscape);

		return () => {
			mediaQuery?.removeEventListener('change', handleThemeChange);
			window.removeEventListener('click', handlePointer);
			window.removeEventListener('keydown', handleEscape);
		};
	});
</script>

<div bind:this={rootElement} class="theme-switcher" class:open={menuOpen}>
	<button
		type="button"
		class="theme-switcher__trigger"
		aria-expanded={menuOpen}
		aria-label={`Theme: ${currentOption.label}`}
		onclick={toggleMenu}
	>
		<currentOption.icon size={16} strokeWidth={2} />
	</button>

	<div class="theme-switcher__panel" role="group" aria-label="Theme options">
		{#each options as option}
			<button
				type="button"
				class="theme-switcher__option"
				class:active={preference === option.value}
				onclick={() => updatePreference(option.value)}
				aria-label={option.label}
				title={option.label}
			>
				<option.icon size={16} strokeWidth={2} />
			</button>
		{/each}
	</div>
</div>
