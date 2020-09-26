const trianglify = require('trianglify'),
  { deepFlatten, listOutputFiles } = require('@themer/utils'),
  { getSizes, getVariances } = require('./opts');

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
            xColors: [ colors.accent4, colors.accent6 ],
            yColors: [ colors.shade7, colors.shade0 ],
          },
          {
            xColors: [ colors.accent2, colors.accent7 ],
            yColors: [ colors.shade7, colors.shade0 ],
          },
        ].map((configuration, configurationIdx) =>
          variances.map(variance =>
            sizes.map(size =>
              new Promise((resolve, reject) => {
                try {
                  const pattern = trianglify({
                    width: size.w,
                    height: size.h,
                    variance,
                    ...configuration,
                  });
                  const svgString = pattern.toSVGTree({includeNamespace: true}).toString();
                  resolve({
                    name: `themer-wallpaper-trianglify-${colorSetName}-${size.w}x${size.h}-${variance}-${configurationIdx+1}.svg`,
                    contents: Buffer.from(svgString, 'utf8'),
                  });
                } catch (e) {
                  reject(e.message);
                }
              })
            )
          )
        )
      )
    );
  } catch (e) {
    return [ Promise.reject(e.message) ];
  }
};

module.exports = {
  render,
  renderInstructions: listOutputFiles,
};
