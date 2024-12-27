<script lang="ts">
	import { page } from '$app/stores';
	import ProColorSets from '$lib/color-set/ProColorSets.svelte';
	import Builder from '$lib/color-set/Builder.svelte';
	import CodePreview from '$lib/CodePreview.svelte';
	import TerminalPreview from '$lib/TerminalPreview.svelte';
	import WallpaperPreview from '$lib/WallpaperPreview.svelte';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import { clearColorState, selectedColorSetIdentifier } from '$lib/color-set/stores';

	let activeColorSetPicker: 'pre-built' | 'build' = $state('pre-built');
</script>

<svelte:head>
	<title>themer - free and open-source development environment theme creator</title>
</svelte:head>

<main>
	<header>
		<Header />
	</header>
	<section class="colors">
		<span class="tabs">
			<button
				class:active={activeColorSetPicker === 'pre-built'}
				onclick={() => {
					activeColorSetPicker = 'pre-built';
				}}
			>
				Pro themes
			</button>
			<button
				class:active={activeColorSetPicker === 'build'}
				onclick={() => {
					if ($selectedColorSetIdentifier !== null) {
						$clearColorState();
					}
					activeColorSetPicker = 'build';
				}}
			>
				Build your own
			</button>
		</span>
		{#if activeColorSetPicker === 'pre-built'}
			<div class="pro-color-sets">
				<ProColorSets />
			</div>
		{/if}
		{#if activeColorSetPicker === 'build'}
			<div class="builder">
				<Builder />
			</div>
		{/if}
	</section>
	<aside class="actions">
		<div class="code-preview">
			<h2 class="themed shade7">Code preview</h2>
			<CodePreview />
		</div>
		<div class="terminal-preview">
			<h2 class="themed shade7">Terminal preview</h2>
			<TerminalPreview />
		</div>
		<div class="wallpaper-preview">
			<h2 class="themed shade7">Wallpaper preview</h2>
			<WallpaperPreview />
		</div>
		<div class="download">
			<a href={`/checkout${$page.url.search}`} class="themed button primary full">
				Download for 30+ apps
			</a>
		</div>
	</aside>
	<footer>
		<Footer />
	</footer>
</main>

<style>
	main {
		color: var(--shade7);
		background-color: var(--shade0);
		transition: var(--transition);
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-template-rows: auto 1fr auto;
		grid-template-areas:
			'header header'
			'colors actions'
			'footer footer';
		box-sizing: border-box;
		height: 100%;
	}

	header {
		grid-area: header;
		border-bottom: var(--border-width) solid var(--shade3);
		padding: var(--size-small-1) var(--size-large-1);
	}

	.colors {
		min-height: 0;
		display: flex;
		flex-direction: column;
		padding: var(--size-large-1) var(--size-large-1) 0;
	}

	.tabs {
		display: inline-flex;
		gap: var(--size-regular);
	}
	.tabs button {
		background: none;
		border: none;
		padding: 0 0 var(--size-small-3);
		margin: 0 0 var(--size-regular);
		line-height: var(--line-height-small);
		color: var(--shade5);
		border-bottom: var(--border-width) solid transparent;
		transition: var(--transition);
		text-decoration: none;
		font-size: var(--size-regular);
		font-weight: bold;
	}
	.tabs button.active {
		color: var(--shade7);
		border-bottom-color: currentColor;
	}

	.pro-color-sets,
	.builder {
		overflow-y: scroll;
	}

	.actions {
		min-height: 0;
		display: grid;
		grid-template-rows: 1fr 1fr auto auto;
		gap: var(--size-large-1);
		border-left: var(--border-width) solid var(--shade3);
		padding-top: var(--size-large-1);
	}

	.code-preview,
	.terminal-preview,
	.wallpaper-preview {
		min-height: 0;
		min-width: 0;
		display: flex;
		flex-direction: column;
		gap: var(--size-small-2);
		padding: 0 var(--size-large-1);
	}

	h2 {
		margin: 0;
		font-size: var(--size-regular);
		font-weight: bold;
	}

	.download {
		padding: var(--size-large-1);
		border-top: var(--border-width) solid var(--shade3);
	}

	footer {
		grid-area: footer;
		border-top: var(--border-width) solid var(--shade3);
		padding: var(--size-regular) var(--size-large-1);
	}

	@media (max-width: 800px) {
		main {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 550px) {
		main {
			grid-template-columns: 1fr;
			grid-template-areas:
				'header'
				'colors'
				'actions'
				'footer';
			height: auto;
		}

		.colors {
			min-height: auto;
		}

		.actions {
			min-height: auto;
			grid-template-rows: auto auto auto auto;
			border-left: none;
		}
	}
</style>
