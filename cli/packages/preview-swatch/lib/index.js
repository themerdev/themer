const getName = (options) =>
  options['themer-preview-swatch-name'] || options.colors;

const renderPreview = (colorSet) => {
  const getCircles = () => {
    const offsetX = 51;
    const distX = 54;
    return [
      colorSet.colors.accent0,
      colorSet.colors.accent1,
      colorSet.colors.accent2,
      colorSet.colors.accent3,
      colorSet.colors.accent4,
      colorSet.colors.accent5,
      colorSet.colors.accent6,
      colorSet.colors.accent7,
    ]
      .map(
        (color, i) =>
          `<circle fill="${color}" cx="${
            offsetX + distX * i
          }" cy="49" r="21"></circle>`,
      )
      .join('');
  };
  const getStops = () => {
    return [
      colorSet.colors.shade7,
      colorSet.colors.shade6,
      colorSet.colors.shade5,
      colorSet.colors.shade4,
      colorSet.colors.shade3,
      colorSet.colors.shade2,
      colorSet.colors.shade1,
    ]
      .map(
        (color, i, arr) =>
          `<stop stop-color="${color}" offset="${
            (100 / (arr.length - 1)) * i
          }%"></stop>`,
      )
      .join('');
  };
  const svgString = `
    <svg width="480px" height="160px" viewBox="0 0 480 160" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="shade-scale">
          ${getStops()}
        </linearGradient>
      </defs>
      <rect fill="${
        colorSet.colors.shade0
      }" x="0" y="0" width="480" height="160"></rect>
      ${getCircles()}
      <rect fill="url(#shade-scale)" x="30" y="86" width="420" height="42" rx="3" ry="3"></rect>
    </svg>
  `;
  return Promise.resolve({
    name: `${colorSet.name}-swatch.svg`,
    contents: Buffer.from(svgString, 'utf8'),
  });
};

module.exports.render = (colors, options) => {
  return Object.keys(colors)
    .map((name) => ({
      name: `${getName(options)}-${name}`,
      colors: colors[name],
    }))
    .map((colorSet) => renderPreview(colorSet));
};
