import { listOutputFiles, Template } from './index.js';
import { colorSetToVariants } from '../color-set/index.js';
import { source } from 'common-tags';

function getOctagonPathData(size: number): string {
  return source`
    M ${size / 6} ${0}
    l ${size / 9} ${size / 9}
    l ${size / 2.25} ${0}
    l ${size / 9} ${size / -9}
    l ${size / 6} ${size / 6}
    l ${size / -9} ${size / 9}
    l ${0} ${size / 2.25}
    l ${size / 9} ${size / 9}
    l ${size / -6} ${size / 6}
    l ${size / -9} ${size / -9}
    l ${size / -2.25} ${0}
    l ${size / -9} ${size / 9}
    l ${size / -6} ${size / -6}
    l ${size / 9} ${size / -9}
    l ${0} ${size / -2.25}
    l ${size / -9} ${size / -9}
    z
  `;
}

const template: Template = {
  name: 'Octagon wallpaper',
  render: async function* (colorSet, options) {
    const variants = colorSetToVariants(colorSet);
    for (const variant of variants) {
      for (const size of options.wallpaperSizes) {
        const patternSize = size.w / Math.round(size.w / 36);

        const colorList = [
          variant.colors.accent0,
          variant.colors.accent1,
          variant.colors.accent2,
          variant.colors.accent3,
          variant.colors.accent4,
          variant.colors.accent5,
          variant.colors.accent6,
          variant.colors.accent7,
        ];

        const radius = -300;
        const point1 = { x: 0, y: radius };
        const point2 = {
          x: (radius * Math.sin(Math.PI / (colorList.length / -2))).toPrecision(
            5,
          ),
          y: (radius * Math.cos(Math.PI / (colorList.length / -2))).toPrecision(
            5,
          ),
        };
        const point3 = {
          x: (
            radius * Math.sin((3 * Math.PI) / (colorList.length / -2))
          ).toPrecision(5),
          y: (
            radius * Math.cos((3 * Math.PI) / (colorList.length / -2))
          ).toPrecision(5),
        };

        const paths = colorList.map((color, i) => ({
          r: (((i * Math.PI) / -4) * 180) / Math.PI,
          c: color,
        }));

        const svg = `
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${size.w}"
            height="${size.h}"
            viewBox="${size.w / -2} ${size.h / -2} ${size.w} ${size.h}"
          >
            <defs>
              <pattern
                id="bg"
                width="${patternSize}"
                height="${patternSize}"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(22.5)"
              >
                <path
                  d="${getOctagonPathData(patternSize)}"
                  stroke="${variant.colors.shade1}"
                  stroke-width="1"
                  fill="none"
                />
              </pattern>
              <pattern
                id="bg-large"
                width="${patternSize * 10}"
                height="${patternSize * 10}"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(-22.5)"
              >
                <path
                  d="${getOctagonPathData(patternSize * 10)}"
                  stroke="${variant.colors.shade2}"
                  stroke-width="2"
                  fill="none"
                />
              </pattern>
              <radialGradient id="accent-bg">
                <stop
                  offset="25%"
                  stop-color="${variant.colors.shade0}"
                />
                <stop
                  offset="100%"
                  stop-color="${variant.colors.shade0}"
                  stop-opacity="0"
                />
              </radialGradient>
              ${paths
                .map(
                  (path, i) => `
                    <linearGradient
                      id="fill-${i}"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop
                        offset="25%"
                        stop-color="${path.c}"
                        stop-opacity="0"
                      />
                      <stop
                        offset="90%"
                        stop-color="${path.c}"
                      />
                    </linearGradient>
                  `,
                )
                .join('\n')}
            </defs>
            <rect
              x="${size.w / -2}"
              y="${size.h / -2}"
              width="${size.w}"
              height="${size.h}"
              fill="${variant.colors.shade0}"
            />
            <rect
              x="${size.w / -2}"
              y="${size.h / -2}"
              width="${size.w}"
              height="${size.h}"
              fill="url(#bg)"
            />
            <rect
              x="${size.w / -2}" y="${size.h / -2}"
              width="${size.w}"
              height="${size.h}"
              fill="url(#bg-large)"
            />
            <circle
              r="${radius * -4}"
              fill="url(#accent-bg)"
            />
            ${paths
              .map(
                (path, i) => `
                  <path
                    d="M
                      ${point1.x}
                      ${point1.y}
                      L
                      ${point2.x}
                      ${point2.y}
                      L
                      ${point3.x}
                      ${point3.y}
                      Z"
                    stroke="${path.c}"
                    stroke-width="0"
                    fill="url(#fill-${i})"
                    transform="rotate(${path.r})"
                  />
                `,
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
