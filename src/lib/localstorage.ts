import { writable } from 'svelte/store';

export function localStorageStore(key: string, initial: any) {
	const value = localStorage.getItem(key);
	const store = writable(value == null ? initial : JSON.parse(value));
	store.subscribe((v) => localStorage.setItem(key, JSON.stringify(v)));

	return store;
}
