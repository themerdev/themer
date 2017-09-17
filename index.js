const path = require('path');
const {capitalize, flattenDeep, mapValues} = require('lodash');
const Color = require('color');
const {version} = require('./package.json');
const {colorPixel} = require('./image');

const formatColorSet = colors => mapValues(colors, hex => Color(hex));

const themeName = colorSet => `Themer ${colorSet.name}`;
const themeDirectory = themeName;

const images = {
  theme_frame: 'frame.png',
  theme_frame_inactive: 'frame-inactive.png',
  theme_frame_incognito: 'frame-incognito.png',
  theme_frame_incognito_inactive: 'frame-incognito-inactive.png',
  theme_toolbar: 'toolbar.png',
  theme_tab_background: 'tab-background.png',
  theme_tab_background_incognito: 'tab-background-incognito.png',
};

const renderManifest = colorSet =>
  Promise.resolve({
    name: path.join(themeDirectory(colorSet), 'manifest.json'),
    contents: Buffer.from(
      JSON.stringify(
        {
          version,
          manifest_version: 2,
          name: themeName(colorSet),
          theme: {
            images,
            colors: {},
            tints: {},
          },
        },
        null,
        2
      ),
      'utf8'
    ),
  });

const renderImages = colorSet => [
  colorPixel(colorSet.colors.shade0).then(pixel => ({
    name: path.join(themeDirectory(colorSet), images.theme_frame),
    contents: pixel,
  })),
];

const render = colors => {
  const colorSets = Object.keys(colors).map(key => ({
    name: capitalize(key),
    colors: formatColorSet(colors[key]),
  }));
  return flattenDeep(
    colorSets.map(colorSet => [
      renderManifest(colorSet),
      renderImages(colorSet),
    ])
  );
};

module.exports = {render};
