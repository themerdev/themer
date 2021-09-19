const {
  getSizesFromOptOrDefault,
  colorSets: getColorSets,
  deepFlatten,
  listOutputFiles,
  weightedRandom,
} = require('@themerdev/utils');
const { createCanvas } = require('canvas');
const Color = require('color');

const render = (colors, options) => {
  try {
    var sizes = getSizesFromOptOrDefault(
      options['themer-wallpaper-block-wave-size'],
      36,
    );
  } catch (e) {
    return [Promise.reject(e.message)];
  }

  const colorWeights = new Map([
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

  const colorSets = getColorSets(colors);

  return deepFlatten(
    colorSets.map((colorSet) =>
      sizes
        .map((size) => {
          let blockMaxSize = size.s / 3;
          let blockMinSize = (blockMaxSize * 2) / 3;
          let blocks = [];
          for (let i = 0; i < size.w; i += size.s) {
            for (let j = 0; j < size.h; j += size.s) {
              let color = colorSet.colors[weightedRandom(colorWeights)];
              let xPosition = (i + size.s / 2) / size.w;
              let yPosition = (j + size.s / 2) / size.h;
              let positionScaleFactor = Math.abs(xPosition - yPosition);
              let blockSize =
                blockMaxSize -
                (blockMaxSize - blockMinSize) * positionScaleFactor;
              let padding = (size.s - blockSize) / 2;
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
          return { size: size, blocks: blocks };
        })
        .map(async ({ size, blocks }) => {
          const canvas = createCanvas(size.w, size.h);
          const ctx = canvas.getContext('2d');

          ctx.fillStyle = colorSet.colors.shade0;
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
          gradient.addColorStop(0, colorSet.colors.shade0);
          gradient.addColorStop(
            0.5,
            Color(colorSet.colors.shade0).alpha(0).rgb().string(),
          );
          gradient.addColorStop(1, colorSet.colors.shade0);
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, size.w, size.h);

          return {
            name: `themer-wallpaper-block-wave-${colorSet.name}-${size.w}x${size.h}.png`,
            contents: Buffer.from(
              canvas.toDataURL().replace('data:image/png;base64,', ''),
              'base64',
            ),
          };
        }),
    ),
  );
};

module.exports = {
  render,
  renderInstructions: listOutputFiles,
};
