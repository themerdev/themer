import type { Template } from './index.js';
import { colorSetToVariants } from '../color-set/index.js';
import { source } from 'common-tags';

const template: Template = {
  name: 'Sublime Text',
  render: async function* (colorSet) {
    const variants = colorSetToVariants(colorSet);
    for (const { title, colors } of variants) {
      yield {
        path: `${title.human}.tmTheme`,
        content: source`
          <?xml version="1.0" encoding="UTF-8"?>
          <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
          <plist version="1.0">
            <dict>
              <key>name</key>
              <string>${title.human}</string>
              <key>settings</key>
              <array>
                <dict>
                  <key>settings</key>
                  <dict>
                    <key>background</key>
                    <string>${colors.shade0}</string>
                    <key>caret</key>
                    <string>${colors.accent6}</string>
                    <key>foreground</key>
                    <string>${colors.shade6}</string>
                    <key>invisibles</key>
                    <string>${colors.shade1}</string>
                    <key>lineHighlight</key>
                    <string>${colors.shade1}</string>
                    <key>selection</key>
                    <string>${colors.shade2}</string>
                    <key>selectionBorder</key>
                    <string>${colors.shade5}</string>
                    <key>findHighlight</key>
                    <string>${colors.accent2}</string>
                    <key>findHighlightForeground</key>
                    <string>${colors.shade0}</string>
                    <key>activeGuide</key>
                    <string>${colors.accent1}</string>
                    <key>bracketsForeground</key>
                    <string>${colors.shade6}7F</string>
                    <key>bracketsOptions</key>
                    <string>stippled_underline</string>
                    <key>bracketsContentsForeground</key>
                    <string>${colors.shade6}7F</string>
                    <key>tagsOptions</key>
                    <string>stippled_underline</string>
                  </dict>
                </dict>
                <dict>
                  <key>name</key>
                  <string>Comment</string>
                  <key>scope</key>
                  <string>comment</string>
                  <key>settings</key>
                  <dict>
                    <key>foreground</key>
                    <string>${colors.shade2}</string>
                  </dict>
                </dict>
                <dict>
                  <key>name</key>
                  <string>Constant</string>
                  <key>scope</key>
                  <string>constant</string>
                  <key>settings</key>
                  <dict>
                    <key>foreground</key>
                    <string>${colors.accent7}</string>
                  </dict>
                </dict>
                <dict>
                  <key>name</key>
                  <string>Entity</string>
                  <key>scope</key>
                  <string>entity</string>
                  <key>settings</key>
                  <dict>
                    <key>foreground</key>
                    <string>${colors.accent4}</string>
                  </dict>
                </dict>
                <dict>
                  <key>name</key>
                  <string>Invalid</string>
                  <key>scope</key>
                  <string>invalid</string>
                  <key>settings</key>
                  <dict>
                    <key>background</key>
                    <string>${colors.accent0}</string>
                    <key>foreground</key>
                    <string>${colors.shade1}</string>
                  </dict>
                </dict>
                <dict>
                  <key>name</key>
                  <string>Keyword</string>
                  <key>scope</key>
                  <string>keyword</string>
                  <key>settings</key>
                  <dict>
                    <key>foreground</key>
                    <string>${colors.accent6}</string>
                  </dict>
                </dict>
                <dict>
                  <key>name</key>
                  <string>Storage</string>
                  <key>scope</key>
                  <string>storage</string>
                  <key>settings</key>
                  <dict>
                    <key>foreground</key>
                    <string>${colors.accent7}</string>
                  </dict>
                </dict>
                <dict>
                  <key>name</key>
                  <string>String</string>
                  <key>scope</key>
                  <string>string</string>
                  <key>settings</key>
                  <dict>
                    <key>foreground</key>
                    <string>${colors.accent3}</string>
                  </dict>
                </dict>
                <dict>
                  <key>name</key>
                  <string>Support</string>
                  <key>scope</key>
                  <string>support</string>
                  <key>settings</key>
                  <dict>
                    <key>foreground</key>
                    <string>${colors.accent4}</string>
                  </dict>
                </dict>
                <dict>
                  <key>name</key>
                  <string>Variable</string>
                  <key>scope</key>
                  <string>variable</string>
                  <key>settings</key>
                  <dict>
                    <key>foreground</key>
                    <string>${colors.shade7}</string>
                  </dict>
                </dict>
                <dict>
                  <key>name</key>
                  <string>Markup Heading</string>
                  <key>scope</key>
                  <string>markup.heading</string>
                  <key>settings</key>
                  <dict>
                    <key>foreground</key>
                    <string>${colors.accent4}</string>
                  </dict>
                </dict>
                <dict>
                  <key>name</key>
                  <string>Markup Deleted</string>
                  <key>scope</key>
                  <string>markup.deleted</string>
                  <key>settings</key>
                  <dict>
                    <key>foreground</key>
                    <string>${colors.accent0}</string>
                  </dict>
                </dict>
                <dict>
                  <key>name</key>
                  <string>Markup Inserted</string>
                  <key>scope</key>
                  <string>markup.inserted</string>
                  <key>settings</key>
                  <dict>
                    <key>foreground</key>
                    <string>${colors.accent3}</string>
                  </dict>
                </dict>
                <dict>
                  <key>name</key>
                  <string>Markup Changed</string>
                  <key>scope</key>
                  <string>markup.changed</string>
                  <key>settings</key>
                  <dict>
                    <key>foreground</key>
                    <string>${colors.accent2}</string>
                  </dict>
                </dict>
                <dict>
                  <key>name</key>
                  <string>Markup Underline</string>
                  <key>scope</key>
                  <string>markup.underline</string>
                  <key>settings</key>
                  <dict>
                    <key>fontStyle</key>
                    <string>underline</string>
                  </dict>
                </dict>
                <dict>
                  <key>name</key>
                  <string>Markup Underline Link</string>
                  <key>scope</key>
                  <string>markup.underline.link</string>
                  <key>settings</key>
                  <dict>
                    <key>foreground</key>
                    <string>${colors.accent5}</string>
                  </dict>
                </dict>
                <dict>
                  <key>name</key>
                  <string>Markup List</string>
                  <key>scope</key>
                  <string>markup.list</string>
                  <key>settings</key>
                  <dict>
                    <key>foreground</key>
                    <string>${colors.shade7}</string>
                  </dict>
                </dict>
                <dict>
                  <key>name</key>
                  <string>Markup Raw</string>
                  <key>scope</key>
                  <string>markup.raw</string>
                  <key>settings</key>
                  <dict>
                    <key>foreground</key>
                    <string>${colors.accent7}</string>
                  </dict>
                </dict>
              </array>
            </dict>
          </plist>
        `,
      };
    }
  },
  renderInstructions: (paths, colorSet) => source`
    1. Copy (or symlink) the generated theme files (${paths
      .map((p) => `\`${p}\``)
      .join(
        ' or ',
      )}) to the \`User/\` packages folder (you can see where this folder is located by choosing the "Preferences: Browse Packages..." menu option from the Command Palette).
    2. Open the Command Palette and choose "UI: Select Color Scheme"
    3. Choose the theme (${colorSetToVariants(colorSet)
      .map(({ title }) => title.human)
      .map((name) => `"${name}"`)
      .join(' or ')}) from the list of available color themes.
  `,
};

export default template;
