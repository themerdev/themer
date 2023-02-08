import type { Template } from './index.js';
import { AnnotatedVariant, colorSetToVariants } from '../color-set/index.js';
import { source } from 'common-tags';

function themeName(variant: AnnotatedVariant): string {
  return `${variant.title.upperCamel}Colors`;
}

const template: Template = {
  name: 'Keypirinha',
  render: async function* (colorSet) {
    const variants = colorSetToVariants(colorSet);
    for (const variant of variants) {
      yield {
        path: `keypirinha-${variant.title.kebab}.ini`,
        content: Buffer.from(
          source`
            [theme/${themeName(variant)}]
            color_background = ${variant.colors.shade0}
            color_foreground = ${variant.colors.shade7}
            color_faded = ${variant.colors.shade5}
            color_accent = ${variant.colors.accent6}
            color_warn = ${variant.colors.accent0}

            color_title = ${variant.colors.shade7}
            color_status = ${variant.colors.accent5}

            color_textbox_back = ${variant.colors.shade0}

            color_listitem_back = ${variant.colors.shade0}
            color_listitem_title = ${variant.colors.shade7}
            color_listitem_desc = ${variant.colors.accent5}
            color_listitem_tips = ${variant.colors.accent5}

            color_listitem_selected_back = ${variant.colors.shade1}
            color_listitem_selected_title = ${variant.colors.accent7}
            color_listitem_selected_desc = ${variant.colors.shade7}
            color_listitem_selected_tips = ${variant.colors.accent7}
          `,
          'utf8',
        ),
      };
    }
  },
  renderInstructions: (paths, colorSet) => source`
    1. Open the Keypirinha Configuration:
        - Select **Keypirinha: Configure** item from the Keypirinha LaunchBox
        - Right-Click **Keypirinha** -> **Configure Keypirinha**
    2. Add the contents of ${paths
      .map((p) => `\`${p}\``)
      .join(' and ')} to the \`Keypirinha.ini\` file.
    3. Set/Append the desired theme name (${colorSetToVariants(colorSet)
      .map(themeName)
      .map((name) => `"${name}"`)
      .join(
        ' or ',
      )}) to the \`theme\` property under the \`[gui]\` section of the \`Keypirinha.ini\` file.
  `,
};

export default template;
