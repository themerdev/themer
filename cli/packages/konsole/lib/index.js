const Color = require('color');

const MIX = 0.2;

const format = (color) => color.rgb().round().array().join(',');

const standard = (color) => format(Color(color));

const brightMix = (color, colors, isDark) =>
  format(
    Color(color).mix(isDark ? Color(colors.shade7) : Color(colors.shade0), MIX),
  );

const renderTheme = (colors, isDark) => `
[Color0]
Color=${standard(isDark ? colors.shade2 : colors.shade6)}

[Color0Intense]
Color=${standard(isDark ? colors.shade3 : colors.shade5)}

[Color1]
Color=${standard(colors.accent0)}

[Color1Intense]
Color=${brightMix(colors.accent0, colors, isDark)}

[Color2]
Color=${standard(colors.accent3)}

[Color2Intense]
Color=${brightMix(colors.accent3, colors, isDark)}

[Color3]
Color=${standard(colors.accent2)}

[Color3Intense]
Color=${brightMix(colors.accent2, colors, isDark)}

[Color4]
Color=${standard(colors.accent5)}

[Color4Intense]
Color=${brightMix(colors.accent5, colors, isDark)}

[Color5]
Color=${standard(colors.accent7)}

[Color5Intense]
Color=${brightMix(colors.accent7, colors, isDark)}

[Color6]
Color=${standard(colors.accent4)}

[Color6Intense]
Color=${brightMix(colors.accent4, colors, isDark)}

[Color7]
Color=${standard(isDark ? colors.shade6 : colors.shade2)}

[Color7Intense]
Color=${standard(isDark ? colors.shade7 : colors.shade1)}

[Background]
Color=${standard(colors.shade0)}

[BackgroundIntense]
Color=${standard(colors.shade1)}

[Foreground]
Color=${standard(colors.shade6)}

[ForegroundIntense]
Color=${standard(colors.shade7)}

[General]
Description=Themer ${isDark ? 'Dark' : 'Light'}
Opacity=1
`;

const render = (colors) =>
  Object.entries(colors).map(async ([name, colors]) => ({
    name: `themer-${name}.colorscheme`,
    contents: Buffer.from(renderTheme(colors, name === 'dark'), 'utf8'),
  }));

const renderInstructions = (paths) => `
Copy (or symlink) the generated ${
  paths.length > 0 ? 'files' : 'file'
} to \`~/.local/share/konsole/\`:

    ${paths.map((p) => `cp '${p}' ~/.local/share/konsole/`).join('\n    ')}

Then choose the desired theme in Konsole > Settings > Edit Current Profile > Appearance.
`;

module.exports = {
  render,
  renderInstructions,
};
