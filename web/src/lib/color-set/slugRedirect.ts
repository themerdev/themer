import { redirect } from '@sveltejs/kit';
import type { WebColorSet } from './transform';
import { colorSetToState, webColorSets, stringifyState } from '$lib/color-set/transform';

export default function slugRedirect(slug: WebColorSet, origin: string) {
	const colorSet = webColorSets.get(slug);
	if (colorSet) {
		const url = new URL('/', origin);
		url.search = stringifyState(colorSetToState(colorSet, 'dark'));
		redirect(302, url.toString());
	}
}
