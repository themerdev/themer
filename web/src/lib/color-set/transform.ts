import {
	type ColorSet,
	type Variant,
	type FullVariant,
	prepareVariant,
	type BuiltInColorSet,
	allBuiltInColorSets
} from 'themer';
import type { PartialDeep } from 'type-fest';
import Color from 'color';
import get from 'lodash/get';
import memoize from 'lodash/memoize';
import { parse, stringify } from 'qs';
import concert from './concert';
import futurePro from './future-pro';
import victorMono from './victor-mono';

export function parseUserState(search: string): PartialDeep<ColorSetState> {
	return parse(search, {
		allowDots: true,
		ignoreQueryPrefix: true,
		// By default, qs decodes all values as strings. Any non-string values
		// in ColorSetState need to be decoded properly before use.
		decoder: (str, defaultDecoder) => {
			switch (str) {
				case 'true':
					return true;
				case 'false':
					return false;
				default:
					return defaultDecoder(str);
			}
		}
	});
}

export function stringifyState(state: PartialDeep<ColorSetState>): string {
	return stringify(state, { addQueryPrefix: true, allowDots: true });
}

export const customColorSetName = 'My Color Set';

export type ColorSetState = {
	colors: ColorSet['variants'];
	activeColorSet: 'light' | 'dark';
	calculateIntermediaryShades: {
		dark: boolean;
		light: boolean;
	};
};

const getParsedColor = memoize(
	(value: string | undefined, fallback: string): string => {
		try {
			if (typeof value === 'string') return Color(value).hex();
			else return fallback;
		} catch {
			return fallback;
		}
	},
	(value: string | undefined, fallback: string) => `${value}:${fallback}`
);

function fillOutVariant(
	variant: Partial<Variant>,
	calculateShades: boolean,
	fallbackBackground: string,
	fallbackForeground: string
): Variant {
	return {
		shade0: getParsedColor(variant.shade0, fallbackBackground),
		...(calculateShades
			? null
			: {
					shade1:
						'shade1' in variant
							? getParsedColor(variant.shade1, fallbackForeground)
							: fallbackForeground,
					shade2:
						'shade2' in variant
							? getParsedColor(variant.shade2, fallbackForeground)
							: fallbackForeground,
					shade3:
						'shade3' in variant
							? getParsedColor(variant.shade3, fallbackForeground)
							: fallbackForeground,
					shade4:
						'shade4' in variant
							? getParsedColor(variant.shade4, fallbackForeground)
							: fallbackForeground,
					shade5:
						'shade5' in variant
							? getParsedColor(variant.shade5, fallbackForeground)
							: fallbackForeground,
					shade6:
						'shade6' in variant
							? getParsedColor(variant.shade6, fallbackForeground)
							: fallbackForeground
				}),
		shade7: getParsedColor(variant.shade7, fallbackForeground),
		accent0: getParsedColor(variant.accent0, fallbackForeground),
		accent1: getParsedColor(variant.accent1, fallbackForeground),
		accent2: getParsedColor(variant.accent2, fallbackForeground),
		accent3: getParsedColor(variant.accent3, fallbackForeground),
		accent4: getParsedColor(variant.accent4, fallbackForeground),
		accent5: getParsedColor(variant.accent5, fallbackForeground),
		accent6: getParsedColor(variant.accent6, fallbackForeground),
		accent7: getParsedColor(variant.accent7, fallbackForeground)
	};
}

function stateToVariants(state: PartialDeep<ColorSetState>): ColorSet['variants'] | null {
	const dark =
		state.colors && 'dark' in state.colors
			? {
					dark: fillOutVariant(
						state.colors.dark || {},
						state.calculateIntermediaryShades?.dark ?? true,
						'#000000',
						'#FFFFFF'
					)
				}
			: null;
	const light =
		state.colors && 'light' in state.colors
			? {
					light: fillOutVariant(
						state.colors.light || {},
						state.calculateIntermediaryShades?.light ?? true,
						'#FFFFFF',
						'#000000'
					)
				}
			: null;
	if (dark && light) return { ...dark, ...light };
	if (dark) return dark;
	if (light) return light;
	return null;
}

const webColorSetIdentifiers = ['concert', 'future-pro', 'victor-mono'] as const;
export type WebColorSet = (typeof webColorSetIdentifiers)[number];

export function isWebColorSetIdentifier(v: WebColorSet | BuiltInColorSet | null): v is WebColorSet {
	return webColorSetIdentifiers.includes(v as WebColorSet);
}

export const webColorSets = new Map<WebColorSet, ColorSet>([
	['concert', concert],
	['future-pro', futurePro],
	['victor-mono', victorMono]
]);

function hashVariants(variants: ColorSet['variants']): string {
	return [
		get(variants, 'dark.shade0', ''),
		get(variants, 'dark.shade1', ''),
		get(variants, 'dark.shade2', ''),
		get(variants, 'dark.shade3', ''),
		get(variants, 'dark.shade4', ''),
		get(variants, 'dark.shade5', ''),
		get(variants, 'dark.shade6', ''),
		get(variants, 'dark.shade7', ''),
		get(variants, 'dark.accent0', ''),
		get(variants, 'dark.accent1', ''),
		get(variants, 'dark.accent2', ''),
		get(variants, 'dark.accent3', ''),
		get(variants, 'dark.accent4', ''),
		get(variants, 'dark.accent5', ''),
		get(variants, 'dark.accent6', ''),
		get(variants, 'dark.accent7', ''),
		get(variants, 'light.shade0', ''),
		get(variants, 'light.shade1', ''),
		get(variants, 'light.shade2', ''),
		get(variants, 'light.shade3', ''),
		get(variants, 'light.shade4', ''),
		get(variants, 'light.shade5', ''),
		get(variants, 'light.shade6', ''),
		get(variants, 'light.shade7', ''),
		get(variants, 'light.accent0', ''),
		get(variants, 'light.accent1', ''),
		get(variants, 'light.accent2', ''),
		get(variants, 'light.accent3', ''),
		get(variants, 'light.accent4', ''),
		get(variants, 'light.accent5', ''),
		get(variants, 'light.accent6', ''),
		get(variants, 'light.accent7', '')
	]
		.map((v) => v.toLowerCase())
		.join(':');
}

