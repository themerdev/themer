import { source } from 'common-tags';
import { colorSetToVariants, FullVariant } from '../color-set/index.js';
import { listOutputFiles, Template, weightedRandom } from './index.js';

const template: Template = {
  name: 'Block Wave wallpaper',
  render: async function* (colorSet, options) {
    const colorWeights = new Map<keyof FullVariant, number>([
      ['accent0', 1],
      ['accent1', 1],
      ['accent2', 1],
      ['accent3', 1],
      ['accent4', 1],
      ['accent5', 1],
      ['accent6', 1],
      ['accent7', 1],
      ['shade0', 0],
      ['shade1', 8],
      ['shade2', 6],
      ['shade3', 4],
      ['shade4', 3],
      ['shade5', 2],
      ['shade6', 1],
      ['shade7', 1],
    ]);
    const variants = colorSetToVariants(colorSet);
    for (const variant of variants) {
      for (const size of options.wallpaperSizes) {
        const patternSize = size.w / Math.round(size.w / 36);
        const blockMaxSize = patternSize / 3;
        const blockMinSize = (blockMaxSize * 2) / 3;
        const blocks = [];
        for (let i = 0; i < size.w; i += patternSize) {
          for (let j = 0; j < size.h; j += patternSize) {
            let color = variant.colors[weightedRandom(colorWeights)];
            let xPosition = (i + patternSize / 2) / size.w;
            let yPosition = (j + patternSize / 2) / size.h;
            let positionScaleFactor = Math.abs(xPosition - yPosition);
            let blockSize =
              blockMaxSize -
              (blockMaxSize - blockMinSize) * positionScaleFactor;
            let padding = (patternSize - blockSize) / 2;
            blocks.push({
              x: i + padding,
              y: j + padding,
              w: blockSize,
              h: blockSize,
              c: color,
              g: Math.random() < 0.01,
            });
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
              <linearGradient id="overlay" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="${variant.colors.shade0}"/>
                <stop
                  offset="50%"
                  stop-color="${variant.colors.shade0}"
                  stop-opacity="0"
                />
                <stop offset="100%" stop-color="${variant.colors.shade0}"/>
              </linearGradient>
              <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <rect
              x="0"
              y="0"
              width="${size.w}"
              height="${size.h}"
              fill="${variant.colors.shade0}"
            />
            ${blocks.map(
              (block) => source`
                <rect
                  x="${block.x}"
                  y="${block.y}"
                  width="${block.w}"
                  height="${block.h}"
                  fill="${block.c}"
                  rx="2"
                  ry="2"
                  ${block.g ? `filter="url(#glow)"` : ''}
                />
              `,
            )}
            <rect
              x="0"
              y="0"
              width="${size.w}"
              height="${size.h}"
              fill="url(#overlay)"
            />
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
