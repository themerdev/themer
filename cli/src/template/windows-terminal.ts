import type { Template } from './index.js';
import {
  AnnotatedVariant,
  brightMix,
  colorSetToVariants,
} from '../color-set/index.js';
import { source } from 'common-tags';

function themeName(variant: AnnotatedVariant): string {
  return variant.title.human;
}

const template: Template = {
  name: 'Windows Terminal',
  render: async function* (colorSet) {
    const variants = colorSetToVariants(colorSet);
    for (const variant of variants) {
      const { colors, isDark, title } = variant;
      yield {
        path: `${title.kebab}.json`,
        content: Buffer.from(
          JSON.stringify(
            {
              name: themeName(variant),

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
          ),
          'utf8',
        ),
      };
    }
  },
  renderInstructions: (paths, colorSet) => {
    const variants = colorSetToVariants(colorSet);
    return source`
      1. Open the Windows Terminal settings (\`Ctrl\`-\`,\`)
      2. Add the contents of ${paths
        .map((p) => `'${p}'`)
        .join(' and ')} to the \`schemes\` array in \`profile.json\`
      3. Set the \`colorScheme\` property to the desired scheme name (${variants
        .map((variant) => `"${themeName(variant)}"`)
        .join(' or ')}) in the profiles section of \`profile.json\`, e.g.:
      
      \`\`\`
      "profiles": {
        "defaults": {
          "colorScheme": "${themeName(variants[0]!)}"
        }
      }
      \`\`\`
    `;
  },
};

export default template;
