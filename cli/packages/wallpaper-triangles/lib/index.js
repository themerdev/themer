const {
  getSizesFromOptOrDefault,
  colorSets: getColorSets,
  deepFlatten,
  listOutputFiles,
} = require('@themer/utils');
const { createCanvas, loadImage } = require('canvas');

const render = (colors, options) => {
  try {
    var sizes = getSizesFromOptOrDefault(
      options['themer-wallpaper-triangles-size']
    );
  } catch (e) {
    return [Promise.reject(e.message)];
  }

  const colorSets = getColorSets(colors);

  return deepFlatten(
    sizes.map(size =>
      colorSets.map(async colorSet => {
        const {
          shade0,
          shade7,
          accent0,
          accent2,
          accent4,
          accent7,
        } = colorSet.colors;
        const svg = `
          <svg width="${size.w}" height="${size.h}" viewBox="0 0 ${size.w} ${size.h}" xmlns="http://www.w3.org/2000/svg">
            <style>
              .triangle--dark { fill: ${shade0}; }
              .triangle--light {
                fill: ${shade7};
                opacity: 0.5;
              }
            </style>
            <defs>
              <filter id="texture" filterUnits="objectBoundingBox" x="0" y="0" width="100%" height="100%">
                <feTurbulence type="fractalNoise" baseFrequency="0.4" numOctaves="3" result="turbulence" />
                <feColorMatrix type="saturate" values="0.1" in="turbulence" result="desaturatedTurbulence" />
                <feBlend in="SourceGraphic" in2="desaturatedTurbulence" mode="multiply" result="multiplied" />
                <feBlend in="multiplied" in2="desaturatedTurbulence" mode="screen" />
              </filter>
              <pattern id="triangles" width="24" height="48" patternUnits="userSpaceOnUse">
                <path class="triangle--dark" d="M0,0 L24,0 L12,24 Z" />
                <path class="triangle--dark" d="M0,24 L12,24 L0,48 Z" />
                <path class="triangle--dark" d="M12,24 L24,24 L 24,48 Z" />
                <path class="triangle--light" d="M0,0 L12,24 L0,24 Z" />
                <path class="triangle--light" d="M24,0 L24,24 L12,24 Z" />
                <path class="triangle--light" d="M12,24 L24,48 L0,48 Z" />
              </pattern>
              <linearGradient id="warm-linear" x1="0" y1="50%" x2="100%" y2="100%">
                <stop stop-color="${accent7}" offset="0%" />
                <stop stop-color="${accent2}" offset="100%" />
              </linearGradient>
              <linearGradient id="cool-linear" x1="100%" y1="0" x2="0" y2="100%">
                <stop stop-color="${accent4}" offset="0%" />
                <stop stop-color="${accent4}" stop-opacity="0" offset="45%" />
              </linearGradient>
              <linearGradient id="accent-linear" x1="0" y1="100%" x2="100%" y2="0">
                <stop stop-color="${accent0}" offset="0%" />
                <stop stop-color="${accent0}" stop-opacity="0" offset="25%" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#warm-linear)" />
            <rect x="0" y="0" width="100%" height="100%" fill="url(#cool-linear)" />
            <rect x="0" y="0" width="100%" height="100%" fill="url(#accent-linear)" />
            <rect x="0" y="0" width="100%" height="100%" fill="url(#triangles)" filter="url(#texture)" opacity="0.3" />
          </svg>
        `;

        const canvas = createCanvas(size.w, size.h);
        const ctx = canvas.getContext('2d');

        const url = `data:image/svg+xml;base64,${Buffer.from(svg, 'utf8').toString('base64')}`;
        const img = await loadImage(url);
        ctx.drawImage(img, 0, 0);
        
        return {
          name: `themer-wallpaper-triangles-${colorSet.name}-${size.w}x${size.h}.png`,
          contents: Buffer.from(canvas.toDataURL().replace('data:image/png;base64,', ''), 'base64'),
        };
      })
    )
  );
};

module.exports = {
  render,
  renderInstructions: listOutputFiles,
};
