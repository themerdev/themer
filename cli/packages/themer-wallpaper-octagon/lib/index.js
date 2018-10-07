const {
  getSizesFromOptOrDefault,
  colorSets: getColorSets,
  deepFlatten
} = require('themer-utils');

const render = (colors, options) => {

  try {
    var sizes = getSizesFromOptOrDefault(options['themer-wallpaper-octagon-size'], 36);
  }
  catch(e) {
    return [Promise.reject(e.message)];
  }

  const colorSets = getColorSets(colors);

  const getOctagonPathData = size => `
  M ${size/6} ${0}
  l ${size/9} ${size/9}
  l ${size/2.25} ${0}
  l ${size/9} ${size/-9}
  l ${size/6} ${size/6}
  l ${size/-9} ${size/9}
  l ${0} ${size/2.25}
  l ${size/9} ${size/9}
  l ${size/-6} ${size/6}
  l ${size/-9} ${size/-9}
  l ${size/-2.25} ${0}
  l ${size/-9} ${size/9}
  l ${size/-6} ${size/-6}
  l ${size/9} ${size/-9}
  l ${0} ${size/-2.25}
  l ${size/-9} ${size/-9}
  z
  `;

  return deepFlatten(colorSets.map(colorSet => sizes.map(size => {

    const colorList = [
      colorSet.colors.accent0,
      colorSet.colors.accent1,
      colorSet.colors.accent2,
      colorSet.colors.accent3,
      colorSet.colors.accent4,
      colorSet.colors.accent5,
      colorSet.colors.accent6,
      colorSet.colors.accent7,
    ];

    const radius = -300;
    const point1 = { x: 0, y: radius };
    const point2 = { x: (radius * Math.sin(Math.PI / (colorList.length / -2))).toPrecision(5), y: (radius * Math.cos(Math.PI / (colorList.length / -2))).toPrecision(5) };
    const point3 = { x: (radius * Math.sin(3 * Math.PI / (colorList.length / -2))).toPrecision(5), y: (radius * Math.cos(3 * Math.PI / (colorList.length / -2))).toPrecision(5) };

    const paths = colorList.map((color, i) => ({
      r: i * Math.PI / -4 * 180 / Math.PI,
      c: color,
    }));

    return Promise.resolve({
      name: `themer-wallpaper-octagon-${colorSet.name}-${size.w}x${size.h}.svg`,
      contents: Buffer.from(
        `<svg xmlns="http://www.w3.org/2000/svg" width="${size.w}" height="${size.h}" viewBox="${size.w / -2} ${size.h / -2} ${size.w} ${size.h}">
          <defs>
            <pattern id="bg" width="${size.s}" height="${size.s}" patternUnits="userSpaceOnUse" patternTransform="rotate(22.5)">
              <path d="${getOctagonPathData(size.s)}" stroke="${colorSet.colors.shade1}" stroke-width="1" fill="none"/>
            </pattern>
            <pattern id="bg-large" width="${size.s * 10}" height="${size.s * 10}" patternUnits="userSpaceOnUse" patternTransform="rotate(-22.5)">
              <path d="${getOctagonPathData(size.s * 10)}" stroke="${colorSet.colors.shade2}" stroke-width="2" fill="none"/>
            </pattern>
            <radialGradient id="accent-bg">
              <stop offset="25%" stop-color="${colorSet.colors.shade0}"/>
              <stop offset="100%" stop-color="${colorSet.colors.shade0}" stop-opacity="0"/>
            </radialGradient>
            ${paths.map((path, i) => `<linearGradient id="fill-${i}" x1="0" y1="0" x2="1" y2="1"><stop offset="25%" stop-color="${path.c}" stop-opacity="0"/><stop offset="90%" stop-color="${path.c}"/></linearGradient>`).join('\n')}
          </defs>
          <rect x="${size.w / -2}" y="${size.h / -2}" width="${size.w}" height="${size.h}" fill="${colorSet.colors.shade0}" />
          <rect x="${size.w / -2}" y="${size.h / -2}" width="${size.w}" height="${size.h}" fill="url(#bg)"/>
          <rect x="${size.w / -2}" y="${size.h / -2}" width="${size.w}" height="${size.h}" fill="url(#bg-large)"/>
          <circle r="${radius * -4}" fill="url(#accent-bg)"/>
          ${paths.map((path, i) => `<path d="M ${point1.x} ${point1.y} L ${point2.x} ${point2.y} L ${point3.x} ${point3.y} Z" stroke="${path.c}" stroke-width="0" fill="url(#fill-${i})" transform="rotate(${path.r})"/>`).join('\n')}
        </svg>`,
        'utf8'
      ),
    });
  })));

};

module.exports = {
  render,
};
