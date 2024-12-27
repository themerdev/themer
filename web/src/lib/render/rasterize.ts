import { FILENAME as LOGOS_FILENAME, render as renderLogos } from '$lib/template/wallpaper-logos';
import {
	FILENAME as EXHIBIT_FILENAME,
	render as renderExhibit
} from '$lib/template/wallpaper-exhibit';
import type { OutputFile, OutputFileTransform } from 'themer';

export type Rasterized = { path: string; png: Blob | null; progress: number };

async function* svgToPng(file: OutputFile): AsyncGenerator<Rasterized> {
	const path = file.path.replace('.svg', '.png');

	yield { path, png: null, progress: 0.1 };

	const dpr = window.devicePixelRatio;

	const img: HTMLImageElement = await new Promise((res, rej) => {
		const img = new Image();
		img.addEventListener('load', () => res(img));
		img.addEventListener('error', (err) => rej(err));
		img.src = `data:image/svg+xml;base64,${btoa(file.content)}`;
	});

	const canvas = new OffscreenCanvas(img.naturalWidth * dpr, img.naturalHeight * dpr);
	const ctx = canvas.getContext('2d');
	if (!ctx) throw new Error('Unable to get 2d context');

	ctx.scale(dpr, dpr);
	ctx.drawImage(img, 0, 0);

	yield { path, png: null, progress: 0.9 };

	const png = await canvas.convertToBlob();
	yield { path, png, progress: 1 };
}

export default function getRasterizer(): OutputFileTransform<Rasterized> {
	return async function* rasterizer(file) {
		if (file.path === LOGOS_FILENAME) {
			yield* renderLogos(file.content);
		} else if (file.path === EXHIBIT_FILENAME) {
			yield* renderExhibit(file.content);
		} else if (file.path.endsWith('.svg')) {
			yield file;
			yield* svgToPng(file);
		} else {
			yield file;
		}
	};
}
