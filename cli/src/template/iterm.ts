import Color from 'colorjs.io';
import type { Template } from './index.js';
import { colorSetToVariants } from '../color-set/index.js';
import { source } from 'common-tags';

function colorEntry(title: string, color: Color): string {
  return source`
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
}

const template: Template = {
  name: 'iTerm',
  render: async function* (colorSet) {
    const variants = colorSetToVariants(colorSet);
    for (const variant of variants) {
      yield {
        path: `${variant.title.human}.itermcolors`,
        content: source`
          <?xml version="1.0" encoding="UTF-8"?>
          <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
          <plist version="1.0">
            <dict>
              ${colorEntry(
                'Ansi 0 Color',
                Color(
                  variant.isDark
                    ? variant.colors.shade0
                    : variant.colors.shade7,
                ),
              )}
              ${colorEntry('Ansi 1 Color', Color(variant.colors.accent0))}
              ${colorEntry('Ansi 2 Color', Color(variant.colors.accent3))}
              ${colorEntry('Ansi 3 Color', Color(variant.colors.accent2))}
              ${colorEntry('Ansi 4 Color', Color(variant.colors.accent5))}
              ${colorEntry('Ansi 5 Color', Color(variant.colors.accent7))}
              ${colorEntry('Ansi 6 Color', Color(variant.colors.accent4))}
              ${colorEntry(
                'Ansi 7 Color',
                Color(
                  variant.isDark
                    ? variant.colors.shade6
                    : variant.colors.shade1,
                ),
              )}
              ${colorEntry(
                'Ansi 8 Color',
                Color(
                  variant.isDark
                    ? variant.colors.shade1
                    : variant.colors.shade6,
                ),
              )}
              ${colorEntry('Ansi 9 Color', Color(variant.colors.accent1))}
              ${colorEntry('Ansi 10 Color', Color(variant.colors.accent4))}
              ${colorEntry('Ansi 11 Color', Color(variant.colors.accent2))}
              ${colorEntry('Ansi 12 Color', Color(variant.colors.accent5))}
              ${colorEntry('Ansi 13 Color', Color(variant.colors.accent7))}
              ${colorEntry('Ansi 14 Color', Color(variant.colors.accent4))}
              ${colorEntry(
                'Ansi 15 Color',
                Color(
                  variant.isDark
                    ? variant.colors.shade7
                    : variant.colors.shade0,
                ),
              )}
              ${colorEntry('Background Color', Color(variant.colors.shade0))}
              ${colorEntry('Foreground Color', Color(variant.colors.shade7))}
              ${colorEntry('Cursor Color', Color(variant.colors.accent6))}
              ${colorEntry('Cursor Text Color', Color(variant.colors.shade7))}
              ${colorEntry('Selection Color', Color(variant.colors.accent7))}
              ${colorEntry('Selected Text Color', Color(variant.colors.shade7))}
              ${colorEntry('Bold Color', Color(variant.colors.shade6))}
            </dict>
          </plist>
        `,
      };
    }
  },
  renderInstructions: (paths) => source`
    1. Launch iTerm
    2. Press \`command\`-\`I\` to open the iTerm preferences
    3. Choose "Colors" > "Color Presets..." > "Import..." and choose the generated theme file (${paths
      .map((p) => `\`${p}\``)
      .join(' or ')})
    4. Select the desired theme in the "Color Presets..." menu.
  `,
};

export default template;
