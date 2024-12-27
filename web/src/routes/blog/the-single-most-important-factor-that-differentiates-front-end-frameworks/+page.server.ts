import { redirect } from '@sveltejs/kit';

export function load() {
	redirect(
		308,
		'https://mjswensen.com/blog/the-single-most-important-factor-that-differentiates-front-end-frameworks/'
	);
}
