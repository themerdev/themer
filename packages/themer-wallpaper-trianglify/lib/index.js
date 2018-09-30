const Trianglify = require('trianglify'),
  { deepFlatten } = require('themer-utils'),
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
            x_colors: [ colors.accent4, colors.accent6 ],
            y_colors: [ colors.shade7, colors.shade0 ],
          },
          {
            x_colors: [ colors.accent2, colors.accent7 ],
            y_colors: [ colors.shade7, colors.shade0 ],
          },
        ].map((configuration, configurationIdx) =>
          variances.map(variance =>
            sizes.map(size =>
              new Promise((resolve, reject) => {
                try {
                  const pattern = new Trianglify({
                    width: size.w,
                    height: size.h,
                    variance,
                    ...configuration,
                  });
                  const svgString = pattern.svg({includeNamespace: true}).outerHTML;
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
};
