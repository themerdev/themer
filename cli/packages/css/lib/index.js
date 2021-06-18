const Color = require('color');

const renderHex = (variant, key, color) => [`--${variant}-${key}: ${color};`];

const renderRgb = (variant, key, color) => {
  const rgb = Color(color).rgb();
  return [
    `--${variant}-${key}: ${rgb.string(0)};`,
    `--${variant}-${key}-r: ${rgb.red()};`,
    `--${variant}-${key}-g: ${rgb.green()};`,
    `--${variant}-${key}-b: ${rgb.blue()};`,
  ];
};

const renderHsl = (variant, key, color) => {
  const hsl = Color(color).hsl();
  return [
    `--${variant}-${key}: ${hsl.string(0)};`,
    `--${variant}-${key}-h: ${Math.round(hsl.hue())};`,
    `--${variant}-${key}-s: ${Math.round(hsl.saturationl())}%;`,
    `--${variant}-${key}-l: ${Math.round(hsl.lightness())}%;`,
  ];
};

const renderFormat = (colors, format) => `
:root {
  ${[...Object.entries(colors)]
    .map(([variant, colorSet]) =>
      [...Object.entries(colorSet)]
        .map(([key, color]) => {
          switch (format) {
            case 'hex':
              return renderHex(variant, key, color);
            case 'rgb':
              return renderRgb(variant, key, color);
            case 'hsl':
              return renderHsl(variant, key, color);
          }
        })
        .map((lines) => lines.join('\n  '))
        .join('\n\n  '),
    )
    .join('\n\n  ')}
}`;

const render = (colors) =>
  ['hex', 'rgb', 'hsl'].map((format) =>
    Promise.resolve({
      name: `${format}.css`,
      contents: Buffer.from(renderFormat(colors, format), 'utf8'),
    }),
  );

const renderInstructions = (paths) => `
Import the generated theme file into your stylesheet via \`@import()\`, or into your HTML markup via \`<link>\`.

\`hex.css\` provides the theme colors in hex format; \`rgb.css\` and \`hsl.css\` in RGB and HSL formats respectively along with individual channel values for further manipulation if desired.

Generated files:

${paths.map((path) => `* \`${path}\``).join('\n')}
`;

module.exports = {
  render,
  renderInstructions,
};
