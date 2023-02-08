import type { Template } from './index.js';
import { colorSetToVariants } from '../color-set/index.js';
import { source } from 'common-tags';

const template: Template = {
  name: 'Warp',
  render: async function* (colorSet) {
    const variants = colorSetToVariants(colorSet);
    for (const variant of variants) {
      yield {
        path: `${variant.title.snake}.yaml`,
        content: Buffer.from(
          source`
            accent: "${variant.colors.accent6}"
            background: "${variant.colors.shade0}"
            foreground: "${variant.colors.shade7}"
            details: "${variant.name}er"
            terminal_colors:
              normal:
                black: "${
                  variant.isDark ? variant.colors.shade0 : variant.colors.shade7
                }"
                red: "${variant.colors.accent0}"
                green: "${variant.colors.accent3}"
                yellow: "${variant.colors.accent2}"
                blue: "${variant.colors.accent5}"
                magenta: "${variant.colors.accent7}"
                cyan: "${variant.colors.accent4}"
                white: "${
                  variant.isDark ? variant.colors.shade6 : variant.colors.shade1
                }"
              bright:
                black: "${
                  variant.isDark ? variant.colors.shade1 : variant.colors.shade6
                }"
                red: "${variant.colors.accent1}"
                green: "${variant.colors.accent4}"
                yellow: "${variant.colors.accent2}"
                blue: "${variant.colors.accent5}"
                magenta: "${variant.colors.accent7}"
                cyan: "${variant.colors.accent4}"
                white: "${
                  variant.isDark ? variant.colors.shade7 : variant.colors.shade0
                }"
          `,
          'utf8',
        ),
      };
    }
  },
  renderInstructions: (paths, colorSet) => source`
    1. Copy the generated files (${paths
      .map((p) => `\`${p}\``)
      .join(' and ')}) to \`~/.warp/themes/\`
    2. Launch Warp
    3. Press \`command\`-\`P\` to open the Command Palette
    4. Search and select \`Open Theme Picker\`
    5. Search for and select ${colorSetToVariants(colorSet)
      .map((v) => `'${v.title.human}'`)
      .join(' or ')}
  `,
};

export default template;
