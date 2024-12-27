import type { Rasterized } from '$lib/render/rasterize';
import { MeshPhysicalMaterial, Scene, WebGLRenderer } from 'three';
import { GLTFLoader, type GLTF } from 'three/examples/jsm/Addons.js';
import { PhysicalCamera, WebGLPathTracer } from 'three-gpu-pathtracer/src/index';
import { assign, deserialize, getTemplate, renderFrames } from './3d';
import Color from 'color';

export const FILENAME = 'wallpaper-exhibit.json';

export default getTemplate('Exhibit wallpaper', FILENAME);

export async function* render(config: string): AsyncGenerator<Rasterized> {
	const { variants, options } = deserialize(config);
	for (const variant of variants) {
		for (const size of options.wallpaperSizes) {
			const { w: width, h: height } = size;
			const scene = new Scene();
			const gltfLoader = new GLTFLoader();

			const gltf: GLTF = await new Promise((resolve) =>
				gltfLoader.load('/exhibit.glb', (gltf) => resolve(gltf))
			);
			scene.add(gltf.scene);

			// Lights

			const shade0Luminosity = new Color(variant.colors.shade0).luminosity();
			assign(
				scene,
				'LightArray',
				new MeshPhysicalMaterial({
					color: '#FFFFFF',
					emissive: '#FFFFFF',
					emissiveIntensity: (1 - shade0Luminosity) * 1.4 + shade0Luminosity * 0.4
				})
			);

			// Materials

			assign(
				scene,
				'Floor',
				new MeshPhysicalMaterial({
					color: variant.colors.shade1,
					metalness: 0.13,
					roughness: 0.389
				})
			);

			const walls = new MeshPhysicalMaterial({
				color: variant.colors.shade0,
				metalness: 0.85,
				roughness: 0.239
			});
			assign(scene, 'WallPanelsX', walls);
			assign(scene, 'WallPanelsY', walls);
			assign(scene, 'Room', walls);

			assign(
				scene,
				'Backdrop',
				new MeshPhysicalMaterial({
					color: variant.colors.shade0,
					roughness: 0.87
				})
			);

			assign(
				scene,
				'Stand',
				new MeshPhysicalMaterial({
					color: variant.colors.shade7,
					roughness: 0.5
				})
			);

			const icosphere = { roughness: 0.282, metalness: 0.868 };

			assign(
				scene,
				'Icosphere1',
				new MeshPhysicalMaterial({
					color: variant.colors.accent0,
					...icosphere
				})
			);

			assign(
				scene,
				'Icosphere2',
				new MeshPhysicalMaterial({
					color: variant.colors.accent1,
					...icosphere
				})
			);

			assign(
				scene,
				'Icosphere3',
				new MeshPhysicalMaterial({
					color: variant.colors.accent2,
					...icosphere
				})
			);

			assign(
				scene,
				'Icosphere4',
				new MeshPhysicalMaterial({
					color: variant.colors.accent3,
					...icosphere
				})
			);

			assign(
				scene,
				'Icosphere5',
				new MeshPhysicalMaterial({
					color: variant.colors.accent4,
					...icosphere
				})
			);

			assign(
				scene,
				'Icosphere6',
				new MeshPhysicalMaterial({
					color: variant.colors.accent5,
					...icosphere
				})
			);

			assign(
				scene,
				'Icosphere7',
				new MeshPhysicalMaterial({
					color: variant.colors.accent6,
					...icosphere
				})
			);

			// Render

			const camera = new PhysicalCamera(50, width / height, 0.1, 120);
			camera.setFocalLength(45);
			camera.focusDistance = 7;
			camera.fStop = 8;
			camera.position.set(0, 0.797534, 6.9186);
			camera.lookAt(0, 2.1, -4.85418);

			const canvas = new OffscreenCanvas(
				width * window.devicePixelRatio,
				height * window.devicePixelRatio
			);
			const renderer = new WebGLRenderer({ antialias: true, canvas });

			const pathTracer = new WebGLPathTracer(renderer);
			pathTracer.minSamples = 0;
			pathTracer.setScene(scene, camera);

			yield* renderFrames(pathTracer, `${variant.title.kebab}-${width}x${height}.png`, canvas);
		}
	}
}
