import trianglify from 'trianglify';
import { createCanvas } from 'canvas';
import { listOutputFiles, Template } from './index.js';
import { colorSetToVariants } from '../color-set/index.js';

type Combination = {
  xColors: [string, string];
  yColors: [string, string];
};

const template: Template = {
  name: 'Trianglify wallpaper',
  render: async function* (colorSet, options) {
    const variants = colorSetToVariants(colorSet);
    for (const variant of variants) {
      for (const size of options.wallpaperSizes) {
        const combinations: Combination[] = [
          {
            xColors: [variant.colors.accent4, variant.colors.accent6],
            yColors: [variant.colors.shade7, variant.colors.shade0],
          },
          {
            xColors: [variant.colors.accent2, variant.colors.accent7],
            yColors: [variant.colors.shade7, variant.colors.shade0],
          },
        ];
        yield* combinations.map((combination, i) => {
          const pattern = trianglify({
            width: size.w,
            height: size.h,
            variance: 0.75,
            ...combination,
          });
          const canvas = createCanvas(size.w, size.h);
          pattern.toCanvas(canvas, {
            scaling: false,
            applyCssScaling: false,
          });
          return {
            path: `${variant.title.kebab}-${size.w}x${size.h}-${i + 1}.png`,
            content: Buffer.from(
              canvas.toDataURL().replace('data:image/png;base64,', ''),
              'base64',
            ),
          };
        });
      }
    }
  },
  renderInstructions: listOutputFiles,
};

export default template;
