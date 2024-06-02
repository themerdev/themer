import Color from 'colorjs.io';
import type { Template } from './index.js';
import { colorSetToVariants } from '../color-set/index.js';
import { source } from 'common-tags';

const template: Template = {
  name: 'Sketch Palettes',
  render: async function* (colorSet) {
    const variants = colorSetToVariants(colorSet);
    for (const { title, colors } of variants) {
      yield {
        path: `sketch-palettes-${title.kebab}.sketchpalette`,
        content: JSON.stringify({
          compatibleVersion: '2.0',
          pluginVersion: '2.13',
          colors: Object.values(colors).map((color) => {
            const [red, green, blue] = Color(color).rgb().array();
            return {
              red,
              green,
              blue,
              alpha: 1,
            };
          }),
          gradients: [],
          images: [],
        }),
      };
    }
  },
  renderInstructions: (paths) => source`
    Load the generated theme ${
      paths.length > 1 ? 'files' : 'file'
    } into Sketch through the [sketch-palettes](https://github.com/andrewfiorillo/sketch-palettes) plugin.

    ${paths.map((p) => `* \`${p}\``).join('\n')}
  `,
};

export default template;
