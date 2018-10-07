const one = require('onecolor'),
  colorSteps = require('color-steps');

const minimumKeys = [
  'shade0',
  'shade7',
  'accent0',
  'accent1',
  'accent2',
  'accent3',
  'accent4',
  'accent5',
  'accent6',
  'accent7',
];

const fillableKeys = [
  'shade1',
  'shade2',
  'shade3',
  'shade4',
  'shade5',
  'shade6',
];

const allKeys = minimumKeys.concat(fillableKeys);

const mapValues = (obj, fn) => Object.entries(obj)
  .reduce(
    (acc, [key, value]) => ({ ...acc, [key]: fn(value, key) }),
    {},
  );

const convertPaletteToHex = palette => mapValues(palette, color => one(color).hex());

const preparePalette = (palette, name, message) => {
  const keys = Object.keys(palette);
  if (allKeys.every(requiredKey => keys.includes(requiredKey))) {
    return convertPaletteToHex(palette);
  }
  if (minimumKeys.every(requiredKey => keys.includes(requiredKey))) {
    if(fillableKeys.every(prohibitedKey => !keys.includes(prohibitedKey))) {
      message(`calculating shades 1 through 6 for ${name} palette...`);
      const filledPalette = colorSteps(palette.shade0, palette.shade7, fillableKeys.length)
        .reduce(
          (newPalette, calculatedShade, i) => ({
            ...newPalette,
            [fillableKeys[i]]: calculatedShade,
          }),
          palette,
        );
      return convertPaletteToHex(filledPalette);
    }
  }
  throw new Error('Some colors were missing from the provided color set.');
};

module.exports = (colors, message) => {
  message('validating colors...');
  if (!colors.light && !colors.dark) {
    throw new Error('Color set must define either a dark or light palette (or both).');
  }
  return mapValues(colors, (palette, paletteName) => preparePalette(palette, paletteName, message));
};
