export function loadFromLocal<T>(key: string, defaults: T): T {
    try {
        const raw = localStorage.getItem(key);
        if (!raw) return defaults;
        const parsed = JSON.parse(raw);
        return { ...defaults, ...parsed };
    } catch {
        return defaults;
    }
}

export function saveToLocal<T>(key: string, state: T): void {
    try {
        localStorage.setItem(key, JSON.stringify(state));
    } catch {
        console.error(`Failed to save ${key} to localStorage`);
    }
}
