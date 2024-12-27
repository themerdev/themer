<script lang="ts">
	import type { Snippet } from 'svelte';
	import { toCustomProperties } from '$lib/color-set/extendedVariant';
	import { uiColors } from '$lib/color-set/stores';
	import DesignSystem from '$lib/DesignSystem.svelte';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<meta
		name="description"
		content="themer takes a set of colors and generates editor themes, terminal themes, themes for other apps, and desktop wallpapers."
	/>
</svelte:head>

<div style:display="contents" style={toCustomProperties($uiColors)}>
	<DesignSystem>
		{@render children?.()}
	</DesignSystem>
</div>
