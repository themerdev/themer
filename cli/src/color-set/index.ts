import Color from 'colorjs.io';
import capitalize from 'lodash/capitalize.js';
import camelCase from 'lodash/camelCase.js';
import kebabCase from 'lodash/kebabCase.js';
import snakeCase from 'lodash/snakeCase.js';
import upperFirst from 'lodash/upperFirst.js';

type FullShades = {
  shade0: string;
  shade1: string;
  shade2: string;
  shade3: string;
  shade4: string;
  shade5: string;
  shade6: string;
  shade7: string;
};

type PartialShades = {
  shade0: string;
  shade7: string;
};

export type Accents = {
  accent0: string;
  accent1: string;
  accent2: string;
  accent3: string;
  accent4: string;
  accent5: string;
  accent6: string;
  accent7: string;
};

type LightVariantBase<T extends Variant> = { light: T };
type DarkVariantBase<T extends Variant> = { dark: T };
type VariantBase<T extends Variant> =
  | LightVariantBase<T>
  | DarkVariantBase<T>
  | (LightVariantBase<T> & DarkVariantBase<T>);

type ColorSetBase<T extends Variant> = {
  name: string;
  variants: VariantBase<T>;
};

type PartialVariant = PartialShades & Accents;
export type FullVariant = FullShades & Accents;
export type Variant = PartialVariant | FullVariant;

export type PartialColorSet = ColorSetBase<PartialVariant>;
export type FullColorSet = ColorSetBase<FullVariant>;
export type ColorSet = PartialColorSet | FullColorSet;

export type AnnotatedVariant = {
  name: string;
  colors: FullVariant;
  isDark: boolean;
  title: {
    human: string;
    kebab: string;
    snake: string;
    upperCamel: string;
  };
};

export type AnnotatedColorSet = FullColorSet & {
  title: {
    human: string;
    kebab: string;
    snake: string;
    upperCamel: string;
  };
};

export function colorSetToVariants(
  colorSet: AnnotatedColorSet,
): AnnotatedVariant[] {
  return Object.entries(colorSet.variants).map(([name, colors]) => ({
    name,
    colors,
    isDark: name === 'dark',
    title: {
      human: `${colorSet.title.human} ${capitalize(name)}`,
      kebab: `${colorSet.title.kebab}-${name}`,
      snake: `${colorSet.title.snake}_${name}`,
      upperCamel: `${colorSet.title.upperCamel}${capitalize(name)}`,
    },
  }));
}

export function prepareColorSet(colorSet: ColorSet): AnnotatedColorSet {
  const variants: FullColorSet['variants'] =
    'dark' in colorSet.variants && 'light' in colorSet.variants
      ? {
          dark: prepareVariant(colorSet.variants.dark),
          light: prepareVariant(colorSet.variants.light),
        }
      : 'dark' in colorSet.variants
      ? { dark: prepareVariant(colorSet.variants.dark) }
      : { light: prepareVariant(colorSet.variants.light) };
  return {
    ...colorSet,
    variants,
    title: {
      human: `Themer ${colorSet.name}`,
      kebab: kebabCase(`themer-${colorSet.name}`),
      snake: snakeCase(`themer_${colorSet.name}`),
      upperCamel: upperFirst(camelCase(`Themer ${colorSet.name}`)),
    },
  };
}

export function prepareVariant(variant: Variant): FullVariant {
  if ('shade1' in variant) {
    return variant;
  }
  const start = new Color(variant.shade0);
  const end = new Color(variant.shade7);
  const shades = Color.steps(start, end, {
    steps: 8,
    space: 'oklch',
    outputSpace: 'srgb',
  }).map((c) => new Color(c).toString({ format: 'hex', collapse: false }));
  const [_1, shade1, shade2, shade3, shade4, shade5, shade6, _2] = shades;
  if (!shade1 || !shade2 || !shade3 || !shade4 || !shade5 || !shade6)
    throw new Error();
  return {
    ...variant,
    shade1,
    shade2,
    shade3,
    shade4,
    shade5,
    shade6,
  };
}

export function mix(color1: string, color2: string, p: number): string {
  return new Color(Color.mix(new Color(color1), new Color(color2), p)).toString(
    { format: 'hex', collapse: false },
  );
}

export function brightMix(
  colors: FullVariant,
  key: keyof FullVariant,
  isDark: boolean,
): string {
  return mix(colors[key], isDark ? colors.shade7 : colors.shade0, 0.2);
}

export function dimMix(
  colors: FullVariant,
  key: keyof FullVariant,
  isDark: boolean,
) {
  return mix(colors[key], isDark ? colors.shade0 : colors.shade7, 0.2);
}
