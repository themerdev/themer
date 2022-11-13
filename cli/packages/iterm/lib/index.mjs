import Color from 'color';

export const render = (colors) => {
  return [
    { name: 'dark', colors: colors.dark },
    { name: 'light', colors: colors.light },
  ]
    .filter((colorSet) => !!colorSet.colors)
    .map((colorSet) => {
      const colorMap = {
        ansi0:
          colorSet.name === 'dark'
            ? colorSet.colors.shade0
            : colorSet.colors.shade7,
        ansi1: colorSet.colors.accent0,
        ansi2: colorSet.colors.accent3,
        ansi3: colorSet.colors.accent2,
        ansi4: colorSet.colors.accent5,
        ansi5: colorSet.colors.accent7,
        ansi6: colorSet.colors.accent4,
        ansi7:
          colorSet.name === 'dark'
            ? colorSet.colors.shade6
            : colorSet.colors.shade1,
        ansi8:
          colorSet.name === 'dark'
            ? colorSet.colors.shade1
            : colorSet.colors.shade6,
        ansi9: colorSet.colors.accent1,
        ansi10: colorSet.colors.accent4,
        ansi11: colorSet.colors.accent2,
        ansi12: colorSet.colors.accent5,
        ansi13: colorSet.colors.accent7,
        ansi14: colorSet.colors.accent4,
        ansi15:
          colorSet.name === 'dark'
            ? colorSet.colors.shade7
            : colorSet.colors.shade0,
        background: colorSet.colors.shade0,
        foreground: colorSet.colors.shade7,
        cursor: colorSet.colors.accent6,
        cursorText: colorSet.colors.shade7,
        selection: colorSet.colors.accent7,
        selectionText: colorSet.colors.shade7,
        bold: colorSet.colors.shade6,
      };
      const colorEntry = (title, color) => `
      <key>${title}</key>
      <dict>
        <key>Color Space</key>
        <string>sRGB</string>
        <key>Red Component</key>
        <real>${color.red() / 255}</real>
        <key>Green Component</key>
        <real>${color.green() / 255}</real>
        <key>Blue Component</key>
        <real>${color.blue() / 255}</real>
      </dict>
      `;
      const template = `
      <?xml version="1.0" encoding="UTF-8"?>
      <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
      <plist version="1.0">
        <dict>
          ${colorEntry('Ansi 0 Color', Color(colorMap.ansi0))}
          ${colorEntry('Ansi 1 Color', Color(colorMap.ansi1))}
          ${colorEntry('Ansi 2 Color', Color(colorMap.ansi2))}
          ${colorEntry('Ansi 3 Color', Color(colorMap.ansi3))}
          ${colorEntry('Ansi 4 Color', Color(colorMap.ansi4))}
          ${colorEntry('Ansi 5 Color', Color(colorMap.ansi5))}
          ${colorEntry('Ansi 6 Color', Color(colorMap.ansi6))}
          ${colorEntry('Ansi 7 Color', Color(colorMap.ansi7))}
          ${colorEntry('Ansi 8 Color', Color(colorMap.ansi8))}
          ${colorEntry('Ansi 9 Color', Color(colorMap.ansi9))}
          ${colorEntry('Ansi 10 Color', Color(colorMap.ansi10))}
          ${colorEntry('Ansi 11 Color', Color(colorMap.ansi11))}
          ${colorEntry('Ansi 12 Color', Color(colorMap.ansi12))}
          ${colorEntry('Ansi 13 Color', Color(colorMap.ansi13))}
          ${colorEntry('Ansi 14 Color', Color(colorMap.ansi14))}
          ${colorEntry('Ansi 15 Color', Color(colorMap.ansi15))}
          ${colorEntry('Background Color', Color(colorMap.background))}
          ${colorEntry('Foreground Color', Color(colorMap.foreground))}
          ${colorEntry('Cursor Color', Color(colorMap.cursor))}
          ${colorEntry('Cursor Text Color', Color(colorMap.cursorText))}
          ${colorEntry('Selection Color', Color(colorMap.selection))}
          ${colorEntry('Selected Text Color', Color(colorMap.selectionText))}
          ${colorEntry('Bold Color', Color(colorMap.bold))}
        </dict>
      </plist>
      `;
      return Promise.resolve({
        name: `themer-iterm-${colorSet.name}.itermcolors`,
        contents: Buffer.from(template, 'utf8'),
      });
    });
};

export const renderInstructions = (paths) => `
1. Launch iTerm
2. Press \`command\`-\`I\` to open the iTerm preferences
3. Choose Colors > Color Presets... > Import... and choose the generated theme file (${paths
  .map((p) => `\`${p}\``)
  .join(' or ')})
`;
