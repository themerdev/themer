import round from 'lodash/round.js';
import type { Template } from './index.js';
import { colorSetToVariants } from '../color-set/index.js';
import { source } from 'common-tags';
import Color from 'color';

function formatColor(hex: string): string {
  return Color(hex)
    .rgb()
    .array()
    .concat(255)
    .map((component) => round(component / 255, 6))
    .join(' ');
}

const template: Template = {
  name: 'Xcode',
  render: async function* (colorSet) {
    const variants = colorSetToVariants(colorSet);
    for (const variant of variants) {
      const shade0 = formatColor(variant.colors.shade0);
      const shade1 = formatColor(variant.colors.shade1);
      const shade2 = formatColor(variant.colors.shade2);
      const shade3 = formatColor(variant.colors.shade3);
      const shade4 = formatColor(variant.colors.shade4);
      const shade5 = formatColor(variant.colors.shade5);
      const shade6 = formatColor(variant.colors.shade6);
      const shade7 = formatColor(variant.colors.shade7);
      const accent0 = formatColor(variant.colors.accent0);
      const accent1 = formatColor(variant.colors.accent1);
      const accent2 = formatColor(variant.colors.accent2);
      const accent3 = formatColor(variant.colors.accent3);
      const accent4 = formatColor(variant.colors.accent4);
      const accent5 = formatColor(variant.colors.accent5);
      const accent6 = formatColor(variant.colors.accent6);
      const accent7 = formatColor(variant.colors.accent7);
      yield {
        path: `${variant.title.human}.dvtcolortheme`,
        content: source`
          <?xml version="1.0" encoding="UTF-8"?>
          <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
          <plist version="1.0">
            <dict>
              <key>DVTConsoleDebuggerInputTextColor</key>
              <string>${shade7}</string>
              <key>DVTConsoleDebuggerOutputTextColor</key>
              <string>${shade5}</string>
              <key>DVTConsoleDebuggerPromptTextColor</key>
              <string>${accent1}</string>
              <key>DVTConsoleExectuableInputTextColor</key>
              <string>${shade5}</string>
              <key>DVTConsoleExectuableOutputTextColor</key>
              <string>${shade7}</string>
              <key>DVTConsoleTextBackgroundColor</key>
              <string>${shade0}</string>
              <key>DVTConsoleTextInsertionPointColor</key>
              <string>${accent6}</string>
              <key>DVTConsoleTextSelectionColor</key>
              <string>${shade1}</string>
              <key>DVTDebuggerInstructionPointerColor</key>
              <string>${accent3}</string>
              <key>DVTSourceTextBackground</key>
              <string>${shade0}</string>
              <key>DVTSourceTextBlockDimBackgroundColor</key>
              <string>${shade4}</string>
              <key>DVTSourceTextInsertionPointColor</key>
              <string>${accent6}</string>
              <key>DVTSourceTextInvisiblesColor</key>
              <string>${shade1}</string>
              <key>DVTSourceTextSelectionColor</key>
              <string>${shade1}</string>
              <key>DVTSourceTextSyntaxColors</key>
              <dict>
                <key>xcode.syntax.attribute</key>
                <string>${accent3}</string>
                <key>xcode.syntax.character</key>
                <string>${accent4}</string>
                <key>xcode.syntax.comment</key>
                <string>${shade2}</string>
                <key>xcode.syntax.comment.doc</key>
                <string>${shade3}</string>
                <key>xcode.syntax.comment.doc.keyword</key>
                <string>${shade4}</string>
                <key>xcode.syntax.identifier.class</key>
                <string>${accent2}</string>
                <key>xcode.syntax.identifier.class.system</key>
                <string>${accent2}</string>
                <key>xcode.syntax.identifier.constant</key>
                <string>${accent3}</string>
                <key>xcode.syntax.identifier.constant.system</key>
                <string>${accent3}</string>
                <key>xcode.syntax.identifier.function</key>
                <string>${accent4}</string>
                <key>xcode.syntax.identifier.function.system</key>
                <string>${accent4}</string>
                <key>xcode.syntax.identifier.macro</key>
                <string>${accent7}</string>
                <key>xcode.syntax.identifier.macro.system</key>
                <string>${accent7}</string>
                <key>xcode.syntax.identifier.type</key>
                <string>${accent0}</string>
                <key>xcode.syntax.identifier.type.system</key>
                <string>${accent1}</string>
                <key>xcode.syntax.identifier.variable</key>
                <string>${shade7}</string>
                <key>xcode.syntax.identifier.variable.system</key>
                <string>${shade7}</string>
                <key>xcode.syntax.keyword</key>
                <string>${accent5}</string>
                <key>xcode.syntax.number</key>
                <string>${accent3}</string>
                <key>xcode.syntax.plain</key>
                <string>${shade6}</string>
                <key>xcode.syntax.preprocessor</key>
                <string>${accent6}</string>
                <key>xcode.syntax.string</key>
                <string>${accent3}</string>
                <key>xcode.syntax.url</key>
                <string>${accent5}</string>
              </dict>
            </dict>
          </plist>
        `,
      };
    }
  },
  renderInstructions: (paths) => source`
    Copy (or symlink) the generated theme ${
      paths.length === 1 ? 'file' : 'files'
    } to Xcode's themes directory:

    \`\`\`
    mkdir -p ~/Library/Developer/Xcode/UserData/FontAndColorThemes
    ${paths
      .map(
        (p) =>
          `cp '${p}' ~/Library/Developer/Xcode/UserData/FontAndColorThemes/`,
      )
      .join('\n')}
    \`\`\`

    Then restart Xcode. The ${
      paths.length === 1 ? 'theme' : 'themes'
    } will be available in Preferences > Fonts and Colors.
  `,
};

export default template;
