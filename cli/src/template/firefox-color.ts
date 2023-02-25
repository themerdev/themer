import { colorSetToVariants } from '../color-set/index.js';
import type { Template } from './index.js';
import Color from 'color';
import { source } from 'common-tags';
import { compress } from 'lzma';
import { encode } from 'urlsafe-base64';
import msgpack5 from 'msgpack5';

function formatColor(hex: string) {
  return Color(hex).object();
}

const template: Template = {
  name: 'Firefox Color',
  render: async function* (colorSet) {
    const variants = colorSetToVariants(colorSet);
    for (const variant of variants) {
      const shade0 = formatColor(variant.colors.shade0);
      const shade1 = formatColor(variant.colors.shade1);
      const shade4 = formatColor(variant.colors.shade4);
      const shade7 = formatColor(variant.colors.shade7);
      const title = variant.title.kebab;
      const theme = encode(
        Buffer.from(
          compress(
            msgpack5().encode({
              colors: {
                toolbar: variant.isDark ? shade1 : shade0,
                toolbar_text: shade7,
                frame: variant.isDark ? shade0 : shade1,
                tab_background_text: shade7,
                toolbar_field: variant.isDark ? shade1 : shade0,
                toolbar_field_text: shade7,
                tab_line: shade4,
                popup: variant.isDark ? shade1 : shade0,
                popup_text: shade7,
              },
              title,
            }),
            9,
          ),
        ),
      );
      const url = `https://color.firefox.com/?theme=${theme}`;
      yield {
        path: `${title}.url`,
        content: Buffer.from(
          source`
            [InternetShortcut]
            URL=${url}
          `,
          'utf8',
        ),
      };
    }
  },
  renderInstructions: (paths) => source`
    The Firefox Color add-on allows for simple theming without the need for a developer account or package review process by Mozilla.

    1. Install the [Firefox Color add-on](https://addons.mozilla.org/en-US/firefox/addon/firefox-color/).
    2. Open ${paths.map((p) => `\`${p}\``).join(' or ')} directly with Firefox.
    3. Click "Yep" when prompted to apply the custom theme.

    For a more fully featured Firefox theme, see themer's Firefox theme add-on generator.
  `,
};

export default template;
