const path = require('path');
const {capitalize, mapValues} = require('lodash');
const Color = require('color');
const {version} = require('../package.json');

const rgbColorSet = colors =>
  mapValues(colors, hex => Color(hex).rgb().array());

const hslColorSet = colors =>
  mapValues(colors, hex => Color(hex).hsl().array());

const themeName = colorSet => `Themer ${colorSet.name}`;
const themeDirectory = themeName;

const renderManifest = (colorSet) => {
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
              bookmark_text: colorSet.rgbColors.shade7,
              frame: colorSet.isDark ? colorSet.rgbColors.shade0 : colorSet.rgbColors.shade1,
              ntp_background: colorSet.isDark ? colorSet.rgbColors.shade1 : colorSet.rgbColors.shade0,
              ntp_text: colorSet.rgbColors.shade7,
              tab_background_text: colorSet.rgbColors.shade7,
              tab_background_text_inactive: colorSet.rgbColors.shade7,
              tab_background_text_incognito: colorSet.rgbColors.shade7,
              tab_background_text_incognito_inactive: colorSet.rgbColors.shade7,
              tab_text: colorSet.rgbColors.shade7,
              toolbar: colorSet.isDark ? colorSet.rgbColors.shade1 : colorSet.rgbColors.shade0,
            },
            tints: {
              buttons: [colorSet.hslColors.accent5[0] / 360, 0.5, 0.5],
              frame_inactive: [-1, -1, -1],
              frame_incognito: [colorSet.hslColors.accent6[0] / 360, 1.0, colorSet.isDark ? 0.55 : 0.45],
              frame_incognito_inactive: [colorSet.hslColors.accent6[0] / 360, 1.0, colorSet.isDark ? 0.55 : 0.45],
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
    rgbColors: rgbColorSet(colors[key]),
    hslColors: hslColorSet(colors[key]),
    isDark: key === 'dark',
  }));
  return colorSets.map(colorSet => renderManifest(colorSet));
};

const renderInstructions = paths => {
  const directories = new Set(paths.map(path.dirname));
  return `
1. Launch Chrome and go to \`chrome://extensions\`.
2. Check the "Developer mode" checkbox at the top.
3. Click the "Load unpacked extension..." button and choose the desired theme directory (${[...directories].map(dir => `\`${dir}\``).join(' or ')}).

(To reset or remove the theme, visit \`chrome://settings\` and click "Reset to Default" in the "Appearance" section.)
  `;
}

module.exports = {render, renderInstructions};
