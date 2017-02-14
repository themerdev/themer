import weightedRandom from './weighted-random';
import svg2png from 'svg2png';

const defaultBlockSize = 36;

const getSizesFromOptOrDefault = opt => {
  if (opt) {
    const unparsedSizes = Array.isArray(opt) ? opt : [opt];
    return unparsedSizes.map(unparsedSize => {
      const results = /(\d+)x(\d+)/.exec(unparsedSize);
      if (results) {
        const w = parseInt(results[1], 10);
        const h = parseInt(results[2], 10);
        const s = w / Math.round(w / defaultBlockSize);
        return {
          w: w,
          h: h,
          s: s,
        };
      }
      else {
        throw new Error(`Malformed resolution argument: ${unparsedSize}`);
      }
    });
  }
  else {
    return [
      {
        w: 2880,
        h: 1800,
        s: defaultBlockSize,
      },
      {
        w: 750,
        h: 1334,
        s: defaultBlockSize,
      }
    ];
  }
};

export const render = (colors, options) => {

  try {
    var sizes = getSizesFromOptOrDefault(options['themer-wallpaper-block-wave-size']);
  }
  catch(e) {
    return [Promise.reject(e.message)];
  }

  const colorWeights = new Map([
    ['accent0', 1],
    ['accent1', 1],
    ['accent2', 1],
    ['accent3', 1],
    ['accent4', 1],
    ['accent5', 1],
    ['accent6', 1],
    ['accent7', 1],
    ['shade0', 0],
    ['shade1', 8],
    ['shade2', 6],
    ['shade3', 4],
    ['shade4', 3],
    ['shade5', 2],
    ['shade6', 1],
    ['shade7', 1],
  ]);

  const colorSets = [{ name: 'dark', colors: colors.dark }, { name: 'light', colors: colors.light }].filter(colorSet => !!colorSet.colors);

  const deepFlatten = arr => arr.reduce((cumulative, inner) => cumulative.concat(Array.isArray(inner) ? deepFlatten(inner) : inner), []);

  return deepFlatten(
    colorSets.map(colorSet => sizes.map(size => {
      let blockMaxSize = size.s / 3;
      let blockMinSize = blockMaxSize * 2/3;
      let blocks = [];
      for (let i = 0; i < size.w; i += size.s) {
        for (let j = 0; j < size.h; j += size.s) {
          let color = colorSet.colors[weightedRandom(colorWeights)];
          let xPosition = (i + size.s / 2) / size.w;
          let yPosition = (j + size.s / 2) / size.h;
          let positionScaleFactor = Math.abs(xPosition - yPosition);
          let blockSize = blockMaxSize - (blockMaxSize - blockMinSize) * positionScaleFactor;
          let padding = (size.s - blockSize) / 2;
          blocks.push({
            x: i + padding,
            y: j + padding,
            w: blockSize,
            h: blockSize,
            c: color,
            g: Math.random() < 0.01,
          });
        }
      }
      return { size: size, blocks: blocks };
    }).map(svgData => {
      const svgString = `
        <svg xmlns="http://www.w3.org/2000/svg" style="background-color: ${colorSet.colors.shade0};" width="${svgData.size.w}" height="${svgData.size.h}" viewBox="0 0 ${svgData.size.w} ${svgData.size.h}">
          <defs>
            <linearGradient id="overlay" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="${colorSet.colors.shade0}"/>
              <stop offset="50%" stop-color="${colorSet.colors.shade0}" stop-opacity="0"/>
              <stop offset="100%" stop-color="${colorSet.colors.shade0}"/>
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          ${svgData.blocks.map(block => `<rect x="${block.x}" y="${block.y}" width="${block.w}" height="${block.h}" fill="${block.c}" rx="2" ry="2" ${block.g ? 'filter="url(#glow)"' : ''} />`).join('\n')}
          <rect x="0" y="0" width="${svgData.size.w}" height="${svgData.size.h}" fill="url(#overlay)"/>
        </svg>
      `;
      const basename = `themer-wallpaper-block-wave-${colorSet.name}-${svgData.size.w}x${svgData.size.h}`;
      const svgBuffer = Buffer.from(svgString, 'utf8');
      return [
        Promise.resolve({ name: `${basename}.svg`, contents: svgBuffer }),
        svg2png(svgBuffer).then(pngBuffer => ({ name: `${basename}.png`, contents: pngBuffer })),
      ];
    })
  ));

};
