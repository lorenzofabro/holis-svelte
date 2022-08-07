import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const darkTheme = writable(browser && localStorage.getItem('darkTheme') === 'true');
darkTheme.subscribe((value) => {
	if (browser) return (localStorage.darkTheme = value.toString());
});
