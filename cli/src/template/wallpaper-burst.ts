import { listOutputFiles, Template } from './index.js';
import { Accents, colorSetToVariants } from '../color-set/index.js';
import { source } from 'common-tags';

const SIZE = 70;
const MAX_DISTANCE = SIZE * 5;
const LEAK_FACTOR = 0.25;

function getClampedPoint(
  x1: number,
  y1: number,
  maxX: number,
  maxY: number,
): [number, number] {
  const distance = Math.sqrt(Math.pow(maxX - x1, 2) + Math.pow(maxY - y1, 2));
  const x2 = x1 + (MAX_DISTANCE / distance) * (maxX - x1);
  const y2 = y1 + (MAX_DISTANCE / distance) * (maxY - y1);
  const croppedDistance = Math.sqrt(
    Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2),
  );
  return croppedDistance > distance ? [maxX, maxY] : [x2, y2];
}

const template: Template = {
  name: 'Burst wallpaper',
  render: async function* (colorSet, options) {
    const variants = colorSetToVariants(colorSet);
    for (const variant of variants) {
      for (const size of options.wallpaperSizes) {
        const focalPoint = {
          x: size.w / 2,
          y: size.h / 2,
        };
        const svg = source`
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
                  stop-color="${
                    colorSet.name === 'dark'
                      ? variant.colors.shade1
                      : variant.colors.shade0
                  }"
                  stop-opacity="0.25"
                />
                <stop
                  offset="70%"
                  stop-color="${
                    colorSet.name === 'dark'
                      ? variant.colors.shade0
                      : variant.colors.shade1
                  }"
                />
              </radialGradient>
            </defs>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="${variant.colors.shade0}"
            />
            <rect x="0" y="0" width="100%" height="100%" fill="url(#burst)" />
            ${Array(Math.round(size.w / SIZE))
              .fill(null)
              .map((_, i, { length: xCount }) =>
                Array(Math.round(size.h / SIZE))
                  .fill(null)
                  .map((_, j, { length: yCount }) => {
                    const cellWidth = size.w / xCount;
                    const cellHeight = size.h / yCount;
                    const x1 = i * cellWidth + Math.random() * cellWidth;
                    const y1 = j * cellHeight + Math.random() * cellHeight;
                    const [x2, y2] = getClampedPoint(
                      x1,
                      y1,
                      focalPoint.x,
                      focalPoint.y,
                    );
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
                    const accentKey =
                      keys[
                        (Math.round(
                          (i / xCount) * keys.length +
                            (Math.random() * LEAK_FACTOR * 2 - LEAK_FACTOR),
                        ) +
                          keys.length) %
                          keys.length
                      ];
                    const color = variant.colors[accentKey!];
                    const id = `${i}-${j}`;
                    return source`
                        <defs>
                          <linearGradient
                            id="${id}"
                            gradientUnits="userSpaceOnUse"
                            x1="${x1}"
                            y1="${y1}"
                            x2="${x2}"
                            y2="${y2}"
                          >
                            <stop offset="2%" stop-color="${variant.colors.shade7}" />
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
                  })
                  .join('\n'),
              )
              .join('\n')}
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
