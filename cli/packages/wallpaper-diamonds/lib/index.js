const {
  getSizesFromOptOrDefault,
  deepFlatten,
  colorSets: getColorSets,
  listOutputFiles,
} = require('@themer/utils');
const { createCanvas } = require('canvas');
const Color = require('color');

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
        yield {
          color: colorSet.colors[anchoredRandomColorKey()],
          opacity: minRandom(0.2),
          commands: [
            { command: 'moveTo', args: [cx, cy - DIAGONAL / 2] },
            { command: 'lineTo', args: [cx + DIAGONAL / 2, cy] },
            { command: 'lineTo', args: [cx, cy + DIAGONAL / 2] },
            { command: 'lineTo', args: [cx - DIAGONAL / 2, cy] },
            { command: 'closePath', args: [] },
          ],
        };
      } else if (Math.random() < 0.1) {
        yield {
          color: colorSet.colors[anchoredRandomColorKey()],
          opacity: minRandom(0.2),
          commands: [
            { command: 'moveTo', args: [cx - DIAGONAL / 2, cy] },
            { command: 'lineTo', args: [cx, cy - DIAGONAL / 2] },
            { command: 'lineTo', args: [cx + DIAGONAL / 2, cy] },
            { command: 'closePath', args: [] },
          ],
        };
        yield {
          color: colorSet.colors[anchoredRandomColorKey()],
          opacity: minRandom(0.2),
          commands: [
            { command: 'moveTo', args: [cx - DIAGONAL / 2, cy] },
            { command: 'lineTo', args: [cx + DIAGONAL / 2, cy] },
            { command: 'lineTo', args: [cx, cy + DIAGONAL / 2] },
            { command: 'closePath', args: [] },
          ],
        };
      } else {
        yield {
          color: colorSet.colors[anchoredRandomColorKey()],
          opacity: minRandom(0.2),
          commands: [
            { command: 'moveTo', args: [cx, cy - DIAGONAL / 2] },
            { command: 'lineTo', args: [cx, cy + DIAGONAL / 2] },
            { command: 'lineTo', args: [cx - DIAGONAL / 2, cy] },
            { command: 'closePath', args: [] },
          ],
        };
        yield {
          color: colorSet.colors[anchoredRandomColorKey()],
          opacity: minRandom(0.2),
          commands: [
            { command: 'moveTo', args: [cx, cy - DIAGONAL / 2] },
            { command: 'lineTo', args: [cx + DIAGONAL / 2, cy] },
            { command: 'lineTo', args: [cx, cy + DIAGONAL / 2] },
            { command: 'closePath', args: [] },
          ],
        }
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
      size => colorSets.map(
        async colorSet => {
          const rowCount = Math.ceil(size.h / (DIAGONAL / 2));
          const columnCount = Math.ceil(size.w / DIAGONAL);
          const canvas = createCanvas(size.w, size.h);
          const ctx = canvas.getContext('2d');

          ctx.fillStyle = colorSet.colors.shade0;
          ctx.fillRect(0, 0, size.w, size.h);

          for (const diamond of diamonds(rowCount, columnCount, colorSet)) {
            ctx.beginPath();
            ctx.fillStyle = Color(diamond.color).alpha(diamond.opacity).rgb().string();
            for (const { command, args } of diamond.commands) {
              ctx[command](...args);
            }
            ctx.fill();
          }

          return {
            name: `themer-wallpaper-diamonds-${colorSet.name}-${size.w}x${size.h}.png`,
            contents: Buffer.from(canvas.toDataURL().replace('data:image/png;base64,', ''), 'base64'),
          };
        }
      ),
    ),
  );
}

module.exports = {
  render,
  renderInstructions: listOutputFiles,
};
