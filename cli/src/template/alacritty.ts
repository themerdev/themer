import { source } from 'common-tags';
import Color from 'color';
import { Document, YAMLMap } from 'yaml';
import type { Template } from './index.js';
import { colorSetToVariants, FullVariant } from '../color-set/index.js';

const MIX = 0.2;

const brightMix = (
  isDark: boolean,
  colors: FullVariant,
  key: keyof FullVariant,
) =>
  Color(colors[key])
    .mix(isDark ? Color(colors.shade7) : Color(colors.shade0), MIX)
    .hex();

const dimMix = (isDark: boolean, colors: FullVariant, key: keyof FullVariant) =>
  Color(colors[key])
    .mix(isDark ? Color(colors.shade0) : Color(colors.shade7), MIX)
    .hex();

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
              red: brightMix(isDark, colors, 'accent0'),
              green: brightMix(isDark, colors, 'accent3'),
              yellow: brightMix(isDark, colors, 'accent2'),
              blue: brightMix(isDark, colors, 'accent5'),
              magenta: brightMix(isDark, colors, 'accent7'),
              cyan: brightMix(isDark, colors, 'accent4'),
              white: isDark ? colors.shade7 : colors.shade1,
            },
            dim: {
              black: isDark ? colors.shade1 : colors.shade7,
              red: dimMix(isDark, colors, 'accent0'),
              green: dimMix(isDark, colors, 'accent3'),
              yellow: dimMix(isDark, colors, 'accent2'),
              blue: dimMix(isDark, colors, 'accent5'),
              magenta: dimMix(isDark, colors, 'accent7'),
              cyan: dimMix(isDark, colors, 'accent4'),
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
