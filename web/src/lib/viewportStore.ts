import { browser } from '$app/environment';
import { readable, type Readable } from 'svelte/store';

export const dimensions: Readable<[number, number]> = readable(
	browser ? [window.innerWidth, window.innerHeight] : [4096, 2160],
	(set) => {
		if (browser) {
			const listener = () => set([window.innerWidth, window.innerHeight]);
			window.addEventListener('resize', listener);
			return () => {
				window.removeEventListener('resize', listener);
			};
		}
	}
);
