import { listOutputFiles, Template } from './index.js';
import { Accents, colorSetToVariants } from '../color-set/index.js';
import { source } from 'common-tags';

const SIZE = 100;
const DIAGONAL = Math.sqrt(2 * Math.pow(SIZE, 2));

function anchoredRandom(anchor: number, factor = 3) {
  return (anchor * (factor - 1) + Math.random()) / factor;
}

function randomColorKey(anchor: number): keyof Accents {
  const keys: (keyof Accents)[] = [
    'accent0',
    'accent1',
    'accent2',
    'accent3',
    'accent4',
    'accent5',
    'accent6',
    'accent7',
  ];
  return keys[Math.round(anchoredRandom(anchor) * keys.length) % keys.length]!;
}

function minRandom(min: number) {
  return min + Math.random() * (1 - min);
}

const template: Template = {
  name: 'Diamonds wallpaper',
  render: async function* (colorSet, options) {
    const variants = colorSetToVariants(colorSet);
    for (const variant of variants) {
      for (const size of options.wallpaperSizes) {
        const rowCount = Math.ceil(size.h / (DIAGONAL / 2));
        const columnCount = Math.ceil(size.w / DIAGONAL);

        const paths = [];
        for (let i = 0; i <= rowCount; i++) {
          for (let j = 0; j <= columnCount; j++) {
            const cx = j * DIAGONAL + (DIAGONAL / 2) * (i % 2);
            const cy = (i * DIAGONAL) / 2;
            const anchoredRandomColorKey = () =>
              randomColorKey((i / rowCount + j / columnCount) / 2);
            if (Math.random() < 0.3) {
              paths.push(source`
                <path
                  d="
                    M${cx},${cy - DIAGONAL / 2}
                    l${DIAGONAL / 2},${DIAGONAL / 2}
                    l${DIAGONAL / -2},${DIAGONAL / 2}
                    l${DIAGONAL / -2},${DIAGONAL / -2}
                    z
                  "
                  fill="${variant.colors[anchoredRandomColorKey()]}"
                  opacity="${minRandom(0.2)}"
                  shape-rendering="crispEdges"
                />
              `);
            } else if (Math.random() < 0.1) {
              paths.push(source`
                <path
                  d="
                    M${cx - DIAGONAL / 2},${cy}
                    l${DIAGONAL / 2},${DIAGONAL / -2}
                    l${DIAGONAL / 2},${DIAGONAL / 2}
                    z
                  "
                  fill="${variant.colors[anchoredRandomColorKey()]}"
                  opacity="${minRandom(0.2)}"
                  shape-rendering="crispEdges"
                />
                <path
                  d="
                    M${cx - DIAGONAL / 2},${cy}
                    l${DIAGONAL},0
                    l${DIAGONAL / -2},${DIAGONAL / 2}
                    z
                  "
                  fill="${variant.colors[anchoredRandomColorKey()]}"
                  opacity="${minRandom(0.2)}"
                  shape-rendering="crispEdges"
                />
              `);
            } else {
              paths.push(source`
                <path
                  d="
                    M${cx},${cy - DIAGONAL / 2}
                    l0,${DIAGONAL}
                    l${DIAGONAL / -2},${DIAGONAL / -2}
                    z
                  "
                  fill="${variant.colors[anchoredRandomColorKey()]}"
                  opacity="${minRandom(0.2)}"
                  shape-rendering="crispEdges"
                />
                <path
                  d="
                    M${cx},${cy - DIAGONAL / 2}
                    l${DIAGONAL / 2},${DIAGONAL / 2}
                    l${DIAGONAL / -2},${DIAGONAL / 2}
                    z
                  "
                  fill="${variant.colors[anchoredRandomColorKey()]}"
                  opacity="${minRandom(0.2)}"
                  shape-rendering="crispEdges"  
                />
              `);
            }
          }
        }

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
            ${paths}
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
