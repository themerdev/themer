const fs = require('fs'),
  { promisify } = require('util'),
  readFile = promisify(fs.readFile),
  { safeLoad } = require('js-yaml'),
  one = require('onecolor');

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

module.exports = async function getColors(resolvedPathToColors) {
  if (/\.ya?ml$/.test(resolvedPathToColors)) {
    console.log('parsing colors as base16 scheme...');
    const base16 = safeLoad(await readFile(resolvedPathToColors, 'utf8'));
    const transformed = Object.entries(base16).reduce((colors, [key, value]) => {
      if (key in colorMap) {
        return {
          ...colors,
          [colorMap[key]]: one(value).hex(),
        };
      } else {
        return colors;
      }
    }, {});
    const isLight = one(base16.base00).lightness() > one(base16.base07).lightness();
    return {
      [isLight ? 'light' : 'dark']: transformed,
    };
  } else {
    return require(resolvedPathToColors).colors;
  }
};
