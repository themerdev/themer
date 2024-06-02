import Color from 'colorjs.io';
import { source } from 'common-tags';
import { colorSetToVariants } from '../color-set/index.js';
import type { Template } from './index.js';

const renderHex = (variant: string, key: string, color: string) =>
  `--${variant}-${key}: ${color};`;

const renderRgb = (variant: string, key: string, color: string) => {
  const rgb = Color(color).rgb();
  return source`
    --${variant}-${key}: ${rgb.string(0)};
    --${variant}-${key}-r: ${rgb.red()};
    --${variant}-${key}-g: ${rgb.green()};
    --${variant}-${key}-b: ${rgb.blue()};
  `;
};

const renderHsl = (variant: string, key: string, color: string) => {
  const hsl = Color(color).hsl();
  return source`
    --${variant}-${key}: ${hsl.string(0)};
    --${variant}-${key}-h: ${Math.round(hsl.hue())};
    --${variant}-${key}-s: ${Math.round(hsl.saturationl())}%;
    --${variant}-${key}-l: ${Math.round(hsl.lightness())}%;
  `;
};

type Format = 'hex' | 'rgb' | 'hsl';
const formats: Format[] = ['hex', 'rgb', 'hsl'];

const template: Template = {
  name: 'CSS',
  render: async function* (colorSet) {
    const variants = colorSetToVariants(colorSet);
    for (const format of formats) {
      yield {
        path: `${colorSet.title.human} - ${format}.css`,
        content: source`
          :root {
            ${variants
              .map((variant) =>
                Object.entries(variant.colors)
                  .map(([key, color]) => {
                    switch (format) {
                      case 'hex':
                        return renderHex(variant.name, key, color);
                      case 'rgb':
                        return renderRgb(variant.name, key, color);
                      case 'hsl':
                        return renderHsl(variant.name, key, color);
                    }
                  })
                  .join('\n\n'),
              )
              .join('\n\n')}
          }
        `,
      };
    }
  },
  renderInstructions: (paths) => source`
    Import the generated theme file into your stylesheet via \`@import()\`, or into your HTML markup via \`<link>\`.

    \`hex.css\` provides the theme colors in hex format; \`rgb.css\` and \`hsl.css\` in RGB and HSL formats respectively along with individual channel values for further manipulation if desired.

    Generated files:

    ${paths.map((path) => `* \`${path}\``)}
  `,
};

export default template;
