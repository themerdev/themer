const path = require('path'),
  Color = require('color');

const MIX = 0.2;

const brightMix = (colors, key, isDark) =>
  Color(colors[key])
    .mix(isDark ? Color(colors.shade7) : Color(colors.shade0), MIX)
    .hex();

const renderTheme = ([firstLetter, ...letters], colors, isDark) =>
  JSON.stringify(
    {
      name: `Themer ${[firstLetter.toUpperCase(), ...letters].join('')}`,

      background: colors.shade0,
      foreground: colors.shade6,

      cursorColor: colors.accent6,
      selectionBackground: colors.accent5,

      black: isDark ? colors.shade2 : colors.shade6,
      brightBlack: isDark ? colors.shade3 : colors.shade5,

      red: colors.accent0,
      brightRed: brightMix(colors, 'accent0', isDark),

      green: colors.accent3,
      brightGreen: brightMix(colors, 'accent3', isDark),

      yellow: colors.accent2,
      brightYellow: brightMix(colors, 'accent2', isDark),

      blue: colors.accent5,
      brightBlue: brightMix(colors, 'accent5', isDark),

      purple: colors.accent6,
      brightPurple: brightMix(colors, 'accent6', isDark),

      cyan: colors.accent4,
      brightCyan: brightMix(colors, 'accent4', isDark),

      white: isDark ? colors.shade6 : colors.shade2,
      brightWhite: isDark ? colors.shade7 : colors.shade1,
    },
    null,
    2,
  );

const render = (colors) =>
  Object.entries(colors).map(async ([name, colors]) => ({
    name: `themer-${name}.json`,
    contents: Buffer.from(renderTheme(name, colors, name === 'dark')),
  }));

const pathsToThemeNames = (paths) =>
  paths
    .map((p) => path.basename(p, '.json'))
    .map((basename) =>
      basename
        .split('-')
        .map(([firstLetter, ...tail]) =>
          [firstLetter.toUpperCase(), ...tail].join(''),
        )
        .join(' '),
    );

const renderInstructions = (paths) => `
1. Open the Windows Terminal settings (\`Ctrl\`-\`,\`)
2. Add the contents of ${paths
  .map((p) => `'${p}'`)
  .join(' and ')} to the \`schemes\` array in \`profile.json\`
3. Set the \`colorScheme\` property to the desired scheme name (${pathsToThemeNames(
  paths,
)
  .map((name) => `"${name}"`)
  .join(' or ')}) in the profiles section of \`profile.json\`, e.g.:

    "profiles": {
      "defaults": {
        "colorScheme": "${pathsToThemeNames(paths)[0]}"
      }
    }
`;

module.exports = {
  render,
  renderInstructions,
};
