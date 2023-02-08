import type { Template } from './index.js';
import { colorSetToVariants } from '../color-set/index.js';
import { source } from 'common-tags';

const template: Template = {
  name: 'Terminator',
  render: async function* (colorSet) {
    const variants = colorSetToVariants(colorSet);
    for (const { title, colors } of variants) {
      const palette = [
        colors.shade0,
        colors.accent0,
        colors.accent3,
        colors.accent2,
        colors.accent4,
        colors.accent6,
        colors.accent7,
        colors.shade6,
        colors.shade5,
        colors.accent0,
        colors.accent4,
        colors.accent2,
        colors.accent5,
        colors.accent6,
        colors.accent7,
        colors.shade7,
      ];
      yield {
        path: `terminator-${title.kebab}.txt`,
        content: Buffer.from(
          source`
            [[Themer ${title.human}]]
              background_color = "${colors.shade0}"
              cursor_color = "${colors.shade6}"
              foreground_color = "${colors.shade6}"
              palette = "${palette.join(':')}"
          `,
          'utf8',
        ),
      };
    }
  },
  renderInstructions: (paths) => source`
    1. Copy the contents of ${paths
      .map((p) => `\`${p}\``)
      .join(
        ' or ',
      )} to Terminator's config file. The config file is usually located at \`~/.config/terminator/config\`. You can paste it as a new profile, or copy the contents into your existing profile.
    2. Restart Terminator to see the new theme.
  `,
};

export default template;
