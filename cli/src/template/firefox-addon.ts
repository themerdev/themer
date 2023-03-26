import Color from 'color';
import { source } from 'common-tags';
import { colorSetToVariants } from '../color-set/index.js';
import { dirname, join, Template, version } from './index.js';

function formatColor(hex: string): number[] {
  return Color(hex).rgb().array();
}

const template: Template = {
  name: 'Firefox Add-on',
  render: async function* (colorSet) {
    const variants = colorSetToVariants(colorSet);
    for (const variant of variants) {
      const shade0 = formatColor(variant.colors.shade0);
      const shade1 = formatColor(variant.colors.shade1);
      const shade2 = formatColor(variant.colors.shade2);
      const shade6 = formatColor(variant.colors.shade6);
      const shade7 = formatColor(variant.colors.shade7);
      const name = variant.title.human;
      yield {
        path: join(name, 'manifest.json'),
        content: JSON.stringify(
          {
            version,
            manifest_version: 2,
            name,
            theme: {
              colors: {
                bookmark_text: shade7,
                frame: variant.isDark ? shade0 : shade1,
                frame_inactive: variant.isDark ? shade1 : shade0,
                icons_attention: shade7,
                icons: shade7,
                ntp_background: variant.isDark ? shade1 : shade0,
                ntp_text: shade7,
                popup_highlight_text: shade2,
                popup_highlight: shade6,
                toolbar_field_highlight_text: shade2,
                popup_border: variant.isDark ? shade1 : shade0,
                popup_text: shade7,
                popup: variant.isDark ? shade1 : shade0,
                sidebar_border: variant.isDark ? shade1 : shade0,
                sidebar_highlight_text: shade6,
                sidebar_highlight: shade2,
                sidebar_text: shade6,
                sidebar: variant.isDark ? shade1 : shade0,
                tab_background_text: shade7,
                tab_loading: shade7,
                tab_text: shade7,
                toolbar_bottom_separator: variant.isDark ? shade1 : shade0,
                toolbar_field_border: variant.isDark ? shade1 : shade0,
                toolbar_field_separator: variant.isDark ? shade1 : shade0,
                toolbar_field_text_focus: shade7,
                toolbar_field_text: shade7,
                toolbar_field: variant.isDark ? shade1 : shade0,
                toolbar_field_border_focus: shade2,
                toolbar: variant.isDark ? shade1 : shade0,
              },
            },
          },
          null,
          2,
        ),
      };
    }
  },
  renderInstructions: (paths) => source`
    To use the generated extension package, the code will need to be packaged up and signed by Mozilla.

    To package the code in preparation for submission, the \`web-ext\` tool can be used:

    \`\`\`
    npx web-ext build --source-dir ${paths
      .map(dirname)
      .map((dir) => `'${dir}'`)
      .join(' # or ')}
    \`\`\`

    Then the package can be submitted to Mozilla for review in the [Add-on Developer Hub](https://addons.mozilla.org/en-US/developers/addon/submit/distribution).

    Learn more about Firefox themes from [extensionworkshop.com](https://extensionworkshop.com/documentation/themes/)

    To theme Firefox without the need to create a developer account and go through the extension review process, see themer's integration with [Firefox Color](https://color.firefox.com).
  `,
};

export default template;
