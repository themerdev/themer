const Color = require('color');

const MIX = 0.2;

const brightMix = (colors, key, isDark) =>
  Color(colors[key])
    .mix(isDark ? Color(colors.shade7) : Color(colors.shade0), MIX)
    .hex();

const renderTheme = (colors, isDark) => `
! general
*background: ${colors.shade0}
*foreground: ${colors.shade6}
*cursor: ${colors.accent6}

! blacks
*color0: ${isDark ? colors.shade2 : colors.shade6}
*color8: ${isDark ? colors.shade3 : colors.shade5}

! reds
*color1: ${colors.accent0}
*color9: ${brightMix(colors, 'accent0', isDark)}

! greens
*color2: ${colors.accent3}
*color10: ${brightMix(colors, 'accent3', isDark)}

! yellows
*color3: ${colors.accent2}
*color11: ${brightMix(colors, 'accent2', isDark)}

! blues
*color4: ${colors.accent5}
*color12: ${brightMix(colors, 'accent5', isDark)}

! magentas
*color5: ${colors.accent7}
*color13: ${brightMix(colors, 'accent7', isDark)}

! cyans
*color6: ${colors.accent4}
*color14: ${brightMix(colors, 'accent4', isDark)}

! whites
*color7: ${isDark ? colors.shade6 : colors.shade2}
*color15: ${isDark ? colors.shade7 : colors.shade1}
`;

const render = colors => Object.entries(colors)
  .map(async ([name, colors]) => ({
    name: `themer-${name}.Xresources`,
    contents: Buffer.from(renderTheme(colors, name === 'dark'), 'utf8'),
  }));

const renderInstructions = paths => `
Copy the contents of ${paths.map(p => `'${p}'`).join(' or ')} into your .xresources configuration file.
`;

module.exports = {
  render,
  renderInstructions,
};
