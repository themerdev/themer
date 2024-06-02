import { source } from 'common-tags';
import { Document, YAMLMap } from 'yaml';
import type { Template } from './index.js';
import { colorSetToVariants, brightMix, dimMix } from '../color-set/index.js';

const template: Template = {
  name: 'Alacritty',
  render: async function* (colorSet) {
    const variants = colorSetToVariants(colorSet);
    const document = new Document({
      schemes: Object.fromEntries(
        variants.map(({ title, colors, isDark }) => [
          title.kebab,
          {
            primary: {
              background: colors.shade0,
              foreground: colors.shade6,
            },
            cursor: { text: colors.shade0, cursor: colors.accent6 },
            selection: { text: colors.shade0, background: colors.accent5 },
            normal: {
              black: isDark ? colors.shade2 : colors.shade6,
              red: colors.accent0,
              green: colors.accent3,
              yellow: colors.accent2,
              blue: colors.accent5,
              magenta: colors.accent7,
              cyan: colors.accent4,
              white: isDark ? colors.shade6 : colors.shade2,
            },
            bright: {
              black: isDark ? colors.shade3 : colors.shade5,
              red: brightMix(colors, 'accent0', isDark),
              green: brightMix(colors, 'accent3', isDark),
              yellow: brightMix(colors, 'accent2', isDark),
              blue: brightMix(colors, 'accent5', isDark),
              magenta: brightMix(colors, 'accent7', isDark),
              cyan: brightMix(colors, 'accent4', isDark),
              white: isDark ? colors.shade7 : colors.shade1,
            },
            dim: {
              black: isDark ? colors.shade1 : colors.shade7,
              red: dimMix(colors, 'accent0', isDark),
              green: dimMix(colors, 'accent3', isDark),
              yellow: dimMix(colors, 'accent2', isDark),
              blue: dimMix(colors, 'accent5', isDark),
              magenta: dimMix(colors, 'accent7', isDark),
              cyan: dimMix(colors, 'accent4', isDark),
              white: isDark ? colors.shade5 : colors.shade3,
            },
          },
        ]),
      ),
    });
    document.commentBefore = ` ${colorSet.title.human}`;
    for (const variant of variants) {
      const node = document.getIn(
        ['schemes', variant.title.kebab],
        true,
      ) as YAMLMap;
      document.createAlias(node, variant.name);
    }
    yield {
      path: `${colorSet.title.human}.yml`,
      content: document.toString(),
    };
  },
  renderInstructions: ([path]) => source`
    1. Paste the contents of \`${path}\` into your Alacritty config file.
    2. Select the desired theme by setting the \`colors\` config key to reference the scheme's anchor (i.e., \`colors: *light\` or \`colors: *dark\`).
  `,
};

export default template;
