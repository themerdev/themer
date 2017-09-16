const path = require('path');
const {mapValues} = require('lodash');
const Color = require('color');
const {version} = require('./package.json');

const formatColorSet = colors =>
  mapValues(colors, hex => Color(hex).rgb().array());

const render = colors => {
  const colorSets = [
    {name: 'Dark', colors: colors.dark && formatColorSet(colors.dark)},
    {name: 'Light', colors: colors.light && formatColorSet(colors.light)},
  ].filter(colorSet => !!colorSet.colors);
  return colorSets.map(colorSet => {
    const {
      shade0,
      shade1,
      shade2,
      shade3,
      shade4,
      shade5,
      shade6,
      shade7,
      accent0,
      accent1,
      accent2,
      accent3,
      accent4,
      accent5,
      accent6,
      accent7,
    } = colorSet.colors;
    const manifest = {
      manifest_version: 2,
      version,
      name: `Themer ${colorSet.name}`,
      theme: {
        colors: {
          frame: shade0,
          frame_inactive: shade1,
          frame_incognito: shade2,
          frame_incognito_inactive: shade3,
          toolbar: shade1,
          tab_text: shade7,
          tab_background_text: shade5,
          bookmark_text: shade6,
        },
      },
    };
    return Promise.resolve({
      name: path.join(`Themer ${colorSet.name}`, 'manifest.json'),
      contents: Buffer.from(JSON.stringify(manifest, null, 2), 'utf8'),
    });
  });
};

module.exports = {render};
