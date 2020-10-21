const {
  getSizesFromOptOrDefault,
  deepFlatten,
  colorSets: getColorSets,
  listOutputFiles,
} = require('@themer/utils');
const { createCanvas } = require('canvas');
const { scalePow } = require('d3-scale');
const { Perlin2 } = require('tumult');

const render = (colors, options) => {
  try {
    var sizes = getSizesFromOptOrDefault(
      options['themer-wallpaper-dot-grid-size'],
      36,
    );
  } catch (e) {
    return [Promise.reject(e.message)];
  }

  const colorSets = getColorSets(colors);

  return deepFlatten(
    sizes.map(
      size => {
        const perlin = new Perlin2();
        return colorSets.map(
          colorSet => {
            const colorPairs = [{
              color1: colorSet.colors.accent3,
              color2: colorSet.colors.accent4,
              color3: colorSet.colors.accent6,
            }, {
              color1: colorSet.colors.accent1,
              color2: colorSet.colors.accent2,
              color3: colorSet.colors.accent7,
            }];
            return colorPairs.map(async ({color1, color2, color3}, i) => {
              const canvas = createCanvas(size.w, size.h);
              const ctx = canvas.getContext('2d');
  
              const scale = scalePow()
                .domain([0, 1])
                .range([size.s * 0.1, size.s * 0.95])
                .exponent(2 / 3)
                .clamp(true);
  
              ctx.fillStyle = colorSet.colors.shade0;
              ctx.fillRect(0, 0, size.w, size.h);
  
              const gradient = ctx.createLinearGradient(0, 0, size.w, size.h);
              gradient.addColorStop(0, color1);
              gradient.addColorStop(0.5, color2);
              gradient.addColorStop(1, color3);
              ctx.fillStyle = gradient;
              for (let i = 0; i < size.h; i += size.s) {
                for (let j = 0; j < size.w; j += size.s) {
                  const denominator = Math.min(size.w, size.h) / size.s * 21;
                  const rand = perlin.gen(j / denominator, i / denominator);
                  const radius = scale(rand) / 2;
                  const x = j + size.s / 2;
                  const y = i + size.s / 2;
                  ctx.beginPath();
                  ctx.arc(x, y, radius, 0, 2 * Math.PI);
                  ctx.fill();
                }
              }
  
              return {
                name: `themer-wallpaper-dot-grid-${colorSet.name}-${size.w}x${size.h}-${i+1}.png`,
                contents: Buffer.from(
                  canvas.toDataURL().replace('data:image/png;base64,', ''),
                  'base64'
                ),
              };
            });
          },
        );
      },
    ),
  );
}

module.exports = {
  render,
  renderInstructions: listOutputFiles,
};
