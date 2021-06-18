const Color = require('color');

const MIX = 0.2;

const brightMix = (colors, key, isDark) =>
  Color(colors[key])
    .mix(isDark ? Color(colors.shade7) : Color(colors.shade0), MIX)
    .hex();

const format = (hex) =>
  `rgb:${Color(hex)
    .rgb()
    .array()
    .map((n) => n.toString('16'))
    .join('/')}`;

const renderTheme = (colors, isDark) => `
! general
*background: ${format(colors.shade0)}
*foreground: ${format(colors.shade6)}

! blacks
*color0: ${format(isDark ? colors.shade2 : colors.shade6)}
*color8: ${format(isDark ? colors.shade3 : colors.shade5)}

! reds
*color1: ${format(colors.accent0)}
*color9: ${format(brightMix(colors, 'accent0', isDark))}

! greens
*color2: ${format(colors.accent3)}
*color10: ${format(brightMix(colors, 'accent3', isDark))}

! yellows
*color3: ${format(colors.accent2)}
*color11: ${format(brightMix(colors, 'accent2', isDark))}

! blues
*color4: ${format(colors.accent5)}
*color12: ${format(brightMix(colors, 'accent5', isDark))}

! magentas
*color5: ${format(colors.accent7)}
*color13: ${format(brightMix(colors, 'accent7', isDark))}

! cyans
*color6: ${format(colors.accent4)}
*color14: ${format(brightMix(colors, 'accent4', isDark))}

! whites
*color7: ${format(isDark ? colors.shade6 : colors.shade2)}
*color15: ${format(isDark ? colors.shade7 : colors.shade1)}
`;

const render = (colors) =>
  Object.entries(colors).map(async ([name, colors]) => ({
    name: `themer-${name}.Xresources`,
    contents: Buffer.from(renderTheme(colors, name === 'dark'), 'utf8'),
  }));

const renderInstructions = (paths) => `
Copy the contents of ${paths
  .map((p) => `'${p}'`)
  .join(
    ' or ',
  )} into your .Xresources configuration file, or load it with \`xrdb\`.
`;

module.exports = {
  render,
  renderInstructions,
};
