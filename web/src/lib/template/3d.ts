import { colorSetToVariants, listOutputFiles, type RenderOptions, type Template } from 'themer';
import { MeshPhysicalMaterial, Scene } from 'three';
import type { Rasterized } from '$lib/render/rasterize';
import type { WebGLPathTracer } from 'three-gpu-pathtracer';
import requestAnimationFrames from '$lib/render/request-animation-frames';

export type ThreeDWallpaperConfig = {
	variants: ReturnType<typeof colorSetToVariants>;
	options: RenderOptions;
};

export function serialize(config: ThreeDWallpaperConfig): string {
	return JSON.stringify(config);
}

export function deserialize(config: string): ThreeDWallpaperConfig {
	return JSON.parse(config);
}

export function assign(scene: Scene, name: string, material: MeshPhysicalMaterial): void {
	const obj = scene.getObjectByName(name);
	if (!obj) throw new Error(`Unable to find object ${name}`);
	if (!('material' in obj)) throw new Error(`Object ${name} has no material property`);
	obj.material = material;
}

export function getTemplate(name: string, filename: string): Template {
	return {
		name,
		render: async function* (colorSet, options) {
			const variants = colorSetToVariants(colorSet);
			yield {
				path: filename,
				content: serialize({ variants, options })
			};
		},
		renderInstructions: listOutputFiles
	};
}

export async function* renderFrames(
	pathTracer: WebGLPathTracer,
	outputPath: string,
	canvas: OffscreenCanvas
): AsyncGenerator<Rasterized> {
	const totalSamples = 300;
	let lastYield = 0;

	const frameGenerator = requestAnimationFrames();
	while (await frameGenerator.next()) {
		pathTracer.renderSample();

		if (pathTracer.samples - lastYield >= totalSamples / 10) {
			yield {
				path: outputPath,
				png: await canvas.convertToBlob(),
				progress: pathTracer.samples / totalSamples
			};
			lastYield = pathTracer.samples;
			if (lastYield >= totalSamples) break;
		} else {
			yield {
				path: outputPath,
				png: null,
				progress: pathTracer.samples / totalSamples
			};
		}
	}
}
