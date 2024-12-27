<script lang="ts">
	import type { FullVariant } from 'themer';
	import {
		activeCalculateShades,
		activeVariant,
		mergeState,
		inputValues,
		uiColors
	} from './stores';
	import debounce from 'lodash/debounce';
	import Droplet from '$lib/icons/Droplet.svelte';

	let setColor = $derived(
		debounce((key: keyof FullVariant, value: string) => {
			$mergeState({
				colors: {
					[$activeVariant]: {
						[key]: value
					}
				}
			});
		}, 50)
	);
</script>

<div class="container" class:calculate-shades={$activeCalculateShades}>
	<div class="variant-picker">
		<label>
			<input
				type="radio"
				name="active-variant"
				value="dark"
				checked={$activeVariant === 'dark'}
				onchange={() => {
					$mergeState({ activeColorSet: 'dark' });
				}}
			/>
			Dark variant
		</label>
		<label>
			<input
				type="radio"
				name="active-variant"
				value="light"
				checked={$activeVariant === 'light'}
				onchange={() => {
					$mergeState({ activeColorSet: 'light' });
				}}
			/>
			Light variant
		</label>
	</div>
	<div class="shades-preview"></div>
	<label class="text-input shade zero">
		shade0:
		<input
			type="text"
			placeholder="background color"
			value={$inputValues.shade0}
			oninput={(evt) => setColor('shade0', evt.currentTarget.value)}
		/>
	</label>
	<label class="color-input shade zero">
		<input
			aria-label="shade0 color picker"
			type="color"
			value={$uiColors.shade0}
			oninput={(evt) => setColor('shade0', evt.currentTarget.value)}
		/>
		<span class="icon themed fg-shade0"><Droplet /></span>
	</label>
	{#if !$activeCalculateShades}
		<label class="text-input shade one">
			shade1:
			<input
				type="text"
				placeholder="UI"
				value={$inputValues.shade1}
				oninput={(evt) => setColor('shade1', evt.currentTarget.value)}
			/>
		</label>
		<label class="color-input shade one">
			<input
				aria-label="shade1 color picker"
				type="color"
				value={$uiColors.shade1}
				oninput={(evt) => setColor('shade1', evt.currentTarget.value)}
			/>
			<span class="icon themed fg-shade1"><Droplet /></span>
		</label>
		<label class="text-input shade two">
			shade2:
			<input
				type="text"
				placeholder="UI, text selection"
				value={$inputValues.shade2}
				oninput={(evt) => setColor('shade2', evt.currentTarget.value)}
			/>
		</label>
		<label class="color-input shade two">
			<input
				aria-label="shade2 color picker"
				type="color"
				value={$uiColors.shade2}
				oninput={(evt) => setColor('shade2', evt.currentTarget.value)}
			/>
			<span class="icon themed fg-shade2"><Droplet /></span>
		</label>
		<label class="text-input shade three">
			shade3:
			<input
				type="text"
				placeholder="UI, code comments"
				value={$inputValues.shade3}
				oninput={(evt) => setColor('shade3', evt.currentTarget.value)}
			/>
		</label>
		<label class="color-input shade three">
			<input
				aria-label="shade3 color picker"
				type="color"
				value={$uiColors.shade3}
				oninput={(evt) => setColor('shade3', evt.currentTarget.value)}
			/>
			<span class="icon themed fg-shade3"><Droplet /></span>
		</label>
		<label class="text-input shade four">
			shade4:
			<input
				type="text"
				placeholder="UI"
				value={$inputValues.shade4}
				oninput={(evt) => setColor('shade4', evt.currentTarget.value)}
			/>
		</label>
		<label class="color-input shade four">
			<input
				aria-label="shade4 color picker"
				type="color"
				value={$uiColors.shade4}
				oninput={(evt) => setColor('shade4', evt.currentTarget.value)}
			/>
			<span class="icon themed fg-shade4"><Droplet /></span>
		</label>
		<label class="text-input shade five">
			shade5:
			<input
				type="text"
				placeholder="UI"
				value={$inputValues.shade5}
				oninput={(evt) => setColor('shade5', evt.currentTarget.value)}
			/>
		</label>
		<label class="color-input shade five">
			<input
				aria-label="shade5 color picker"
				type="color"
				value={$uiColors.shade5}
				oninput={(evt) => setColor('shade5', evt.currentTarget.value)}
			/>
			<span class="icon themed fg-shade5"><Droplet /></span>
		</label>
		<label class="text-input shade six">
			shade6:
			<input
				type="text"
				placeholder="foreground text"
				value={$inputValues.shade6}
				oninput={(evt) => setColor('shade6', evt.currentTarget.value)}
			/>
		</label>
		<label class="color-input shade six">
			<input
				aria-label="shade6 color picker"
				type="color"
				value={$uiColors.shade6}
				oninput={(evt) => setColor('shade6', evt.currentTarget.value)}
			/>
			<span class="icon themed fg-shade6"><Droplet /></span>
		</label>
	{/if}
	<label class="text-input shade seven">
		shade7:
		<input
			type="text"
			placeholder="foreground text"
			value={$inputValues.shade7}
			oninput={(evt) => setColor('shade7', evt.currentTarget.value)}
		/>
	</label>
	<label class="color-input shade seven">
		<input
			aria-label="shade7 color picker"
			type="color"
			value={$uiColors.shade7}
			oninput={(evt) => setColor('shade7', evt.currentTarget.value)}
		/>
		<span class="icon themed fg-shade7"><Droplet /></span>
	</label>
	<label class="text-input accent zero">
		accent0:
		<input
			type="text"
			placeholder="error, vcs deletion, ANSI red"
			value={$inputValues.accent0}
			oninput={(evt) => setColor('accent0', evt.currentTarget.value)}
		/>
	</label>
	<label class="color-input accent zero">
		<input
			aria-label="accent0 color picker"
			type="color"
			value={$uiColors.accent0}
			oninput={(evt) => setColor('accent0', evt.currentTarget.value)}
		/>
		<span class="icon themed fg-accent0"><Droplet /></span>
	</label>
	<label class="text-input accent one">
		accent1:
		<input
			type="text"
			placeholder="syntax"
			value={$inputValues.accent1}
			oninput={(evt) => setColor('accent1', evt.currentTarget.value)}
		/>
	</label>
	<label class="color-input accent one">
		<input
			aria-label="accent1 color picker"
			type="color"
			value={$uiColors.accent1}
			oninput={(evt) => setColor('accent1', evt.currentTarget.value)}
		/>
		<span class="icon themed fg-accent1"><Droplet /></span>
	</label>
	<label class="text-input accent two">
		accent2:
		<input
			type="text"
			placeholder="warning, vcs modification, ANSI yellow"
			value={$inputValues.accent2}
			oninput={(evt) => setColor('accent2', evt.currentTarget.value)}
		/>
	</label>
	<label class="color-input accent two">
		<input
			aria-label="accent2 color picker"
			type="color"
			value={$uiColors.accent2}
			oninput={(evt) => setColor('accent2', evt.currentTarget.value)}
		/>
		<span class="icon themed fg-accent2"><Droplet /></span>
	</label>
	<label class="text-input accent three">
		accent3:
		<input
			type="text"
			placeholder="success, vcs addition, ANSI green"
			value={$inputValues.accent3}
			oninput={(evt) => setColor('accent3', evt.currentTarget.value)}
		/>
	</label>
	<label class="color-input accent three">
		<input
			aria-label="accent3 color picker"
			type="color"
			value={$uiColors.accent3}
			oninput={(evt) => setColor('accent3', evt.currentTarget.value)}
		/>
		<span class="icon themed fg-accent3"><Droplet /></span>
	</label>
	<label class="text-input accent four">
		accent4:
		<input
			type="text"
			placeholder="syntax, ANSI cyan"
			value={$inputValues.accent4}
			oninput={(evt) => setColor('accent4', evt.currentTarget.value)}
		/>
	</label>
	<label class="color-input accent four">
		<input
			aria-label="accent4 color picker"
			type="color"
			value={$uiColors.accent4}
			oninput={(evt) => setColor('accent4', evt.currentTarget.value)}
		/>
		<span class="icon themed fg-accent4"><Droplet /></span>
	</label>
	<label class="text-input accent five">
		accent5:
		<input
			type="text"
			placeholder="syntax, ANSI blue"
			value={$inputValues.accent5}
			oninput={(evt) => setColor('accent5', evt.currentTarget.value)}
		/>
	</label>
	<label class="color-input accent five">
		<input
			aria-label="accent5 color picker"
			type="color"
			value={$uiColors.accent5}
			oninput={(evt) => setColor('accent5', evt.currentTarget.value)}
		/>
		<span class="icon themed fg-accent5"><Droplet /></span>
	</label>
	<label class="text-input accent six">
		accent6:
		<input
			type="text"
			placeholder="syntax, caret/cursor"
			value={$inputValues.accent6}
			oninput={(evt) => setColor('accent6', evt.currentTarget.value)}
		/>
	</label>
	<label class="color-input accent six">
		<input
			aria-label="accent6 color picker"
			type="color"
			value={$uiColors.accent6}
			oninput={(evt) => setColor('accent6', evt.currentTarget.value)}
		/>
		<span class="icon themed fg-accent6"><Droplet /></span>
	</label>
	<label class="text-input accent seven">
		accent7:
		<input
			type="text"
			placeholder="syntax, special, ANSI magenta"
			value={$inputValues.accent7}
			oninput={(evt) => setColor('accent7', evt.currentTarget.value)}
		/>
	</label>
	<label class="color-input accent seven">
		<input
			aria-label="accent7 color picker"
			type="color"
			value={$uiColors.accent7}
			oninput={(evt) => setColor('accent7', evt.currentTarget.value)}
		/>
		<span class="icon themed fg-accent7"><Droplet /></span>
	</label>
	<label class="calculate-shades-control">
		<input
			type="checkbox"
			checked={$activeCalculateShades}
			oninput={(evt) => {
				$mergeState({
					calculateIntermediaryShades: { [$activeVariant]: evt.currentTarget.checked }
				});
			}}
		/>
		Calculate intermediary shades 1 through 6
	</label>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr auto 1fr auto;
		gap: var(--size-regular);
		padding-bottom: var(--size-large-1);
		container: build / inline-size;
	}

	.variant-picker {
		grid-column: 1 / 5;
		display: flex;
		justify-content: flex-start;
		align-items: baseline;
		gap: var(--size-large-1);
	}

	.text-input {
		display: flex;
		gap: var(--size-regular);
		align-items: baseline;
		color: var(--shade7);
		font-family: var(--font-stack-code);
	}
	.text-input.shade {
		grid-column: 1 / 2;
	}
	.text-input.accent {
		grid-column: 3 / 4;
	}
	.text-input input {
		flex-grow: 1;
		background: none;
		border-width: var(--border-width);
		border-style: solid;
		border-radius: var(--border-radius);
		color: var(--shade7);
		padding: var(--size-small-3) var(--size-small-1);
		width: var(--size-large-5);
		font-family: var(--font-stack-code);
	}
	.text-input input::placeholder {
		color: var(--shade4);
	}
	.text-input input {
		border-color: var(--shade7);
	}

	.color-input {
		width: var(--size-large-2);
		height: var(--size-large-2);
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	.color-input .icon {
		line-height: 0;
	}

	.color-input.shade {
		grid-column: 2 / 3;
	}

	.color-input.accent {
		grid-column: 4 / 5;
		border-radius: 100%;
		transition: var(--transition);
	}
	.color-input.accent.zero {
		background-color: var(--accent0);
	}
	.color-input.accent.one {
		background-color: var(--accent1);
	}
	.color-input.accent.two {
		background-color: var(--accent2);
	}
	.color-input.accent.three {
		background-color: var(--accent3);
	}
	.color-input.accent.four {
		background-color: var(--accent4);
	}
	.color-input.accent.five {
		background-color: var(--accent5);
	}
	.color-input.accent.six {
		background-color: var(--accent6);
	}
	.color-input.accent.seven {
		background-color: var(--accent7);
	}

	.color-input input {
		opacity: 0;
		width: 0;
		height: 0;
		padding: 0;
		margin: 0;
		border: none;
		outline: none;
	}

	.zero {
		grid-row: 2;
	}
	.one,
	.calculate-shades .shade.seven {
		grid-row: 3;
	}
	.two {
		grid-row: 4;
	}
	.three {
		grid-row: 5;
	}
	.four {
		grid-row: 6;
	}
	.five {
		grid-row: 7;
	}
	.six {
		grid-row: 8;
	}
	.seven {
		grid-row: 9;
	}

	.shades-preview {
		grid-area: 2 / 2 / 10 / 3;
		transition: var(--transition);
		background: linear-gradient(
			to bottom,
			var(--shade0),
			var(--shade1),
			var(--shade2),
			var(--shade3),
			var(--shade4),
			var(--shade5),
			var(--shade6),
			var(--shade7)
		);
	}
	.calculate-shades .shades-preview {
		grid-row: 2 / 4;
	}

	.calculate-shades-control {
		grid-column: 1 / 2;
	}

	.calculate-shades .calculate-shades-control {
		grid-row: span 2;
	}

	@container (max-width: 550px) {
		.text-input.shade,
		.text-input.accent,
		.calculate-shades-control {
			grid-column: 1 / 4;
		}
		.color-input.shade,
		.color-input.accent {
			grid-column: 4 / 5;
		}
		.shades-preview {
			grid-area: 2 / 4 / 10 / 5;
		}
		.shade.zero {
			grid-row: 2;
		}
		.shade.one {
			grid-row: 3;
		}
		.shade.two {
			grid-row: 4;
		}
		.shade.three {
			grid-row: 5;
		}
		.shade.four {
			grid-row: 6;
		}
		.shade.five {
			grid-row: 7;
		}
		.shade.six {
			grid-row: 8;
		}
		.shade.seven {
			grid-row: 9;
		}
		.calculate-shades-control {
			grid-row: 10;
		}
		.accent.zero {
			grid-row: 11;
		}
		.accent.one {
			grid-row: 12;
		}
		.accent.two {
			grid-row: 13;
		}
		.accent.three {
			grid-row: 14;
		}
		.accent.four {
			grid-row: 15;
		}
		.accent.five {
			grid-row: 16;
		}
		.accent.six {
			grid-row: 17;
		}
		.accent.seven {
			grid-row: 18;
		}

		.calculate-shades .shade.seven {
			grid-row: 3;
		}
		.calculate-shades .calculate-shades-control {
			grid-row: 4;
		}
		.calculate-shades .accent.zero {
			grid-row: 5;
		}
		.calculate-shades .accent.one {
			grid-row: 6;
		}
		.calculate-shades .accent.two {
			grid-row: 7;
		}
		.calculate-shades .accent.three {
			grid-row: 8;
		}
		.calculate-shades .accent.four {
			grid-row: 9;
		}
		.calculate-shades .accent.five {
			grid-row: 10;
		}
		.calculate-shades .accent.six {
			grid-row: 11;
		}
		.calculate-shades .accent.seven {
			grid-row: 12;
		}
	}
</style>
