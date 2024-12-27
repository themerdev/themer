import slugRedirect from '$lib/color-set/slugRedirect';
import type { PageServerLoad } from './$types';

export const load = ((event) =>
	slugRedirect('victor-mono', event.url.origin)) satisfies PageServerLoad;
