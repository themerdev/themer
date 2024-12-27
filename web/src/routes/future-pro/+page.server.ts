import slugRedirect from '$lib/color-set/slugRedirect';
import type { PageServerLoad } from './$types';

export const load = ((event) =>
	slugRedirect('future-pro', event.url.origin)) satisfies PageServerLoad;
