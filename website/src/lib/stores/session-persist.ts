export function loadFromSession<T>(key: string, defaults: T): T {
	try {
		const raw = sessionStorage.getItem(key);
		if (!raw) return defaults;
		const parsed = JSON.parse(raw);
		return { ...defaults, ...parsed };
	} catch {
		return defaults;
	}
}

export function saveToSession<T>(key: string, state: T): void {
	try {
		sessionStorage.setItem(key, JSON.stringify(state));
	} catch {
		console.error(`Failed to save ${key} to sessionStorage`);
	}
}
