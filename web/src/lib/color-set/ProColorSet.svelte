<script lang="ts">
	import { stringify } from 'qs';
	import { colorSetToVariants, prepareColorSet, type ColorSet } from 'themer';
	import Color from 'color';
	import { activeVariant, inactiveVariant, mergeState } from './stores';
	import { colorSetToState } from './transform';
	import Badge from '$lib/Badge.svelte';

	interface Props {
		colorSet: ColorSet;
		webOnly: boolean;
		featured?: boolean;
		selected?: boolean;
	}

	let { colorSet, webOnly, featured = false, selected = false }: Props = $props();

	function hash(str: string, min: number, max: number): number {
		const range = max - min;
		const value = [...str].map((char) => char.charCodeAt(0)).reduce((a, b) => a + b) % range;
		return min + value;
	}

	let fullColorSet = $derived(prepareColorSet(colorSet));
	let variants = $derived(colorSetToVariants(fullColorSet));
	let variant = $derived(
		$activeVariant in fullColorSet.variants
			? variants.find((variant) => variant.name === $activeVariant)
			: variants.find((variant) => variant.name === $inactiveVariant)
	);
	let variantNames = $derived(
		variants
			.map(({ name }) => name)
			.sort()
			.reverse()
	);

	let link = $derived(
		stringify(colorSetToState(colorSet, $activeVariant), {
			allowDots: true,
			addQueryPrefix: true
		})
	);

	// Featured

	let swatches = $derived(
		variant && featured
			? [
					Color(variant.colors.accent0).mix(Color(variant.colors.shade0), 0.3).hex(),
					variant.colors.accent0,
					variant.colors.accent1,
					variant.colors.accent2,
					Color(variant.colors.accent2).mix(Color(variant.colors.shade7), 0.15).hex(),
					Color(variant.colors.accent2).mix(Color(variant.colors.shade0)).hex(),
					variant.colors.shade4,
					Color(variant.colors.shade4).mix(Color(variant.colors.shade5)).hex(),
					variant.colors.shade5,
					variant.colors.accent7,
					Color(variant.colors.accent7).mix(Color(variant.colors.shade0), 0.7).hex(),
					variant.colors.shade3,
					variant.colors.shade2,
					Color(variant.colors.accent6).mix(Color(variant.colors.shade2)).hex(),
					variant.colors.accent6,
					variant.colors.accent5,
					Color(variant.colors.accent5).mix(Color(variant.colors.shade5)).hex(),
					Color(variant.colors.accent5).mix(Color(variant.colors.shade0)).hex(),
					variant.colors.shade6,
					variant.colors.shade7,
					variant.colors.accent3,
					Color(variant.colors.accent3).mix(Color(variant.colors.accent4)).hex(),
					variant.colors.accent4,
					variant.colors.shade1
				]
			: []
	);

	// Standard

	let gradientStops = $derived(
		variant && !featured
			? [
					variant.colors.shade7,
					variant.colors.shade6,
					variant.colors.shade5,
					variant.colors.shade4,
					variant.colors.shade3,
					variant.colors.shade2,
					variant.colors.shade1
				]
			: []
	);
	let circles = $derived(
		variant && !featured
			? [
					variant.colors.accent0,
					variant.colors.accent1,
					variant.colors.accent2,
					variant.colors.accent3,
					variant.colors.accent4,
					variant.colors.accent5,
					variant.colors.accent6,
					variant.colors.accent7
				]
			: []
	);
</script>

{#if variant}
	<div id={variant.title.kebab + '-wrapper'} class="wrapper" class:selected>
		<a href={link}>
			{#if featured}
				<svg viewBox="0 0 1920 1080" version="1.1" xmlns="http://www.w3.org/2000/svg">
					<title>{variant.title.human}</title>
					<rect x="0" y="0" width="100%" height="100%" fill={variant.colors.shade0} />
					{#each swatches as swatch, i}
						<rect
							x="920"
							y="500"
							width="150"
							height="500"
							rx="20"
							fill={swatch}
							transform="rotate(
                {(((i + 1) * (360 / swatches.length)) % 360) + hash(swatch, -7, 5)},
                960,
                540
              )"
							stroke="rgba(0,0,0,0.05)"
							stroke-width="3"
						/>
					{/each}
				</svg>
			{:else}
				<svg viewBox="0 0 480 160" version="1.1" xmlns="http://www.w3.org/2000/svg">
					<title>{variant.title.human}</title>
					<defs>
						<linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id={variant.title.kebab}>
							{#each gradientStops as stop, i}
								<stop stop-color={stop} offset={(100 / (gradientStops.length - 1)) * i + '%'} />
							{/each}
						</linearGradient>
					</defs>
					<rect x="0" y="0" width="100%" height="100%" fill={variant.colors.shade0} />
					{#each circles as circle, i}
						<circle fill={circle} cx={51 + 54 * i} cy="49" r="21" />
					{/each}
					<rect x="30" y="86" width="420" height="42" fill={`url(#${variant.title.kebab})`} />
				</svg>
			{/if}
		</a>
		<div class="rows">
			<h2>
				{colorSet.name}
				{#if webOnly}
					<Badge>Web-only</Badge>
				{/if}
			</h2>
			<span class="themed shade4">
				{variantNames.length === 1 ? `${variantNames[0]} only` : variantNames.join(' & ')}
				{#if selected && variantNames.length > 1}
					<button
						class="themed button small"
						onclick={() => {
							$mergeState({ activeColorSet: $inactiveVariant });
						}}
					>
						Preview {$inactiveVariant}
					</button>
				{/if}
			</span>
			<a class="themed button select-color-set" class:disabled={selected} href={link}>
				{selected ? 'Selected' : 'Select'}
			</a>
		</div>
	</div>
{/if}

<style>
	h2 {
		margin: 0;
		font-weight: bold;
		font-size: var(--size-large-1);
	}

	.wrapper {
		border: var(--size-small-8) solid var(--shade1);
		transition: var(--transition);
	}

	.wrapper.selected {
		border-color: var(--accent3);
	}

	.rows {
		display: flex;
		flex-direction: column;
		align-items: start;
		padding: var(--size-small-5) var(--size-small-1) var(--size-small-1);
		gap: var(--size-small-8);
	}

	.select-color-set {
		margin-block-start: var(--size-small-4);
	}
</style>
