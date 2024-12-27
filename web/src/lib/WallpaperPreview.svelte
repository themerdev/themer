<script lang="ts">
	import partition from 'lodash/partition';
	import sortBy from 'lodash/sortBy';
	import themer, { allBuiltInTemplates, prepareColorSet, type Template } from 'themer';
	import { activeVariant, uiColors } from './color-set/stores';
	import { allWebTemplates, isWebTemplate } from './template/all';
	import getRasterizer, { type Rasterized } from './render/rasterize';
	import { fade, type FadeParams } from 'svelte/transition';
	import { SvelteMap } from 'svelte/reactivity';

	const fadeParams: FadeParams = { duration: 100 };

	const [threeOptions, twoOptions] = partition(
		sortBy(
			[
				...[...allBuiltInTemplates.entries()].filter(([key]) => key.includes('wallpaper')),
				...[...allWebTemplates.entries()].filter(([key]) => key.includes('wallpaper'))
			],
			([_, t]) => t.name
		),
		([key]) => key === 'wallpaper-exhibit' || key === 'wallpaper-logos'
	);

	let selected: Template | null = $state(null);
	let clientWidth: number | undefined = $state();
	let clientHeight: number | undefined = $state();
	let images: Map<string, Rasterized> = $state(new SvelteMap());
	let selectedPreviewIndex = $state(0);

	$effect(() => {
		let cancelled = false;

		(async () => {
			if (!selected || !clientWidth || !clientHeight) {
				images.clear();
				return;
			}

			const colorSet = prepareColorSet({
				name: 'Wallpaper preview',
				variants: $activeVariant === 'dark' ? { dark: $uiColors } : { light: $uiColors }
			});

			for await (const file of themer(
				[colorSet],
				[selected],
				{ wallpaperSizes: [{ w: clientWidth, h: clientHeight }] },
				getRasterizer()
			)) {
				if (cancelled) break;
				if ('png' in file) {
					const previous = images.get(file.path);
					images.set(file.path, {
						...file,
						png: file.png ?? previous?.png ?? null
					});
				}
			}
		})();

		return () => {
			cancelled = true;
		};
	});

	let image: Rasterized | undefined = $derived([...images.values()][selectedPreviewIndex]);
	let imgSrc: string | null = $derived(image?.png ? URL.createObjectURL(image.png) : null);
	let progress: number = $derived(image?.progress ?? 0);
</script>

<select class="themed select" bind:value={selected} aria-label="Wallpaper preview">
	<option value={null}>Select...</option>
	<optgroup label="3D">
		{#each threeOptions as [key, template]}
			<option value={template}>
				{template.name}
				{#if isWebTemplate(key)}
					(web-only)
				{/if}
			</option>
		{/each}
	</optgroup>
	<optgroup label="2D">
		{#each twoOptions as [key, template]}
			<option value={template}>
				{template.name}
				{#if isWebTemplate(key)}
					(web-only)
				{/if}
			</option>
		{/each}
	</optgroup>
</select>

{#if selected !== null}
	<div class="modal" transition:fade={fadeParams} bind:clientWidth bind:clientHeight>
		{#if progress > 0 && progress < 1}
			<div class="progress" transition:fade={fadeParams}>
				<span>Rendering...</span>
				<progress max="1" value={progress}>{(progress * 100).toFixed(0)}%</progress>
			</div>
		{/if}
		{#if imgSrc}
			<img transition:fade={fadeParams} alt={`${selected.name} preview`} src={imgSrc} />
		{/if}
		<div class="options">
			{#if images && images.size > 1}
				{#each images as _, i}
					<label>
						<input type="radio" name="variation" value={i} bind:group={selectedPreviewIndex} />
						Option {i + 1}
					</label>
				{/each}
			{/if}
			<button
				class="themed button"
				onclick={() => {
					selected = null;
					selectedPreviewIndex = 0;
				}}
			>
				Close
			</button>
		</div>
	</div>
{/if}

<style>
	.modal {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		justify-items: center;
		align-items: center;
		z-index: var(--modal-z-index);
		background-color: var(--shade0);
	}

	img {
		grid-area: 1 / 1 / 2 / 2;
		max-height: 100%;
		max-width: 100%;
	}

	.progress {
		grid-area: 1 / 1 / 2 / 2;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--size-regular);
		z-index: 1;
	}

	.modal .options {
		position: absolute;
		top: var(--size-regular);
		right: var(--size-regular);
	}
</style>
