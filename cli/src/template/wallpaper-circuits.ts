import { listOutputFiles, Template, weightedRandom } from './index.js';
import { colorSetToVariants } from '../color-set/index.js';
import { source } from 'common-tags';

const BORDER_SIZE = 75;
const GRID_CELL_SIZE = 30;
const END_CAP_SIZE = 5;
const FIND_PATH_TRY_COUNT = 4;
const JITTER = 0.5;

class Point {
  static add(a: Point, b: Point) {
    return new Point(a.x + b.x, a.y + b.y);
  }

  static subtract(a: Point, b: Point) {
    return new Point(a.x - b.x, a.y - b.y);
  }

  clone() {
    return new Point(this.x, this.y);
  }

  constructor(readonly x: number, readonly y: number) {}
}

const template: Template = {
  name: 'Circuits wallpaper',
  render: async function* (colorSet, options) {
    const variants = colorSetToVariants(colorSet);
    for (const variant of variants) {
      for (const size of options.wallpaperSizes) {
        // Calculate the drawing area
        const columnCount = Math.floor(
          (size.w - BORDER_SIZE * 2) / GRID_CELL_SIZE,
        );
        const rowCount = Math.floor(
          (size.h - BORDER_SIZE * 2) / GRID_CELL_SIZE,
        );
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

        function getNext(start: Point, previous: Point | null) {
          const options = [
            new Point(0, -1),
            new Point(1, 0),
            new Point(0, 1),
            new Point(-1, 0),
          ].filter((option) =>
            previous
              ? !(option.x === previous.x && option.y === previous.y)
              : true,
          );
          for (let tryCount = 0; tryCount < FIND_PATH_TRY_COUNT; tryCount++) {
            const proposed = Point.add(
              start,
              options[Math.floor(Math.random() * options.length)]!,
            );
            if (
              gridCellState.has(proposed.x) &&
              gridCellState.get(proposed.x).has(proposed.y) &&
              gridCellState.get(proposed.x).get(proposed.y) === null
            ) {
              return proposed;
            }
          }
          return null;
        }

        function jitter() {
          return (Math.random() - 0.5) * END_CAP_SIZE * JITTER;
        }

        function getCenter(point: Point) {
          return new Point(
            gridOriginX +
              point.x * GRID_CELL_SIZE +
              GRID_CELL_SIZE / 2 +
              jitter(),
            gridOriginY +
              point.y * GRID_CELL_SIZE +
              GRID_CELL_SIZE / 2 +
              jitter(),
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
              while (
                (next = getNext(
                  current,
                  previous && Point.subtract(previous, current),
                )) !== null
              ) {
                points.push(next.clone());
                gridCellState.get(next.x).set(next.y, true);
                previous = current;
                current = next;
              }
              paths.push(points);
            }
          }
        }

        function getStrokeStyle() {
          return weightedRandom(
            new Map([
              [variant.colors.shade2, 50],
              [variant.colors.accent0, 1],
              [variant.colors.accent1, 1],
              [variant.colors.accent2, 1],
              [variant.colors.accent3, 1],
              [variant.colors.accent4, 1],
              [variant.colors.accent5, 1],
              [variant.colors.accent6, 1],
              [variant.colors.accent7, 1],
            ]),
          );
        }

        const elements: string[] = [];

        paths.forEach((points) => {
          const strokeColor =
            points.length > 1 ? getStrokeStyle() : variant.colors.shade1;
          elements.push(source`
            <path
              fill="none"
              stroke="${strokeColor}"
              stroke-width="2.5"
              d="${points
                .map((point, i) => {
                  const c = getCenter(point);
                  return i === 0 ? `M${c.x},${c.y}` : `L${c.x},${c.y}`;
                })
                .join(' ')}"
            />
          `);

          const startCenter = getCenter(points[0]!);
          elements.push(source`
            <circle
              cx="${startCenter.x}"
              cy="${startCenter.y}"
              r="${END_CAP_SIZE}"
              fill="${variant.colors.shade0}"
              stroke="${strokeColor}"
              stroke-width="2.5"
            />
          `);

          if (points.length > 1) {
            const endCenter = getCenter(points[points.length - 1]!);
            elements.push(source`
            <circle
              cx="${endCenter.x}"
              cy="${endCenter.y}"
              r="${END_CAP_SIZE}"
              fill="${variant.colors.shade0}"
              stroke="${strokeColor}"
              stroke-width="2.5"
            />
          `);
          }
        });

        const svg = source`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${size.w}"
            height="${size.h}"
            viewBox="0 0 ${size.w} ${size.h}"
          >
            <rect
              x="0"
              y="0"
              width="${size.w}"
              height="${size.h}"
              fill="${variant.colors.shade0}"
            />
            ${elements}
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
