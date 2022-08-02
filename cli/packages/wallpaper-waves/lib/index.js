const {
  getSizesFromOptOrDefault,
  deepFlatten,
  colorSets: getColorSets,
  listOutputFiles,
} = require('@themerdev/utils');
const { createCanvas, loadImage } = require('canvas');
const colorSteps = require('color-steps');

function randBetween(min, max) {
  return Math.random() * (max - min) + min;
}

// function randIntBetween(min, max) {
//   return Math.floor(Math.random() * (max + 1 - min) + min);
// }

// function pointsBetween(start, end, count) {
//   return [
//     ...Array(count - 1)
//       .fill(start)
//       .map((start, i) => ({
//         x: start.x + ((end.x - start.x) / (count - 1)) * i,
//         y: start.y + ((end.y - start.y) / (count - 1)) * i,
//       })),
//     end,
//   ];
// }

function pointsBetween(start, end, totalCount) {
  const step = (end - start) / (totalCount - 1);
  return [
    start,
    ...Array(totalCount - 2)
      .fill(null)
      .map((_, i) => step * (i + 1)),
    end,
  ];
}

const render = (colors, options) => {
  try {
    var sizes = getSizesFromOptOrDefault(
      options['themer-wallpaper-waves-size'],
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

        /*
        const containerSize = Math.min(size.w, size.h) / 3;
        const containerX = size.w / 2 - containerSize / 2,
          containerY = size.h / 2 - containerSize / 2;

        const rowCount = 8;
        const rowHeight = containerSize / rowCount;
        const amplitude = rowHeight * 0.9;

        ctx.fillStyle = colorSet.colors.shade0;
        ctx.fillRect(0, 0, size.w, size.h);

        colorSteps(
          colorSet.colors.shade0,
          colorSet.colors.accent0,
          rowCount - 1,
        ).forEach((color, rowIdx) => {
          const rowY = containerY + rowIdx * rowHeight;
          ctx.beginPath();
          ctx.moveTo(containerX, rowY);
          const colCount = randIntBetween(3, 7);
          const colSize = containerSize / colCount;
          let lastControlPointY = null;
          for (let col = 1; col <= colCount; col++) {
            let controlPointY = randBetween(rowY - amplitude, rowY + amplitude);
            if (lastControlPointY) {
              if (lastControlPointY > rowY && controlPointY > rowY) {
                controlPointY -= (controlPointY - rowY) * 2;
              } else if (lastControlPointY < rowY && controlPointY < rowY) {
                controlPointY += (rowY - controlPointY) * 2;
              }
            }
            ctx.quadraticCurveTo(
              containerX + colSize * (col - 0.5),
              controlPointY,
              containerX + colSize * col,
              rowY,
            );
            lastControlPointY = controlPointY;
          }
          ctx.lineTo(containerX + containerSize, containerY + containerSize);
          ctx.lineTo(containerX, containerY + containerSize);
          ctx.closePath();
          ctx.fillStyle = color;
          ctx.fill();
        });
        */

        const containerSize = (Math.min(size.w, size.h) * 2) / 3;
        const containerX = size.w / 2 - containerSize / 2,
          containerY = size.h / 2 - containerSize / 2;
        const rowCount = 8;
        const rowHeight = containerSize / rowCount;
        const shadeCount = rowCount - 1;
        const amplitude = rowHeight * 1.5;
        const leftControlYs = pointsBetween(
          0,
          randBetween(-amplitude, amplitude),
          shadeCount,
        );
        const rightControlYs = pointsBetween(
          0,
          randBetween(-amplitude, amplitude),
          shadeCount,
        );
        const leftControlX = containerX + containerSize / 3;
        const rightControlX = containerX + (containerSize * 2) / 3;

        function waves(clipPathId, accentColor) {
          return `
            <g clip-path="url(#${clipPathId})">
              ${colorSteps(colorSet.colors.shade0, accentColor, shadeCount).map(
                (color, i) => {
                  const rowY = containerY + rowHeight * i;
                  const rght = containerX + containerSize;
                  return `
                  <path
                    d="
                      M${containerX},${rowY}
                      C
                        ${leftControlX} ${rowY + leftControlYs[i]},
                        ${rightControlX} ${rowY + rightControlYs[i]},
                        ${rght} ${rowY}
                      l0,${rowHeight * 2}
                      l${containerSize * -1},0
                      Z
                    "
                    fill="${color}"
                  />
                `;
                },
              )}
            </g>
          `;
        }

        const svg = `
          <svg
            width="${size.w}"
            height="${size.h}"
            viewBox="0 0 ${size.w} ${size.h}"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="left">
                <rect
                  x="${containerX}"
                  y="${containerY}"
                  width="${containerSize / 3 - 20}"
                  height="${containerSize}"
                />
              </clipPath>
              <clipPath id="center">
                <rect
                  x="${containerX + containerSize / 3 + 20}"
                  y="${containerY}"
                  width="${containerSize / 3 - 40}"
                  height="${containerSize}"
                />
              </clipPath>
              <clipPath id="right">
                <rect
                  x="${containerX + (containerSize * 2) / 3 + 20}"
                  y="${containerY}"
                  width="${containerSize / 3 - 20}"
                  height="${containerSize}"
                />
              </clipPath>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="${
              colorSet.colors.shade0
            }" />
            ${waves('left', colorSet.colors.accent0)}
            ${waves('center', colorSet.colors.accent2)}
            ${waves('right', colorSet.colors.accent7)}
          </svg>
        `;

        const url = `data:image/svg+xml;base64,${Buffer.from(
          svg,
          'utf8',
        ).toString('base64')}`;
        const img = await loadImage(url);
        ctx.drawImage(img, 0, 0);

        return {
          name: `themer-wallpaper-waves-${colorSet.name}-${size.w}x${size.h}.png`,
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
