<script lang="ts">
	import { allBuiltInColorSets, type BuiltInColorSet } from 'themer';
	import { webColorSets, type WebColorSet, isWebColorSetIdentifier } from './transform';
	import ProColorSet from './ProColorSet.svelte';
	import { selectedColorSetIdentifier } from './stores';

	function isFeatured(slug: WebColorSet | BuiltInColorSet): boolean {
		switch (slug) {
			case 'concert':
			case 'future-pro':
			case 'victor-mono':
				return true;
			default:
				return false;
		}
	}
</script>

<div class="container">
	{#each [...webColorSets, ...allBuiltInColorSets] as [slug, colorSet] (slug)}
		<div class:featured={isFeatured(slug)} class:standard={!isFeatured(slug)}>
			<ProColorSet
				{colorSet}
				webOnly={isWebColorSetIdentifier(slug)}
				featured={isFeatured(slug)}
				selected={$selectedColorSetIdentifier === slug}
			/>
		</div>
	{/each}
</div>

<style>
	.container {
		display: grid;
		gap: var(--size-large-1);
		grid-template-columns: repeat(12, 1fr);
		padding-bottom: var(--size-large-1);
		container: pro / inline-size;
	}

	.featured {
		grid-column-end: span 4;
	}

	.standard {
		grid-column-end: span 3;
	}

	@container (max-width: 650px) {
		.featured,
		.standard {
			grid-column-end: span 6;
		}
	}

	@container (max-width: 450px) {
		.featured,
		.standard {
			grid-column-end: span 12;
		}
	}
</style>
