import { createCanvas } from 'canvas';
import Color from 'color';
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
        const canvas = createCanvas(size.w, size.h);
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = variant.colors.shade0;
        ctx.fillRect(0, 0, size.w, size.h);

        blocks.forEach(({ x, y, w, h, c, g }) => {
          const radius = 2;
          const right = x + w;
          const bottom = y + h;
          ctx.fillStyle = c;
          ctx.shadowColor = c;
          ctx.shadowBlur = g ? 5 : 0;
          ctx.beginPath();
          ctx.moveTo(x + radius, y);
          ctx.lineTo(right - radius, y);
          ctx.quadraticCurveTo(right, y, right, y + radius);
          ctx.lineTo(right, y + h - radius);
          ctx.quadraticCurveTo(right, bottom, right - radius, bottom);
          ctx.lineTo(x + radius, bottom);
          ctx.quadraticCurveTo(x, bottom, x, bottom - radius);
          ctx.lineTo(x, y + radius);
          ctx.quadraticCurveTo(x, y, x + radius, y);
          ctx.fill();
        });

        const gradient = ctx.createLinearGradient(size.w, 0, 0, size.h);
        gradient.addColorStop(0, variant.colors.shade0);
        gradient.addColorStop(
          0.5,
          Color(variant.colors.shade0).alpha(0).rgb().string(),
        );
        gradient.addColorStop(1, variant.colors.shade0);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, size.w, size.h);

        yield {
          path: `${variant.title.kebab}-${size.w}x${size.h}.png`,
          content: Buffer.from(
            canvas.toDataURL().replace('data:image/png;base64,', ''),
            'base64',
          ),
        };
      }
    }
  },
  renderInstructions: listOutputFiles,
};

export default template;
