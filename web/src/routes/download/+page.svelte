<script lang="ts">
	import type { ActionData } from './$types';
	import { onMount } from 'svelte';
	import JSZip from 'jszip';
	import saveAs from 'file-saver';
	import themer from 'themer';
	import type { BuiltInTemplate, Template } from 'themer';
	import { isWebTemplate, resolveWebTemplate } from '$lib/template/all';
	import getRasterizer from '$lib/render/rasterize';

	let { form }: { form: ActionData } = $props();
	let status = $state('Rendering...');
	let currentFile = $state('');
	let failed = $state(false);
	let succeeded = $state(false);
	let progress: number | null = $state(null);

	onMount(async () => {
		try {
			if (!form) throw new Error('missing form data');

			status = 'Packing up your files...';

			const templates: (BuiltInTemplate | Template)[] = form.selectedTemplates.map((t) =>
				isWebTemplate(t) ? resolveWebTemplate(t) : t
			);

			const zip = new JSZip();
			for await (const file of themer(
				[form.colorSet],
				templates,
				form.renderOptions,
				getRasterizer()
			)) {
				currentFile = file.path;
				if ('png' in file) {
					progress = file.progress;
					if (file.png) {
						zip.file(file.path, file.png);
					}
				} else {
					progress = null;
					zip.file(file.path, file.content);
				}
			}

			currentFile = '';
			status = 'Prompting for save...';
			const content = await zip.generateAsync({ type: 'blob' });
			saveAs(content, `${form.colorSet.name}.zip`);
			status = 'Done!';
			succeeded = true;
		} catch (err) {
			console.error(err);
			status = 'Something went wrong.';
			failed = true;
		}
	});
</script>

<main>
	<section>
		<p class="themed" class:accent3={succeeded} class:accent0={failed}>{status}</p>
		{#if currentFile}
			<p class="themed shade3">Rendering {currentFile}...</p>
		{/if}
		{#if progress !== null}
			<progress max="1" value={progress}>{(progress * 100).toFixed(0)}%</progress>
		{/if}
		{#if succeeded}
			<p>
				<span>Enjoying themer?</span>
				<a href="https://github.com/mjswensen/themer">Star the GitHub repo</a>
			</p>
			<p><a href="/">← Back to themer</a></p>
		{/if}
		{#if failed}
			<p>
				<a href="/">Go back and try again</a>; if it doesn't work, file an issue on
				<a href="https://github.com/mjswensen/themer/issues">the GitHub repo</a>
				for help.
			</p>
		{/if}
	</section>
</main>

<style>
	main {
		color: var(--shade7);
		background-color: var(--shade0);
		box-sizing: border-box;
		min-height: 100%;
		padding: var(--size-large-1);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	section {
		width: var(--size-large-12);
		max-width: 100%;
		text-align: center;
	}
</style>
