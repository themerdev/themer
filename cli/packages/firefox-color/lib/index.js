const Color = require('color');
const codec = require('json-url')('lzma');

const urlFile = (url) =>
  `
[InternetShortcut]
URL=${url}
`.trim();

const render = (colors) => {
  return Object.entries(colors).map(async ([key, colors]) => {
    const rgbColors = Object.fromEntries(
      Object.entries(colors).map(([key, color]) => [
        key,
        Color(color).object(),
      ]),
    );
    const isDark = key === 'dark';
    const theme = await codec.compress({
      colors: {
        toolbar: isDark ? rgbColors.shade1 : rgbColors.shade0,
        toolbar_text: rgbColors.shade7,
        frame: isDark ? rgbColors.shade0 : rgbColors.shade1,
        tab_background_text: rgbColors.shade7,
        toolbar_field: isDark ? rgbColors.shade1 : rgbColors.shade0,
        toolbar_field_text: rgbColors.shade7,
        tab_line: rgbColors.shade4,
        popup: isDark ? rgbColors.shade1 : rgbColors.shade0,
        popup_text: rgbColors.shade7,
      },
      title: `Themer ${key}`,
    });
    const url = `https://color.firefox.com/?theme=${theme}`;
    return {
      name: `themer-${key}.url`,
      contents: Buffer.from(urlFile(url), 'utf8'),
    };
  });
};

const renderInstructions = (paths) => {
  return `
The Firefox Color add-on allows for simple theming without the need for a developer account or package review process by Mozilla.

1. Install the [Firefox Color add-on](https://addons.mozilla.org/en-US/firefox/addon/firefox-color/).
2. Open ${paths.map((p) => `'${p}'`).join(' or ')} directly with Firefox.
3. Click "Yep" when prompted to apply the custom theme.

For a more fully featured Firefox theme, see themer's Firefox theme add-on generator.
  `;
};

module.exports = {
  render,
  renderInstructions,
};
