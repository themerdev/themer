import Color from 'color';

export const render = (colors, options) => {
  return [{ name: 'dark', colors: colors.dark }, { name: 'light', colors: colors.light }]
    .filter(colorSet => !!colorSet.colors)
    .map(colorSet => {
      const plugin = `
      exports.decorateConfig = function(config) {
        return Object.assign({}, config, {
          cursorColor: '${Color(colorSet.colors.accent6).clearer(0.5).rgbString()}',
          foregroundColor: '${colorSet.colors.shade6}',
          backgroundColor: '${colorSet.colors.shade0}',
          borderColor: '${colorSet.colors.shade0}',
          colors: {
            black: '${colorSet.colors.shade0}',
            red: '${colorSet.colors.accent0}',
            green: '${colorSet.colors.accent3}',
            yellow: '${colorSet.colors.accent2}',
            blue: '${colorSet.colors.accent5}',
            magenta: '${colorSet.colors.accent7}',
            cyan: '${colorSet.colors.accent4}',
            white: '${colorSet.colors.shade6}',
            lightBlack: '${colorSet.colors.shade1}',
            lightRed: '${colorSet.colors.accent1}',
            lightGreen: '${colorSet.colors.accent3}',
            lightYellow: '${colorSet.colors.accent2}',
            lightBlue: '${colorSet.colors.accent5}',
            lightMagenta: '${colorSet.colors.accent7}',
            lightCyan: '${colorSet.colors.accent4}',
            lightWhite: '${colorSet.colors.shade7}',
          },
        });
      };
      `;
      return Promise.resolve({ name: `themer-hyper-${colorSet.name}.js`, contents: new Buffer(plugin, 'utf-8') });
    });
};
