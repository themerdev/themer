import type { Template } from './index.js';
import { brightMix, colorSetToVariants } from '../color-set/index.js';
import { source } from 'common-tags';
import Color from 'color';

function format(hex: string): string {
  return `rgb:${Color(hex)
    .rgb()
    .array()
    .map((n) => n.toString(16))
    .join('/')}`;
}

const template: Template = {
  name: 'Xresources',
  render: async function* (colorSet) {
    const variants = colorSetToVariants(colorSet);
    for (const { title, colors, isDark } of variants) {
      yield {
        path: `${title.kebab}.Xresources`,
        content: Buffer.from(
          source`
            ! general
            *background: ${format(colors.shade0)}
            *foreground: ${format(colors.shade6)}

            ! blacks
            *color0: ${format(isDark ? colors.shade2 : colors.shade6)}
            *color8: ${format(isDark ? colors.shade3 : colors.shade5)}

            ! reds
            *color1: ${format(colors.accent0)}
            *color9: ${format(brightMix(colors, 'accent0', isDark))}

            ! greens
            *color2: ${format(colors.accent3)}
            *color10: ${format(brightMix(colors, 'accent3', isDark))}

            ! yellows
            *color3: ${format(colors.accent2)}
            *color11: ${format(brightMix(colors, 'accent2', isDark))}

            ! blues
            *color4: ${format(colors.accent5)}
            *color12: ${format(brightMix(colors, 'accent5', isDark))}

            ! magentas
            *color5: ${format(colors.accent7)}
            *color13: ${format(brightMix(colors, 'accent7', isDark))}

            ! cyans
            *color6: ${format(colors.accent4)}
            *color14: ${format(brightMix(colors, 'accent4', isDark))}

            ! whites
            *color7: ${format(isDark ? colors.shade6 : colors.shade2)}
            *color15: ${format(isDark ? colors.shade7 : colors.shade1)}
          `,
          'utf8',
        ),
      };
    }
  },
  renderInstructions: (paths) => source`
    Copy the contents of ${paths
      .map((p) => `'${p}'`)
      .join(
        ' or ',
      )} into your .Xresources configuration file, or load it with \`xrdb\`.
  `,
};

export default template;
