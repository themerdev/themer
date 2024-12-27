<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<span class="badge">{@render children?.()}</span>

<style>
	.badge {
		padding: 0 var(--size-small-6);
		color: var(--accent7);
		font-size: var(--size-small-1);
		line-height: 1;
		text-transform: uppercase;
		letter-spacing: var(--size-small-8);
		font-weight: bold;
	}
</style>
