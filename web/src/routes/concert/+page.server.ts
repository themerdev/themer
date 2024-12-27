import slugRedirect from '$lib/color-set/slugRedirect';
import type { PageServerLoad } from './$types';

export const load = ((event) => slugRedirect('concert', event.url.origin)) satisfies PageServerLoad;
