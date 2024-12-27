<script lang="ts">
	import { allBuiltInTemplates, type BuiltInTemplate, type Template } from 'themer';
	import groupBy from 'lodash/groupBy';
	import { dimensions } from '$lib/viewportStore';
	import { allWebTemplates, isWebTemplate, type WebTemplate } from '$lib/template/all';
	import sortBy from 'lodash/sortBy';
	import Badge from '$lib/Badge.svelte';
	import { page } from '$app/stores';

	let [width, height] = $derived($dimensions);

	const allTemplates = new Map<BuiltInTemplate | WebTemplate, Template>([
		...allBuiltInTemplates.entries(),
		...allWebTemplates.entries()
	]);

	const bucketedTemplateIds = groupBy(sortBy([...allTemplates.keys()]), (id) => {
		switch (id) {
			case 'alacritty':
			case 'cmd':
			case 'conemu':
			case 'hyper':
			case 'iterm':
			case 'kitty':
			case 'konsole':
			case 'terminal':
			case 'terminator':
			case 'warp':
			case 'windows-terminal':
				return 'terminal';
			case 'bbedit':
			case 'emacs':
			case 'sublime-text':
			case 'vim':
			case 'vim-lightline':
			case 'visual-studio':
			case 'vs-code':
			case 'xcode':
				return 'editor';
			case 'wallpaper-block-wave':
			case 'wallpaper-burst':
			case 'wallpaper-circuits':
			case 'wallpaper-diamonds':
			case 'wallpaper-dot-grid':
			case 'wallpaper-exhibit':
			case 'wallpaper-logos':
			case 'wallpaper-octagon':
			case 'wallpaper-shirts':
			case 'wallpaper-skyline':
			case 'wallpaper-triangles':
				return 'wallpaper';
			default:
				return 'other';
		}
	});

	let selectedTemplates: (BuiltInTemplate | WebTemplate)[] = $state([]);
</script>

<main>
	<form method="POST" action={`/download${$page.url.search}`}>
		<div class="templates">
			<fieldset>
				<legend>Editors / IDEs</legend>
				{#each bucketedTemplateIds.editor as id}
					<label class="template-label themed" class:accent3={selectedTemplates.includes(id)}>
						<input type="checkbox" name="template" value={id} bind:group={selectedTemplates} />
						{allTemplates.get(id)?.name}
					</label>
				{/each}
			</fieldset>
			<fieldset>
				<legend>Terminals</legend>
				{#each bucketedTemplateIds.terminal as id}
					<label class="template-label themed" class:accent3={selectedTemplates.includes(id)}>
						<input type="checkbox" name="template" value={id} bind:group={selectedTemplates} />
						{allTemplates.get(id)?.name}
					</label>
				{/each}
			</fieldset>
			<fieldset>
				<legend>Other</legend>
				{#each bucketedTemplateIds.other as id}
					<label class="template-label themed" class:accent3={selectedTemplates.includes(id)}>
						<input type="checkbox" name="template" value={id} bind:group={selectedTemplates} />
						{allTemplates.get(id)?.name}
					</label>
				{/each}
			</fieldset>
			<fieldset>
				<legend>Wallpapers</legend>
				{#each bucketedTemplateIds.wallpaper as id}
					<label class="template-label themed" class:accent3={selectedTemplates.includes(id)}>
						<input type="checkbox" name="template" value={id} bind:group={selectedTemplates} />
						{allTemplates.get(id)?.name}
						{#if isWebTemplate(id)}
							<Badge>Web-only</Badge>
						{/if}
					</label>
				{/each}
				<div class="resolution-explanation themed shade5">
					Wallpapers will be rendered at the browser viewport's current resolution ({width}x{height}).
				</div>
				<button
					type="button"
					class="themed button small"
					onclick={() => {
						window.document.documentElement.requestFullscreen();
					}}
				>
					Go fullscreen
				</button>
				<input type="hidden" name="width" value={width} />
				<input type="hidden" name="height" value={height} />
			</fieldset>
		</div>
		<div class="download">
			<button class="themed button primary full" type="submit" disabled={!selectedTemplates.length}>
				Download
			</button>
		</div>
	</form>
</main>

<style>
	main {
		color: var(--shade7);
		background-color: var(--shade0);
		box-sizing: border-box;
		min-height: 100%;
		padding: var(--size-large-1);
	}

	form {
		margin: 0 auto;
		width: 100%;
		max-width: var(--size-large-13);
	}

	/* Templates */

	.templates {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(var(--size-large-8), 1fr));
		gap: var(--size-regular);
	}

	fieldset {
		border: none;
		padding: 0;
	}

	legend {
		font-weight: bold;
		font-size: var(--size-large-1);
		padding-block-end: var(--size-small-3);
		border-bottom: var(--border-width) solid var(--shade2);
		margin-block-end: var(--size-small-3);
	}

	.template-label {
		display: block;
	}

	.resolution-explanation {
		font-size: var(--size-small-1);
		margin: var(--size-small-3) 0;
	}

	/* Download */

	.download {
		margin: var(--size-large-2) auto;
		max-width: var(--size-large-11);
		display: flex;
		flex-direction: column;
		gap: var(--size-small-1);
	}
</style>
