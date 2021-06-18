const trianglify = require('trianglify'),
  { deepFlatten, listOutputFiles } = require('@themer/utils'),
  { getSizes, getVariances } = require('./opts');
const { createCanvas } = require('canvas');

const optionNames = {
  sizes: 'themer-wallpaper-trianglify-size',
  variances: 'themer-wallpaper-trianglify-variance',
};

const render = (colors, options) => {
  try {
    const sizes = getSizes(options[optionNames.sizes]),
      variances = getVariances(options[optionNames.variances]),
      colorSets = Object.entries(colors);
    return deepFlatten(
      colorSets.map(([colorSetName, colors]) =>
        [
          {
            xColors: [colors.accent4, colors.accent6],
            yColors: [colors.shade7, colors.shade0],
          },
          {
            xColors: [colors.accent2, colors.accent7],
            yColors: [colors.shade7, colors.shade0],
          },
        ].map((configuration, configurationIdx) =>
          variances.map((variance) =>
            sizes.map(async (size) => {
              const pattern = trianglify({
                width: size.w,
                height: size.h,
                variance,
                ...configuration,
              });
              const canvas = createCanvas(size.w, size.h);
              pattern.toCanvas(canvas, {
                scaling: false,
                applyCssScaling: false,
              });
              return {
                name: `themer-wallpaper-trianglify-${colorSetName}-${size.w}x${
                  size.h
                }-${variance}-${configurationIdx + 1}.png`,
                contents: Buffer.from(
                  canvas.toDataURL().replace('data:image/png;base64,', ''),
                  'base64',
                ),
              };
            }),
          ),
        ),
      ),
    );
  } catch (e) {
    return [Promise.reject(e.message)];
  }
};

module.exports = {
  render,
  renderInstructions: listOutputFiles,
};
