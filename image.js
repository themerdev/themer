const {PNG} = require('node-png');

const colorPixel = color =>
  new Promise((resolve, reject) => {
    const png = new PNG({width: 1, height: 1});
    const colorParts = color.object();
    png.data[0] = colorParts.r;
    png.data[1] = colorParts.g;
    png.data[2] = colorParts.b;
    png.data[3] = 0xff;
    const buffers = [];
    png.on('data', buffer => buffers.push(buffer));
    png.on('error', reject);
    png.on('end', () => resolve(Buffer.concat(buffers)));
    png.pack();
  });

module.exports = {colorPixel};
