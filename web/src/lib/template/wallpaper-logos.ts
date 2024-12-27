import type { Rasterized } from '$lib/render/rasterize';
import { MeshPhysicalMaterial, Scene, WebGLRenderer } from 'three';
import { GLTFLoader, type GLTF } from 'three/examples/jsm/Addons.js';
import { PhysicalCamera, ShapedAreaLight, WebGLPathTracer } from 'three-gpu-pathtracer/src/index';
import { assign, deserialize, getTemplate, renderFrames } from './3d';

export const FILENAME = 'wallpaper-logos.json';

export default getTemplate('Logos wallpaper', FILENAME);

export async function* render(config: string): AsyncGenerator<Rasterized> {
	const { variants, options } = deserialize(config);
	for (const variant of variants) {
		for (const size of options.wallpaperSizes) {
			const { w: width, h: height } = size;
			const scene = new Scene();
			const gltfLoader = new GLTFLoader();

			const gltf: GLTF = await new Promise((resolve) =>
				gltfLoader.load('/logos.glb', (gltf) => resolve(gltf))
			);
			scene.add(gltf.scene);

			// Lights

			const main = new ShapedAreaLight(0xffffff, variant.isDark ? 7.5 : 7.5 / 2, 4, 4);
			main.isCircular = true;
			main.position.set(-2, 4, 2);
			main.lookAt(0, 0, 0);
			scene.add(main);

			const fill = new ShapedAreaLight(0xffffff, variant.isDark ? 2.5 : 2.5 / 2, 10, 10);
			fill.isCircular = true;
			fill.position.set(4.5, 2.25, 3);
			fill.lookAt(0, 0, 0);
			scene.add(fill);

			const back = new ShapedAreaLight(0xffffff, variant.isDark ? 7.5 : 7.5 / 2, 3, 3);
			back.isCircular = true;
			back.position.set(0, 4, -6);
			back.lookAt(0, 0, back.position.z - Math.tan(Math.PI / 6) / back.position.y);
			scene.add(back);

			// Materials

			const accent0 = new MeshPhysicalMaterial({
				color: variant.colors.accent0,
				metalness: 0.1,
				roughness: 0.95
			});
			const accent1 = new MeshPhysicalMaterial({
				color: variant.colors.accent1,
				metalness: 0.1,
				roughness: 0.95
			});
			const accent2 = new MeshPhysicalMaterial({
				color: variant.colors.accent2,
				metalness: 0.1,
				roughness: 0.95
			});
			const accent3 = new MeshPhysicalMaterial({
				color: variant.colors.accent3,
				metalness: 0.1,
				roughness: 0.95
			});
			const accent4 = new MeshPhysicalMaterial({
				color: variant.colors.accent4,
				metalness: 0.1,
				roughness: 0.95
			});
			const accent5 = new MeshPhysicalMaterial({
				color: variant.colors.accent5,
				metalness: 0.1,
				roughness: 0.95
			});
			const accent6 = new MeshPhysicalMaterial({
				color: variant.colors.accent6,
				metalness: 0.1,
				roughness: 0.95
			});
			const accent7 = new MeshPhysicalMaterial({
				color: variant.colors.accent7,
				metalness: 0.1,
				roughness: 0.95
			});
			const shade0 = new MeshPhysicalMaterial({
				color: variant.colors.shade0,
				metalness: 0.1,
				roughness: 0.95
			});

			const floor = new MeshPhysicalMaterial({
				color: variant.colors.shade0,
				metalness: 0.2,
				roughness: 0.2
			});
			const shade2 = new MeshPhysicalMaterial({
				color: variant.colors.shade2,
				metalness: 0.9,
				roughness: 0.3
			});
			const shade5 = new MeshPhysicalMaterial({
				color: variant.colors.shade5,
				metalness: 0.95,
				roughness: 0.95
			});

			assign(scene, 'Floor', floor);
			assign(scene, 'LargeLogo001', shade0);
			assign(scene, 'LargeLogo002', shade0);
			assign(scene, 'LargeLogo003', shade0);
			assign(scene, 'LargeLogo004', shade0);
			assign(scene, 'MainLogo', shade5);
			assign(scene, 'MediumLogo001', accent0);
			assign(scene, 'MediumLogo002', accent1);
			assign(scene, 'MediumLogo003', accent2);
			assign(scene, 'MediumLogo004', accent3);
			assign(scene, 'MediumLogo005', accent4);
			assign(scene, 'MediumLogo006', accent5);
			assign(scene, 'MediumLogo007', accent6);
			assign(scene, 'MediumLogo008', accent7);
			assign(scene, 'SmallLogo001', shade0);
			assign(scene, 'SmallLogo002', shade0);
			assign(scene, 'SmallLogo003', shade0);
			assign(scene, 'SmallLogo004', shade0);
			assign(scene, 'SmallLogo005', shade0);
			assign(scene, 'SmallLogo006', shade0);
			assign(scene, 'Support', shade2);
			assign(scene, 'Base', shade2);

			// Render

			const cameraDistance = 10;
			const camera = new PhysicalCamera(50, width / height, 0.01, 120);
			camera.focusDistance = cameraDistance;
			camera.fStop = 1.0;
			camera.setFocalLength(48);
			camera.position.set(0, 2, cameraDistance);
			camera.lookAt(0, 0.33, 0);

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
