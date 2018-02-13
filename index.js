const one = require('onecolor');

module.exports.render = colors =>
  Object.entries(colors).map(([name, colorSet]) =>
    Promise.resolve({
      name: `themer-sketch-${name}.sketchpalette`,
      contents: Buffer.from(
        JSON.stringify({
          compatibleVersion: '2.0',
          pluginVersion: '2.13',
          colors: Object.values(colorSet).map(color => ({
            red: one(color).r(),
            green: one(color).g(),
            blue: one(color).b(),
            alpha: one(color).a(),
          })),
          gradients: [],
          images: [],
        }),
        'utf8',
      ),
    })
  );
