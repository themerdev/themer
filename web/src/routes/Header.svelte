<script lang="ts">
	import { onMount } from 'svelte';

	let starCount = $state('...');

	onMount(async () => {
		const response: { stargazers_count: number } = await fetch(
			'https://api.github.com/repos/mjswensen/themer'
		).then((res) => res.json());
		starCount = (response.stargazers_count / 1000).toFixed(1) + 'k';
	});
</script>

<div class="wrapper">
	<h1>themer</h1>
	<span class="subtitle">
		<span class="themed shade5">// free and open-source development environment theme creator</span>
	</span>
	<a href="https://github.com/mjswensen/themer" target="_blank">
		Star on GitHub ({starCount})
	</a>
</div>

<style>
	h1 {
		margin: 0;
		font-size: var(--size-large-1);
		font-weight: 700;
		hyphens: none;
	}

	.wrapper {
		display: flex;
		align-items: baseline;
		gap: var(--size-regular);
		line-height: var(--line-height-small);
	}

	.wrapper .subtitle {
		flex-grow: 1;
		font-family: var(--font-stack-code);
	}

	@media (max-width: 500px) {
		.wrapper {
			flex-direction: column;
			gap: var(--size-small-2);
		}
	}
</style>
