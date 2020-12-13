const {
  getSizesFromOptOrDefault,
  deepFlatten,
  colorSets: getColorSets,
  listOutputFiles,
  weightedRandom,
} = require('@themer/utils');
const { createCanvas } = require('canvas');

const BORDER_SIZE = 75;
const GRID_CELL_SIZE = 30;
const END_CAP_SIZE = 5;
const FIND_PATH_TRY_COUNT = 4;
const JITTER = 0.5;

class Point {
  static add(a, b) {
    return new Point(a.x + b.x, a.y + b.y);
  }

  static subtract(a, b) {
    return new Point(a.x - b.x, a.y - b.y);
  }

  clone() {
    return new Point(this.x, this.y);
  }

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const render = (colors, options) => {
  try {
    var sizes = getSizesFromOptOrDefault(
      options['themer-wallpaper-circuits-size']
    );
  } catch (e) {
    return [Promise.reject(e.message)];
  }

  const colorSets = getColorSets(colors);

  return deepFlatten(
    sizes.map(
      size => colorSets.map(async colorSet => {
        const canvas = createCanvas(size.w, size.h);
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = colorSet.colors.shade0;
        ctx.fillRect(0, 0, size.w, size.h);

        // Calculate the drawing area
        const columnCount = Math.floor((size.w - BORDER_SIZE * 2) / GRID_CELL_SIZE);
        const rowCount = Math.floor((size.h - BORDER_SIZE * 2) / GRID_CELL_SIZE);
        const gridWidth = columnCount * GRID_CELL_SIZE;
        const gridHeight = rowCount * GRID_CELL_SIZE;
        const gridOriginX = (size.w - gridWidth) / 2;
        const gridOriginY = (size.h - gridHeight) / 2;

        const gridCellState = new Map();
        for (let i = 0; i < columnCount; i++) {
          const column = new Map();
          for (let j = 0; j < rowCount; j++) {
            column.set(j, null);
          }
          gridCellState.set(i, column);
        }

        function getNext(start, previous) {
          const options = [
            new Point(0, -1),
            new Point(1, 0),
            new Point(0, 1),
            new Point(-1, 0),
          ].filter(option => previous ? !(option.x === previous.x && option.y === previous.y) : true);
          for (let tryCount = 0; tryCount < FIND_PATH_TRY_COUNT; tryCount++) {
            const proposed = Point.add(start, options[Math.floor(Math.random() * options.length)]);
            if (gridCellState.has(proposed.x) && gridCellState.get(proposed.x).has(proposed.y) && gridCellState.get(proposed.x).get(proposed.y) === null) {
              return proposed;
            }
          }
          return null;
        }

        function jitter() {
          return (Math.random() - 0.5) * END_CAP_SIZE * JITTER;
        }

        function getCenter(point) {
          return new Point(
            gridOriginX + point.x * GRID_CELL_SIZE + GRID_CELL_SIZE / 2 + jitter(),
            gridOriginY + point.y * GRID_CELL_SIZE + GRID_CELL_SIZE / 2 + jitter(),
          );
        }

        const paths = [];
        
        for (const [x, column] of gridCellState.entries()) {
          for (const [y, cell] of column.entries()) {
            if (cell === null) {
              let previous = null;
              let current = new Point(x, y);
              const points = [current.clone()];
              gridCellState.get(current.x).set(current.y, true);
              let next;
              while ((next = getNext(current, previous && Point.subtract(previous, current))) !== null) {
                points.push(next.clone());
                gridCellState.get(next.x).set(next.y, true);
                previous = current;
                current = next;
              }
              paths.push(points);
            }
          }
        }

        function getStrokeStyle () {
          return weightedRandom(new Map([
            [colorSet.colors.shade2, 50],
            [colorSet.colors.accent0, 1],
            [colorSet.colors.accent1, 1],
            [colorSet.colors.accent2, 1],
            [colorSet.colors.accent3, 1],
            [colorSet.colors.accent4, 1],
            [colorSet.colors.accent5, 1],
            [colorSet.colors.accent6, 1],
            [colorSet.colors.accent7, 1],
          ]));
        }

        paths.forEach(points => {
          // Draw connecting path
          ctx.strokeStyle = points.length > 1 ? getStrokeStyle() : colorSet.colors.shade1;
          ctx.lineWidth = 2.5;

          ctx.beginPath();
          points.forEach((point, i) => {
            const center = getCenter(point);
            if (i === 0) {
              ctx.moveTo(center.x, center.y);
            } else {
              ctx.lineTo(center.x, center.y);
            }
          });
          ctx.stroke();

          // Draw endpoints
          ctx.fillStyle = colorSet.colors.shade0;

          const startCenter = getCenter(points[0]);
          ctx.beginPath();
          ctx.arc(startCenter.x, startCenter.y, END_CAP_SIZE, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          if (points.length > 1) {
            const endCenter = getCenter(points[points.length - 1]);
            ctx.beginPath();
            ctx.arc(endCenter.x, endCenter.y, END_CAP_SIZE, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
          }
        });

        return {
          name: `themer-wallpaper-circuits-${colorSet.name}-${size.w}x${size.h}.png`,
          contents: Buffer.from(
            canvas.toDataURL().replace('data:image/png;base64,', ''),
            'base64',
          ),
        };
      }),
    ),
  );
}

module.exports = {
  render,
  renderInstructions: listOutputFiles,
};
