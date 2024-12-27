import { page } from '$app/stores';
import { derived, type Readable } from 'svelte/store';
import type { PartialDeep } from 'type-fest';
import {
	type ColorSetState,
	stateToUiColors,
	getDefaultedActiveVariant,
	getOppositeVariant,
	stateToInputValues,
	getDefaultedActiveCalculateShades,
	stateToColorSetIdentifier,
	parseUserState,
	stringifyState
} from './transform';
import merge from 'lodash/merge';
import pick from 'lodash/pick';
import { goto } from '$app/navigation';

export const userState = derived(page, ($page) => parseUserState($page.url.search));

export const activeVariant = derived(userState, ($userState) =>
	getDefaultedActiveVariant($userState)
);

export const inactiveVariant = derived(activeVariant, ($activeVariant) =>
	getOppositeVariant($activeVariant)
);

export const uiColors = derived(userState, ($userState) => stateToUiColors($userState));

export const inputValues = derived(userState, ($userState) => stateToInputValues($userState));

export const mergeState = derived(
	userState,
	($userState) => (state: PartialDeep<ColorSetState>) => {
		const merged = merge({}, $userState, state);
		goto(stringifyState(merged), {
			replaceState: true,
			noScroll: true,
			keepFocus: true
		});
	}
);

export const clearColorState: Readable<() => void> = derived(userState, ($userState) => () => {
	const cleared = pick($userState, 'activeColorSet');
	goto(stringifyState(cleared));
});

export const activeCalculateShades = derived(userState, ($userState) =>
	getDefaultedActiveCalculateShades($userState)
);

export const selectedColorSetIdentifier = derived(userState, ($userState) =>
	stateToColorSetIdentifier($userState)
);
