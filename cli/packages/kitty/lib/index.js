const Color = require('color');

const MIX = 0.2;

const brightMix = (colors, key, isDark) =>
  Color(colors[key])
    .mix(isDark ? Color(colors.shade7) : Color(colors.shade0), MIX)
    .hex();

const renderTheme = (colors, isDark) => `
cursor ${colors.accent6}
cursor_text_color background

url_color ${colors.accent5}

active_border_color ${colors.accent3}
inactive_border_color ${colors.shade1}
bell_border_color ${colors.accent1}

active_tab_foreground ${colors.shade6}
active_tab_background ${colors.shade0}

inactive_tab_foreground ${colors.shade3}
inactive_tab_background ${colors.shade1}

foreground ${colors.shade6}
background ${colors.shade0}

selection_foreground ${colors.shade0}
selection_background ${colors.accent5}

color0 ${isDark ? colors.shade2 : colors.shade6}
color8 ${isDark ? colors.shade3 : colors.shade5}

color1 ${colors.accent0}
color9 ${brightMix(colors, 'accent0', isDark)}

color2 ${colors.accent3}
color10 ${brightMix(colors, 'accent3', isDark)}

color3 ${colors.accent2}
color11 ${brightMix(colors, 'accent2', isDark)}

color4 ${colors.accent5}
color12 ${brightMix(colors, 'accent5', isDark)}

color5 ${colors.accent7}
color13 ${brightMix(colors, 'accent7', isDark)}

color6 ${colors.accent4}
color14 ${brightMix(colors, 'accent4', isDark)}

color7 ${isDark ? colors.shade6 : colors.shade2}
color15 ${isDark ? colors.shade7 : colors.shade1}

mark1_foreground ${colors.shade0}
mark1_background ${colors.accent4}

mark2_foreground ${colors.shade0}
mark2_background ${colors.accent7}

mark3_foreground ${colors.shade0}
mark3_background ${colors.accent2}
`;

const render = colors => Object.entries(colors)
  .map(async ([name, colors])=> ({
    name: `themer-${name}.conf`,
    contents: Buffer.from(renderTheme(colors, name === 'dark'), 'utf8'),
  }));

const renderInstructions = paths => `
In the kitty configuration file (usually \`~/.config/kitty/kitty.conf\`), \`include\` the generated theme file:

${paths.map(p => `    include ${p}`).join('\n')}
`;

module.exports = {
  render,
  renderInstructions,
};
