<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

{@render children?.()}

<style>
	:global(html),
	:global(body) {
		--size-ratio: calc(5 / 7);

		--size-regular: 16px;
		--size-large-1: 22px;
		--size-large-2: 31px;
		--size-large-3: 44px;
		--size-large-4: 61px;
		--size-large-5: 86px;
		--size-large-6: 120px;
		--size-large-7: 169px;
		--size-large-8: 236px;
		--size-large-9: 331px;
		--size-large-10: 463px;
		--size-large-11: 648px;
		--size-large-12: 907px;
		--size-large-13: 1270px;

		--size-small-1: 11px;
		--size-small-2: 8px;
		--size-small-3: 6px;
		--size-small-4: 4px;
		--size-small-5: 3px;
		--size-small-6: 2px;
		--size-small-7: 2px;
		--size-small-8: 1px;

		--font-size-small: var(--size-small-1);

		--line-height-small: 1;
		--line-height-medium: 1.15;
		--line-height: calc(var(--line-height-small) / var(--size-ratio));
		--line-height-large: calc(var(--line-height-small) / var(--size-ratio) / var(--size-ratio));

		--transition: all 100ms ease-in-out;
		--border-width: var(--size-small-8);
		--border-width-large: var(--size-small-7);
		--border-radius: var(--size-small-4);
		--border-radius-small: calc(var(--size-small-4) / 2);

		--modal-z-index: 10;

		--font-stack-ui: system-ui, sans-serif;
		--font-stack-code: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas,
			'DejaVu Sans Mono', monospace;

		font-family: var(--font-stack-ui);
		font-size: var(--size-regular);
		line-height: var(--line-height);
		height: 100%;
	}

	/* Base styles */

	:global(h1) {
		margin: 0;
		font-size: var(--size-large-3);
		font-weight: bold;
		hyphens: auto;
		line-height: var(--line-height-medium);
		margin-block: var(--size-large-4) var(--size-large-1);
	}

	:global(h2) {
		margin: 0;
		font-size: var(--size-large-2);
		font-weight: bold;
		margin-block: var(--size-large-3) var(--size-large-1);
	}

	:global(h3) {
		margin: 0;
		font-size: var(--size-large-1);
		font-weight: bold;
		margin-block: var(--size-large-2) var(--size-large-1);
	}

	:global(p) {
		margin-block: var(--size-large-1);
	}

	:global(ul) {
		margin: 0;
		padding-inline-start: var(--size-large-1);
	}

	/* Links */

	:global(a:link),
	:global(a:visited) {
		transition: var(--transition);
		color: var(--accent5);
	}
	:global(a:hover) {
		color: var(--accent5-shade7);
	}
	:global(a:active) {
		color: var(--accent5-shade0);
	}

	/* Code */

	:global(pre) {
		white-space: pre;
		tab-size: 2;
		margin: 0;
		overflow: scroll;
		padding: var(--size-small-1);
		transition: var(--transition);
		border: var(--border-width) solid var(--shade1);
	}

	:global(code) {
		font-family: var(--font-stack-code);
		transition: var(--transition);
	}

	/* Blockquotes */

	:global(blockquote) {
		margin: 0;
		padding: 0 var(--size-small-1);
		border-left: var(--border-width-large) solid var(--accent7);
		font-style: italic;
	}

	/* Other */

	:global(small) {
		font-size: var(--size-small-1);
		transition: var(--transition);
		color: var(--shade5);
	}

	/* Theme */

	:global(.themed) {
		transition: var(--transition);
	}

	/* Forms */

	:global(.themed.button),
	:global(.themed.select),
	:global(.themed.input) {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: var(--size-small-4) var(--size-small-3);
		text-decoration: none;
		transition: var(--transition);
		border: var(--border-width) solid currentColor;
		border-radius: var(--border-radius);
		background-color: var(--shade0);
		color: var(--shade6-shade7);
		line-height: var(--line-height-small);
	}
	:global(.themed.button),
	:global(.themed.select) {
		cursor: pointer;
	}
	:global(.themed.button:hover),
	:global(.themed.select:hover) {
		color: var(--shade7);
	}
	:global(.themed.button:active),
	:global(.themed.select:active) {
		color: var(--shade6);
	}
	:global(.themed.button:disabled),
	:global(.themed.button.disabled),
	:global(.themed.select:disabled) {
		cursor: not-allowed;
		color: var(--shade3);
	}
	:global(.themed.input::placeholder) {
		color: var(--shade3);
	}

	:global(.themed.input.full) {
		padding: var(--size-small-2);
	}
	:global(.themed.input.full),
	:global(.themed.button.full) {
		width: 100%;
		box-sizing: border-box;
	}

	:global(.themed.button.primary) {
		cursor: pointer;
		transition: var(--transition);
		padding: var(--size-small-1);
		border: none;
		background-image: linear-gradient(
			to right,
			var(--accent0),
			var(--accent1),
			var(--accent2),
			var(--accent3),
			var(--accent4),
			var(--accent5),
			var(--accent6),
			var(--accent7)
		);
		position: relative;
		z-index: 1;
	}
	:global(.themed.button.primary::before) {
		content: '';
		position: absolute;
		top: var(--size-small-5);
		right: var(--size-small-5);
		bottom: var(--size-small-5);
		left: var(--size-small-5);
		transition: var(--transition);
		background-color: var(--shade0);
		border-radius: var(--border-radius-small);
		z-index: -1;
	}
	:global(.themed.button.primary:disabled) {
		cursor: not-allowed;
		background-image: none;
		background-color: var(--shade3);
	}

	:global(.themed.button.small) {
		font-size: var(--size-small-1);
		padding: var(--size-small-6) var(--size-small-5);
	}

	/* Foreground */

	:global(.themed.shade0) {
		color: var(--shade0);
	}
	:global(.themed.shade1) {
		color: var(--shade1);
	}
	:global(.themed.shade2) {
		color: var(--shade2);
	}
	:global(.themed.shade3) {
		color: var(--shade3);
	}
	:global(.themed.shade4) {
		color: var(--shade4);
	}
	:global(.themed.shade5) {
		color: var(--shade5);
	}
	:global(.themed.shade6) {
		color: var(--shade6);
	}
	:global(.themed.shade7) {
		color: var(--shade7);
	}
	:global(.themed.accent0) {
		color: var(--accent0);
	}
	:global(.themed.accent1) {
		color: var(--accent1);
	}
	:global(.themed.accent2) {
		color: var(--accent2);
	}
	:global(.themed.accent3) {
		color: var(--accent3);
	}
	:global(.themed.accent4) {
		color: var(--accent4);
	}
	:global(.themed.accent5) {
		color: var(--accent5);
	}
	:global(.themed.accent6) {
		color: var(--accent6);
	}
	:global(.themed.accent7) {
		color: var(--accent7);
	}
	:global(.themed.fg-shade0) {
		color: var(--fg-shade0);
	}
	:global(.themed.fg-shade1) {
		color: var(--fg-shade1);
	}
	:global(.themed.fg-shade2) {
		color: var(--fg-shade2);
	}
	:global(.themed.fg-shade3) {
		color: var(--fg-shade3);
	}
	:global(.themed.fg-shade4) {
		color: var(--fg-shade4);
	}
	:global(.themed.fg-shade5) {
		color: var(--fg-shade5);
	}
	:global(.themed.fg-shade6) {
		color: var(--fg-shade6);
	}
	:global(.themed.fg-shade7) {
		color: var(--fg-shade7);
	}
	:global(.themed.fg-accent0) {
		color: var(--fg-accent0);
	}
	:global(.themed.fg-accent1) {
		color: var(--fg-accent1);
	}
	:global(.themed.fg-accent2) {
		color: var(--fg-accent2);
	}
	:global(.themed.fg-accent3) {
		color: var(--fg-accent3);
	}
	:global(.themed.fg-accent4) {
		color: var(--fg-accent4);
	}
	:global(.themed.fg-accent5) {
		color: var(--fg-accent5);
	}
	:global(.themed.fg-accent6) {
		color: var(--fg-accent6);
	}
	:global(.themed.fg-accent7) {
		color: var(--fg-accent7);
	}

	/* Background */

	:global(.themed.bg-shade0) {
		background-color: var(--shade0);
	}
	:global(.themed.bg-shade1) {
		background-color: var(--shade1);
	}
	:global(.themed.bg-shade2) {
		background-color: var(--shade2);
	}
	:global(.themed.bg-shade3) {
		background-color: var(--shade3);
	}
	:global(.themed.bg-shade4) {
		background-color: var(--shade4);
	}
	:global(.themed.bg-shade5) {
		background-color: var(--shade5);
	}
	:global(.themed.bg-shade6) {
		background-color: var(--shade6);
	}
	:global(.themed.bg-shade7) {
		background-color: var(--shade7);
	}
	:global(.themed.bg-accent0) {
		background-color: var(--accent0);
	}
	:global(.themed.bg-accent1) {
		background-color: var(--accent1);
	}
	:global(.themed.bg-accent2) {
		background-color: var(--accent2);
	}
	:global(.themed.bg-accent3) {
		background-color: var(--accent3);
	}
	:global(.themed.bg-accent4) {
		background-color: var(--accent4);
	}
	:global(.themed.bg-accent5) {
		background-color: var(--accent5);
	}
	:global(.themed.bg-accent6) {
		background-color: var(--accent6);
	}
	:global(.themed.bg-accent7) {
		background-color: var(--accent7);
	}
</style>
