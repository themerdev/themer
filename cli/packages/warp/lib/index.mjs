import path from 'node:path';

const WARP_TEMPLATE = `accent: "%ACCENT%"
background: "%BACKGROUND%"
foreground: "%FOREGROUND%"
details: "%DETAILS%"
terminal_colors:
  normal:
    black: "%N_BLACK%"
    red: "%N_RED%"
    green: "%N_GREEN%"
    yellow: "%N_YELLOW%"
    blue: "%N_BLUE%"
    magenta: "%N_MAGENTA%"
    cyan: "%N_CYAN%"
    white: "%N_WHITE%"
  bright:
    black: "%B_BLACK%"
    red: "%B_RED%"
    green: "%B_GREEN%"
    yellow: "%B_YELLOW%"
    blue: "%B_BLUE%"
    magenta: "%B_MAGENTA%"
    cyan: "%B_CYAN%"
    white: "%B_WHITE%"
`;

export const render = (colors) => {
  return [
    { name: 'dark', colors: colors.dark },
    { name: 'light', colors: colors.light },
  ]
    .filter((colorSet) => !!colorSet.colors)
    .map((colorSet) => {
      return Promise.resolve({
        name: `themer_${colorSet.name}.yaml`,
        contents: Buffer.from(
          WARP_TEMPLATE.replace('%ACCENT%', colorSet.colors.accent6)
            .replace('%BACKGROUND%', colorSet.colors.shade0)
            .replace('%FOREGROUND%', colorSet.colors.shade7)
            .replace('%DETAILS%', `${colorSet.name}er`)
            .replace(
              '%N_BLACK%',
              colorSet.name === 'dark'
                ? colorSet.colors.shade0
                : colorSet.colors.shade7,
            )
            .replace('%N_RED%', colorSet.colors.accent0)
            .replace('%N_GREEN%', colorSet.colors.accent3)
            .replace('%N_YELLOW%', colorSet.colors.accent2)
            .replace('%N_BLUE%', colorSet.colors.accent5)
            .replace('%N_MAGENTA%', colorSet.colors.accent7)
            .replace('%N_CYAN%', colorSet.colors.accent4)
            .replace(
              '%N_WHITE%',
              colorSet.name === 'dark'
                ? colorSet.colors.shade6
                : colorSet.colors.shade1,
            )
            .replace(
              '%B_BLACK%',
              colorSet.name === 'dark'
                ? colorSet.colors.shade1
                : colorSet.colors.shade6,
            )
            .replace('%B_RED%', colorSet.colors.accent1)
            .replace('%B_GREEN%', colorSet.colors.accent4)
            .replace('%B_YELLOW%', colorSet.colors.accent2)
            .replace('%B_BLUE%', colorSet.colors.accent5)
            .replace('%B_MAGENTA%', colorSet.colors.accent7)
            .replace('%B_CYAN%', colorSet.colors.accent4)
            .replace(
              '%B_WHITE%',
              colorSet.name === 'dark'
                ? colorSet.colors.shade7
                : colorSet.colors.shade0,
            ),
        ),
      });
    });
};

export const renderInstructions = (paths) => {
  const files = paths.map((p) => path.basename(p));
  const themeNames = [
    files.includes('themer_dark.yaml') && '"Themer Dark"',
    files.includes('themer_light.yaml') && '"Themer Light"',
  ].filter(Boolean);
  return `
1. Copy your files (${paths
    .map((p) => `\`${p}\``)
    .join(' and ')}) to \`~/.warp/themes/\`
2. Launch Warp
3. Press \`command\`-\`P\` to open the Command Palette
4. Search and select \`Open Theme Picker\`
5. Search for ${themeNames.join(' or ')} and select it
6. Enjoy your new theme! ✨
`;
};
