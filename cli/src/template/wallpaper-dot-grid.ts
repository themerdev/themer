import { listOutputFiles, Template } from './index.js';
import { colorSetToVariants } from '../color-set/index.js';
import { scalePow } from 'd3-scale';
import { Perlin2 } from 'tumult';
import { source } from 'common-tags';

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
          const patternSize = size.w / Math.round(size.w / 36);

          const scale = scalePow()
            .domain([0, 1])
            .range([patternSize * 0.1, patternSize * 0.95])
            .exponent(2 / 3)
            .clamp(true);

          const circles = [];
          for (let i = 0; i < size.h; i += patternSize) {
            for (let j = 0; j < size.w; j += patternSize) {
              const denominator = (Math.min(size.w, size.h) / patternSize) * 21;
              const rand = perlin.gen(j / denominator, i / denominator);
              const radius = scale(rand) / 2;
              const x = j + patternSize / 2;
              const y = i + patternSize / 2;
              circles.push(source`
                <circle
                  cx="${x}"
                  cy="${y}"
                  r="${radius}"
                  fill="url(#overlay)"
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
              <defs>
                <linearGradient
                  id="overlay"
                  x1="0"
                  y1="0"
                  x2="${size.w}"
                  y2="${size.h}"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stop-color="${color1}" />
                  <stop offset="50%" stop-color="${color2}" />
                  <stop offset="100%" stop-color="${color3}" />
                </linearGradient>
              </defs>
              <rect
                x="0"
                y="0"
                width="${size.w}"
                height="${size.h}"
                fill="${variant.colors.shade0}"
              />
              ${circles}
            </svg>
          `;

          return {
            path: `${variant.title.kebab}-${size.w}x${size.h}-${i + 1}.svg`,
            content: svg,
          };
        });
      }
    }
  },
  renderInstructions: listOutputFiles,
};

export default template;