const hashToNameAndIdentifier = new Map<string, [string, BuiltInColorSet | WebColorSet]>([
	...[...allBuiltInColorSets.entries()].map(
		([id, colorSet]): [string, [string, BuiltInColorSet]] => [
			hashVariants(colorSet.variants),
			[colorSet.name, id]
		]
	),
	...[...webColorSets.entries()].map(([id, colorSet]): [string, [string, WebColorSet]] => [
		hashVariants(colorSet.variants),
		[colorSet.name, id]
	])
]);

function stateToIdentifiedColorSet(
	state: PartialDeep<ColorSetState>
): [ColorSet | null, BuiltInColorSet | WebColorSet | null] {
	const variants = stateToVariants(state);
	if (variants === null) return [null, null];
	const hash = hashVariants(variants);
	const values = hashToNameAndIdentifier.get(hash);
	if (values) {
		const [name, identifier] = values;
		return [
			{
				name,
				variants
			},
			identifier
		];
	} else {
		return [
			{
				name: customColorSetName,
				variants
			},
			null
		];
	}
}

export function stateToThemerInputColorSet(state: PartialDeep<ColorSetState>): ColorSet | null {
	const [colorSet] = stateToIdentifiedColorSet(state);
	return colorSet;
}

export function getDefaultedActiveVariant(
	state: PartialDeep<ColorSetState>
): ColorSetState['activeColorSet'] {
	return state.activeColorSet === 'light' ? 'light' : 'dark';
}

export function getOppositeVariant(
	name: ColorSetState['activeColorSet']
): ColorSetState['activeColorSet'] {
	return name === 'light' ? 'dark' : 'light';
}

export function getDefaultedActiveCalculateShades(state: PartialDeep<ColorSetState>): boolean {
	const activeVariant = getDefaultedActiveVariant(state);
	return state.calculateIntermediaryShades?.[activeVariant] ?? true;
}

export function stateToUiColors(state: PartialDeep<ColorSetState>): FullVariant {
	const activeVariant = getDefaultedActiveVariant(state);
	const activeCalculateShades = getDefaultedActiveCalculateShades(state);
	const fallbackBackground = activeVariant === 'dark' ? '#000000' : '#FFFFFF';
	const fallbackForeground = activeVariant === 'dark' ? '#FFFFFF' : '#000000';
	const defaultedVariant = fillOutVariant(
		get(state.colors, activeVariant, {}),
		activeCalculateShades,
		fallbackBackground,
		fallbackForeground
	);
	return prepareVariant(defaultedVariant);
}

export function stateToInputValues(state: PartialDeep<ColorSetState>): FullVariant {
	const activeVariant = getDefaultedActiveVariant(state);
	return {
		shade0: get(state, ['colors', activeVariant, 'shade0'], ''),
		shade1: get(state, ['colors', activeVariant, 'shade1'], ''),
		shade2: get(state, ['colors', activeVariant, 'shade2'], ''),
		shade3: get(state, ['colors', activeVariant, 'shade3'], ''),
		shade4: get(state, ['colors', activeVariant, 'shade4'], ''),
		shade5: get(state, ['colors', activeVariant, 'shade5'], ''),
		shade6: get(state, ['colors', activeVariant, 'shade6'], ''),
		shade7: get(state, ['colors', activeVariant, 'shade7'], ''),
		accent0: get(state, ['colors', activeVariant, 'accent0'], ''),
		accent1: get(state, ['colors', activeVariant, 'accent1'], ''),
		accent2: get(state, ['colors', activeVariant, 'accent2'], ''),
		accent3: get(state, ['colors', activeVariant, 'accent3'], ''),
		accent4: get(state, ['colors', activeVariant, 'accent4'], ''),
		accent5: get(state, ['colors', activeVariant, 'accent5'], ''),
		accent6: get(state, ['colors', activeVariant, 'accent6'], ''),
		accent7: get(state, ['colors', activeVariant, 'accent7'], '')
	};
}

export function colorSetToState(
	colorSet: ColorSet,
	activeVariant: ColorSetState['activeColorSet']
): ColorSetState {
	const inactiveVariant = getOppositeVariant(activeVariant);
	const hasActiveVariant = activeVariant in colorSet.variants;
	return {
		colors: colorSet.variants,
		activeColorSet: hasActiveVariant ? activeVariant : inactiveVariant,
		calculateIntermediaryShades: {
			dark: !('dark' in colorSet.variants && 'shade1' in colorSet.variants.dark),
			light: !('light' in colorSet.variants && 'shade1' in colorSet.variants.light)
		}
	};
}

export function stateToColorSetIdentifier(
	state: PartialDeep<ColorSetState>
): BuiltInColorSet | WebColorSet | null {
	return stateToIdentifiedColorSet(state)[1];
}
