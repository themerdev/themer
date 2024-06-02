import Color from 'colorjs.io';
import { colorSetToVariants } from '../color-set/index.js';
import { dirname, join, Template, version } from './index.js';
import { source } from 'common-tags';

const template: Template = {
  name: 'Chrome',
  render: async function* (colorSet) {
    const variants = colorSetToVariants(colorSet);
    for (const variant of variants) {
      const themeName = variant.title.human;
      const shade0rgb = new Color(variant.colors.shade0).to('srgb').coords;
      const shade1rgb = new Color(variant.colors.shade1).to('srgb').coords;
      const shade7rgb = new Color(variant.colors.shade7).to('srgb').coords;
      const accent5hsl = new Color(variant.colors.accent5).to('hsl').coords;
      const accent6hsl = new Color(variant.colors.accent6).to('hsl').coords;
      yield {
        path: join(themeName, 'manifest.json'),
        content: JSON.stringify(
          {
            version,
            manifest_version: 2,
            name: themeName,
            theme: {
              colors: {
                bookmark_text: shade7rgb,
                frame: variant.isDark ? shade0rgb : shade1rgb,
                ntp_background: variant.isDark ? shade1rgb : shade0rgb,
                ntp_text: shade7rgb,
                tab_background_text: shade7rgb,
                tab_background_text_inactive: shade7rgb,
                tab_background_text_incognito: shade7rgb,
                tab_background_text_incognito_inactive: shade7rgb,
                tab_text: shade7rgb,
                toolbar: variant.isDark ? shade1rgb : shade0rgb,
                omnibox_text: shade7rgb,
                omnibox_background: variant.isDark ? shade0rgb : shade1rgb,
              },
              tints: {
                buttons: [accent5hsl[0]! / 360, 0.5, 0.5],
                frame_inactive: [-1, -1, -1],
                frame_incognito: [
                  accent6hsl[0]! / 360,
                  1.0,
                  variant.isDark ? 0.55 : 0.45,
                ],
                frame_incognito_inactive: [
                  accent6hsl[0]! / 360,
                  1.0,
                  variant.isDark ? 0.55 : 0.45,
                ],
              },
            },
          },
          null,
          2,
        ),
      };
    }
  },
  renderInstructions: (paths) => {
    const directories = new Set(paths.map(dirname));
    return source`
      1. Launch Chrome and go to \`chrome://extensions\`.
      2. Check the "Developer mode" checkbox at the top.
      3. Click the "Load unpacked extension..." button and choose the desired theme directory (${[
        ...directories,
      ]
        .map((dir) => `\`${dir}\``)
        .join(' or ')}).

      (To reset or remove the theme, visit \`chrome://settings\` and click "Reset to Default" in the "Appearance" section.)
  `;
  },
};

export default template;
