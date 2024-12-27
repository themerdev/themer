import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = ((event) => {
	const url = new URL('/', event.url.origin);
	redirect(302, url.toString());
}) satisfies PageServerLoad;
