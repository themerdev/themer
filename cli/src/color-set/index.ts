import Color from 'color';
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

function prepareVariant(variant: Variant): FullVariant {
  if ('shade1' in variant) {
    return variant;
  }
  const start = new Color(variant.shade0);
  const end = new Color(variant.shade7);
  const rDelta = (end.red() - start.red()) / 7;
  const gDelta = (end.green() - start.green()) / 7;
  const bDelta = (end.blue() - start.blue()) / 7;
  return {
    ...variant,
    shade1: new Color({
      r: start.red() + rDelta * 1,
      g: start.green() + gDelta * 1,
      b: start.blue() + bDelta * 1,
    }).hex(),
    shade2: new Color({
      r: start.red() + rDelta * 2,
      g: start.green() + gDelta * 2,
      b: start.blue() + bDelta * 2,
    }).hex(),
    shade3: new Color({
      r: start.red() + rDelta * 3,
      g: start.green() + gDelta * 3,
      b: start.blue() + bDelta * 3,
    }).hex(),
    shade4: new Color({
      r: start.red() + rDelta * 4,
      g: start.green() + gDelta * 4,
      b: start.blue() + bDelta * 4,
    }).hex(),
    shade5: new Color({
      r: start.red() + rDelta * 5,
      g: start.green() + gDelta * 5,
      b: start.blue() + bDelta * 5,
    }).hex(),
    shade6: new Color({
      r: start.red() + rDelta * 6,
      g: start.green() + gDelta * 6,
      b: start.blue() + bDelta * 6,
    }).hex(),
  };
}

export function brightMix(
  colors: FullVariant,
  key: keyof FullVariant,
  isDark: boolean,
): string {
  return Color(colors[key])
    .mix(isDark ? Color(colors.shade7) : Color(colors.shade0), 0.2)
    .hex();
}
