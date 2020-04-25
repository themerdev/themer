const {
  getSizesFromOptOrDefault,
  deepFlatten,
  colorSets: getColorSets,
  listOutputFiles,
} = require('@themer/utils');

const SIZE = 100;
const DIAGONAL = Math.sqrt(2 * Math.pow(SIZE, 2));

function anchoredRandom(anchor, factor = 3) {
  return (anchor * (factor - 1) + Math.random()) / factor;
}

function randomColorKey(anchor) {
  if (Math.random < 0.5) {
    return `shade${1 + Math.round(anchoredRandom(anchor) * 7) % 7}`;
  } else {
    return `accent${Math.round(anchoredRandom(anchor) * 8) % 8}`;
  }
}

function minRandom(min) {
  return min + Math.random() * (1 - min);
}

function* diamonds(rowCount, columnCount, colorSet) {
  for (let i = 0; i <= rowCount; i++) {
    for (let j = 0; j <= columnCount; j++) {
      const cx = j * DIAGONAL + ((DIAGONAL / 2) * (i % 2));
      const cy = i * DIAGONAL / 2;
      const anchoredRandomColorKey = () => randomColorKey((i / rowCount + j / columnCount) / 2);
      if (Math.random() < 0.3) {
        yield `
          <path
            d="
              M${cx},${cy - DIAGONAL / 2}
              l${DIAGONAL/2},${DIAGONAL/2}
              l${DIAGONAL/-2},${DIAGONAL/2}
              l${DIAGONAL/-2},${DIAGONAL/-2}
              z
            "
            fill="${colorSet.colors[anchoredRandomColorKey()]}"
            opacity="${minRandom(0.2)}"
          />
        `;
      } else if (Math.random() < 0.1) {
        yield `
          <path
            d="
              M${cx - DIAGONAL / 2},${cy}
              l${DIAGONAL/2},${DIAGONAL/-2}
              l${DIAGONAL/2},${DIAGONAL/2}
              z
            "
            fill="${colorSet.colors[anchoredRandomColorKey()]}"
            opacity="${minRandom(0.2)}"
          />
          <path
            d="
              M${cx - DIAGONAL / 2},${cy}
              l${DIAGONAL},0
              l${DIAGONAL/-2},${DIAGONAL/2}
              z
            "
            fill="${colorSet.colors[anchoredRandomColorKey()]}"
            opacity="${minRandom(0.2)}"
          />
        `;
      } else {
        yield `
          <path
            d="
              M${cx},${cy - DIAGONAL / 2}
              l0,${DIAGONAL}
              l${DIAGONAL/-2},${DIAGONAL/-2}
              z
            "
            fill="${colorSet.colors[anchoredRandomColorKey()]}"
            opacity="${minRandom(0.2)}"
          />
          <path
            d="
              M${cx},${cy - DIAGONAL / 2}
              l${DIAGONAL/2},${DIAGONAL/2}
              l${DIAGONAL/-2},${DIAGONAL/2}
              z
            "
            fill="${colorSet.colors[anchoredRandomColorKey()]}"
            opacity="${minRandom(0.2)}"
          />
        `;
      }
    }
  }
}

const render = (colors, options) => {
  try {
    var sizes = getSizesFromOptOrDefault(
      options['themer-wallpaper-diamonds-size']
    );
  } catch (e) {
    return [Promise.reject(e.message)];
  }

  const colorSets = getColorSets(colors);

  return deepFlatten(
    sizes.map(
      size => colorSets.map(colorSet => {
        const rowCount = Math.ceil(size.h / (DIAGONAL / 2));
        const columnCount = Math.ceil(size.w / DIAGONAL);
        return Promise.resolve({
          name: `themer-wallpaper-diamonds-${colorSet.name}-${size.w}x${size.h}.svg`,
          contents: Buffer.from(
            `
              <svg width="${size.w}" height="${size.h}" viewBox="0 0 ${size.w} ${size.h}" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="${size.w}" height="${size.h}" fill="${colorSet.colors.shade0}" />
                ${Array.from(diamonds(rowCount, columnCount, colorSet)).join('\n')}
              </svg>
            `,
            'utf8',
          ),
        });
      }),
    ),
  );
}

module.exports = {
  render,
  renderInstructions: listOutputFiles,
};
