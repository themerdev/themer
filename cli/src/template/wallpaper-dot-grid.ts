import { createCanvas } from 'canvas';
import { listOutputFiles, Template } from './index.js';
import { colorSetToVariants } from '../color-set/index.js';
import { scalePow } from 'd3-scale';
import { Perlin2 } from 'tumult';

type Combination = {
  color1: string;
  color2: string;
  color3: string;
};

const template: Template = {
  name: 'Dot Grid wallpaper',
  render: async function* (colorSet, options) {
    const variants = colorSetToVariants(colorSet);
    for (const variant of variants) {
      for (const size of options.wallpaperSizes) {
        const combinations: Combination[] = [
          {
            color1: variant.colors.accent3,
            color2: variant.colors.accent4,
            color3: variant.colors.accent6,
          },
          {
            color1: variant.colors.accent1,
            color2: variant.colors.accent2,
            color3: variant.colors.accent7,
          },
        ];
        const perlin = new Perlin2();
        yield* combinations.map(({ color1, color2, color3 }, i) => {
          const canvas = createCanvas(size.w, size.h);
          const ctx = canvas.getContext('2d');

          const patternSize = size.w / Math.round(size.w / 36);

          const scale = scalePow()
            .domain([0, 1])
            .range([patternSize * 0.1, patternSize * 0.95])
            .exponent(2 / 3)
            .clamp(true);

          ctx.fillStyle = variant.colors.shade0;
          ctx.fillRect(0, 0, size.w, size.h);

          const gradient = ctx.createLinearGradient(0, 0, size.w, size.h);
          gradient.addColorStop(0, color1);
          gradient.addColorStop(0.5, color2);
          gradient.addColorStop(1, color3);
          ctx.fillStyle = gradient;
          for (let i = 0; i < size.h; i += patternSize) {
            for (let j = 0; j < size.w; j += patternSize) {
              const denominator = (Math.min(size.w, size.h) / patternSize) * 21;
              const rand = perlin.gen(j / denominator, i / denominator);
              const radius = scale(rand) / 2;
              const x = j + patternSize / 2;
              const y = i + patternSize / 2;
              ctx.beginPath();
              ctx.arc(x, y, radius, 0, 2 * Math.PI);
              ctx.fill();
            }
          }
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
