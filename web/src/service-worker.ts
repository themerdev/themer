/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />
const sw = self as unknown as ServiceWorkerGlobalScope;

import { build, files, version } from '$service-worker';

const CACHE = `cache-${version}`;

const ASSETS = [...build, ...files];

/**
 * When this service worker gets installed, create a new cache for it and add
 * static/built assets to it.
 */
sw.addEventListener('install', (event) => {
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);
	}
	event.waitUntil(addFilesToCache());
});

/**
 * When this service worker becomes active, delete old caches associated with
 * old service workers.
 */
sw.addEventListener('activate', (event) => {
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== CACHE) await caches.delete(key);
		}
	}
	event.waitUntil(deleteOldCaches());
});

/**
 * Intercept fetch for static/built assets and respond with the cache instead.
 */
sw.addEventListener('fetch', (event) => {
	async function respond() {
		const url = new URL(event.request.url);
		if (event.request.method === 'GET' && ASSETS.includes(url.pathname)) {
			const cache = await caches.open(CACHE);
			const hit = await cache.match(url.pathname);
			if (hit) return hit;
		}
		return await fetch(event.request);
	}
	event.respondWith(respond());
});
