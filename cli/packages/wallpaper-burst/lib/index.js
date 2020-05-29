const {
  getSizesFromOptOrDefault,
  deepFlatten,
  colorSets: getColorSets,
  listOutputFiles,
} = require('@themer/utils');

const SIZE = 70;
const MAX_DISTANCE = SIZE * 5;
const LEAK_FACTOR = 0.25;

const getClampedPoint = (x1, y1, maxX, maxY) => {
  const distance = Math.sqrt(Math.pow(maxX - x1, 2) + Math.pow(maxY - y1, 2));
  const x2 = x1 + MAX_DISTANCE / distance * (maxX - x1);
  const y2 = y1 + MAX_DISTANCE / distance * (maxY - y1);
  const croppedDistance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return croppedDistance > distance ? [maxX, maxY] : [x2, y2];
}

const renderImage = (size, colorSet) => {
  const focalPoint = {
    x: size.w * 0.5,
    y: size.h * 0.5,
  }
  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${size.w}"
      height="${size.h}"
      viewBox="0 0 ${size.w} ${size.h}"
    >
      <defs>
        <radialGradient id="burst">
          <stop
            offset="0%"
            stop-color="${colorSet.name === 'dark' ? colorSet.colors.shade1 : colorSet.colors.shade0}"
            stop-opacity="0.25"
          />
          <stop
            offset="70%"
            stop-color="${colorSet.name === 'dark' ? colorSet.colors.shade0 : colorSet.colors.shade1}"
          />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="${colorSet.colors.shade0}" />
      <rect x="0" y="0" width="100%" height="100%" fill="url(#burst)" />
      ${
        Array(Math.round(size.w / SIZE))
          .fill(null)
          .map((_, i, { length: xCount }) =>
            Array(Math.round(size.h / SIZE))
              .fill(null)
              .map((_, j, { length: yCount }) => {
                const cellWidth = size.w / xCount;
                const cellHeight = size.h / yCount;
                const x1 = i * cellWidth + Math.random() * cellWidth;
                const y1 = j * cellHeight + Math.random() * cellHeight;
                const [x2, y2] = getClampedPoint(x1, y1, focalPoint.x, focalPoint.y);
                const accent = (Math.round(i / xCount * 8 + (Math.random() * LEAK_FACTOR * 2 - LEAK_FACTOR)) + 8) % 8;
                const color = colorSet.colors[`accent${accent}`];
                const id = `${i}-${j}`;
                return `
                  <defs>
                    <linearGradient
                      id="${id}"
                      gradientUnits="userSpaceOnUse"
                      x1="${x1}"
                      y1="${y1}"
                      x2="${x2}"
                      y2="${y2}"
                    >
                      <stop offset="2%" stop-color="${colorSet.colors.shade7}" />
                      <stop offset="30%" stop-color="${color}" />
                      <stop offset="50%" stop-color="${color}" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                  <line
                    x1="${x1}"
                    y1="${y1}"
                    x2="${x2}"
                    y2="${y2}"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke="url(#${id})"
                  />
                `;
                }
              )
              .join('\n'),
          )
          .join('\n')
      }
    </svg>
  `;
}

const render = (colors, options) => {
  try {
    var sizes = getSizesFromOptOrDefault(
      options['themer-wallpaper-burst-size']
    );
  } catch (e) {
    return [Promise.reject(e.message)];
  }

  const colorSets = getColorSets(colors);

  return deepFlatten(
    sizes.map(
      size => colorSets.map(colorSet => Promise.resolve({
        name: `themer-wallpaper-burst-${colorSet.name}-${size.w}x${size.h}.svg`,
        contents: Buffer.from(renderImage(size, colorSet), 'utf8'),
      })),
    ),
  );
}

module.exports = {
  render,
  renderInstructions: listOutputFiles,
};
