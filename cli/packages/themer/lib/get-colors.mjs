import { readFile } from 'node:fs/promises';
import { load } from 'js-yaml';
import Color from 'color';

const colorMap = {
  base00: 'shade0',
  base01: 'shade1',
  base02: 'shade2',
  base03: 'shade3',
  base04: 'shade4',
  base05: 'shade5',
  base06: 'shade6',
  base07: 'shade7',
  base08: 'accent0',
  base09: 'accent1',
  base0A: 'accent2',
  base0B: 'accent3',
  base0C: 'accent4',
  base0D: 'accent5',
  base0E: 'accent6',
  base0F: 'accent7',
};

export default async function getColors(resolvedPathToColors) {
  if (/\.ya?ml$/.test(resolvedPathToColors)) {
    console.log('parsing colors as base16 scheme...');
    const base16 = load(await readFile(resolvedPathToColors, 'utf8'));
    const transformed = Object.entries(base16).reduce(
      (colors, [key, value]) => {
        if (key in colorMap) {
          return {
            ...colors,
            [colorMap[key]]: Color('#' + value).hex(),
          };
        } else {
          return colors;
        }
      },
      {},
    );
    const isLight =
      Color('#' + base16.base00).luminosity() >
      Color('#' + base16.base07).luminosity();
    return {
      [isLight ? 'light' : 'dark']: transformed,
    };
  } else {
    return (await import(resolvedPathToColors)).colors;
  }
}
