const {
  getSizesFromOptOrDefault,
  deepFlatten,
  colorSets: getColorSets,
  listOutputFiles,
} = require('@themerdev/utils');
const { createCanvas } = require('canvas');
const { Bezier } = require('bezier-js');

const render = (colors, options) => {
  try {
    var sizes = getSizesFromOptOrDefault(
      options['themer-wallpaper-curves-size'],
    );
  } catch (e) {
    return [Promise.reject(e.message)];
  }

  const colorSets = getColorSets(colors);

  return deepFlatten(
    sizes.map((size) =>
      colorSets.map(async (colorSet) => {
        const canvas = createCanvas(size.w, size.h);
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = colorSet.colors.shade0;
        ctx.fillRect(0, 0, size.w, size.h);

        const curve = new Bezier(
          { x: size.w / 2 - 100, y: size.h / 2 - 100 },
          { x: size.w / 2 + 100, y: size.h / 2 + 100 },
          { x: size.w / 2 - 100, y: size.h / 2 + 100 },
        );

        ctx.strokeStyle = `${colorSet.colors.shade7}03`;
        ctx.lineCap = 'round';

        for (let i = 128; i > 0; i--) {
          ctx.lineWidth = i;
          ctx.moveTo(curve.points[0].x, curve.points[0].y);
          ctx.quadraticCurveTo(
            curve.points[1].x,
            curve.points[1].y,
            curve.points[2].x,
            curve.points[2].y,
          );
          ctx.stroke();
        }

        // Fast but too small shadow blur
        // ctx.shadowBlur = 50;
        // ctx.shadowColor = colorSet.colors.shade7;

        /////////////////////
        // Slow noisy glow //
        /////////////////////

        // const { x: xMinMax, y: yMinMax } = curve.bbox();

        // const pixelSize = 1;

        // for (
        //   let x = xMinMax.min - 200;
        //   x <= xMinMax.max + 200;
        //   x += pixelSize
        // ) {
        //   for (
        //     let y = yMinMax.min - 200;
        //     y <= yMinMax.max + 200;
        //     y += pixelSize
        //   ) {
        //     const closest = curve.project({ x, y });
        //     const distance = Math.sqrt(
        //       Math.pow(x - closest.x, 2) + Math.pow(y - closest.y, 2),
        //     );
        //     const alpha = Math.max(
        //       0,
        //       Math.min(
        //         1,
        //         (1 - distance / Math.min(xMinMax.size, yMinMax.size)) *
        //           Math.random(),
        //       ),
        //     );
        //     ctx.fillStyle = `rgba(255,255,0,${alpha})`;
        //     ctx.fillRect(x, y, pixelSize, pixelSize);
        //   }
        // }

        return {
          name: `themer-wallpaper-curves-${colorSet.name}-${size.w}x${size.h}.png`,
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
