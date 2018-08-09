const path = require('path');
const {capitalize, mapValues} = require('lodash');
const Color = require('color');
const {version} = require('./package.json');

const formatColorSet = colors =>
  mapValues(colors, hex => Color(hex).rgb().array());

const themeName = colorSet => `Themer ${colorSet.name}`;
const themeDirectory = themeName;

const renderManifest = colorSet => {
  const {
    shade0,
    shade1,
    shade2,
    shade3,
    shade4,
    shade5,
    shade6,
    shade7,
  } = colorSet.colors;
  return Promise.resolve({
    name: path.join(themeDirectory(colorSet), 'manifest.json'),
    contents: Buffer.from(
      JSON.stringify(
        {
          version,
          manifest_version: 2,
          name: themeName(colorSet),
          theme: {
            colors: {
              frame: colorSet.isDark ? shade0 : shade1,
              frame_inactive: colorSet.isDark ? shade1 : shade0,
              frame_incognito: colorSet.isDark ? shade3 : shade4,
              frame_incognito_inactive: colorSet.isDark ? shade4 : shade3,
              toolbar: colorSet.isDark ? shade1 : shade0,
              tab_text: shade7,
              tab_background_text: shade5,
              bookmark_text: shade6,
              ntp_background: shade0,
              ntp_text: shade6,
              ntp_section: shade2,
              ntp_section_text: shade7,
            },
          },
        },
        null,
        2
      ),
      'utf8'
    ),
  });
};

const render = colors => {
  const colorSets = Object.keys(colors).map(key => ({
    name: capitalize(key),
    colors: formatColorSet(colors[key]),
    isDark: key === 'dark',
  }));
  return colorSets.map(colorSet => renderManifest(colorSet));
};

module.exports = {render};
