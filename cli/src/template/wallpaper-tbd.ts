import { listOutputFiles, Template } from './index.js';
import { colorSetToVariants } from '../color-set/index.js';
import { scalePow } from 'd3-scale';
import { Perlin2 } from 'tumult';
import { source } from 'common-tags';
// import memoize from 'lodash/memoize.js';

const template: Template = {
  name: 'TBD wallpaper',
  render: async function* (colorSet, options) {
    const variants = colorSetToVariants(colorSet);
    for (const variant of variants) {
      // const getShade = memoize((rand: number) => {
      //   // interpolate the shades here.
      //   // 0 => shade0
      //   // 1 -> shade7
      // })
      const getShade = scalePow()
        .domain([0, 1])
        .range([
          variant.colors.shade0 as unknown as number,
          variant.colors.shade1 as unknown as number,
          variant.colors.shade2 as unknown as number,
          variant.colors.shade3 as unknown as number,
          variant.colors.shade4 as unknown as number,
          variant.colors.shade5 as unknown as number,
          variant.colors.shade6 as unknown as number,
          variant.colors.shade7 as unknown as number,
        ])
        .exponent(2 / 3)
        .clamp(true);
      for (const size of options.wallpaperSizes) {
        const patternSize = size.w / Math.round(size.w / 36);

        const perlin = new Perlin2();
        const denominator = (Math.min(size.w, size.h) / patternSize) * 21;
        const blocks = [];
        for (let i = 0; i < size.h; i += patternSize) {
          for (let j = 0; j < size.w; j += patternSize) {
            const rand = perlin.gen(j / denominator, i / denominator);
            blocks.push(source`
              <rect
                x="${j}"
                y="${i}"
                width="${patternSize}"
                height="${patternSize}"
                fill="${getShade(rand)}"
              />
            `);
          }
        }

        const svg = source`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${size.w}"
            height="${size.h}"
            viewBox="0 0 ${size.w} ${size.h}"
          >
            ${blocks}
          </svg>
        `;
        yield {
          path: `${variant.title.kebab}-${size.w}x${size.h}.svg`,
          content: svg,
        };
      }
    }
  },
  renderInstructions: listOutputFiles,
};

export default template;
