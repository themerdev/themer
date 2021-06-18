const path = require('path');

const render = (colors) => {
  return Object.entries(colors).map(([[firstLetter, ...letters], colorSet]) => {
    const themeName = [firstLetter.toUpperCase(), ...letters].join('');
    return Promise.resolve({
      name: `themer-keypirinha-${[firstLetter, ...letters].join('')}.ini`,
      contents: Buffer.from(
        `
[theme/Themer${themeName}Colors]
color_background = ${colorSet.shade0}
color_foreground = ${colorSet.shade7}
color_faded = ${colorSet.shade5}
color_accent = ${colorSet.accent6}
color_warn = ${colorSet.accent0}

color_title = ${colorSet.shade7}
color_status = ${colorSet.accent5}

color_textbox_back = ${colorSet.shade0}

color_listitem_back = ${colorSet.shade0}
color_listitem_title = ${colorSet.shade7}
color_listitem_desc = ${colorSet.accent5}
color_listitem_tips = ${colorSet.accent5}

color_listitem_selected_back = ${colorSet.shade1}
color_listitem_selected_title = ${colorSet.accent7}
color_listitem_selected_desc = ${colorSet.shade7}
color_listitem_selected_tips = ${colorSet.accent7}
      `.trim(),
        'utf-8',
      ),
    });
  });
};

const pathsToThemeNames = (paths) =>
  paths
    .map((p) => path.basename(p, '.ini'))
    .map((basename) => {
      [firstLetter, ...tail] = basename.split('-').slice(-1)[0];
      return `Themer${[firstLetter.toUpperCase(), ...tail].join('')}Colors`;
    });

const renderInstructions = (paths) => `
1. Open the Keypirinha Configuration:
    - Select **Keypirinha: Configure** item from the Keypirinha LaunchBox
    - Right-Click **Keypirinha** -> **Configure Keypirinha**
2. Add the contents of ${paths
  .map((p) => `'${p}'`)
  .join(' and ')} to the \`Keypirinha.ini\` file.
3. Set/Append the desired theme name (${pathsToThemeNames(paths)
  .map((name) => `"${name}"`)
  .join(
    ' or ',
  )}) to the \`theme\` property under the \`[gui]\` section of the \`Keypirinha.ini\` file.
`;

module.exports = {
  render,
  renderInstructions,
};
