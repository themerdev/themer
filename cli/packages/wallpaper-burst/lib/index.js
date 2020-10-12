const {
  getSizesFromOptOrDefault,
  deepFlatten,
  colorSets: getColorSets,
  listOutputFiles,
} = require('@themer/utils');
const { createCanvas } = require('canvas');
const Color = require('color');

const SIZE = 70;
const MAX_DISTANCE = SIZE * 5;
const LEAK_FACTOR = 0.25;

const getClampedPoint = (x1, y1, maxX, maxY) => {
  const distance = Math.sqrt(Math.pow(maxX - x1, 2) + Math.pow(maxY - y1, 2));
  const x2 = x1 + MAX_DISTANCE / distance * (maxX - x1);
  const y2 = y1 + MAX_DISTANCE / distance * (maxY - y1);
  const croppedDistance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return croppedDistance > distance ? [maxX, maxY] : [x2, y2];
}

const renderImage = (size, colorSet) => {
  const canvas = createCanvas(size.w, size.h);
  const ctx = canvas.getContext('2d');

  const focalPoint = {
    x: size.w * 0.5,
    y: size.h * 0.5,
  };

  ctx.fillStyle = colorSet.colors.shade0;
  ctx.fillRect(0, 0, size.w, size.h);

  const gradient = ctx.createRadialGradient(
    focalPoint.x,
    focalPoint.y,
    0,
    focalPoint.x,
    focalPoint.y,
    Math.min(size.w, size.h) / 2
  );
  gradient.addColorStop(
    0,
    Color(colorSet.name === 'dark' ? colorSet.colors.shade1 : colorSet.colors.shade0)
      .alpha(0.25)
      .rgb()
      .string()
  );
  gradient.addColorStop(
    0.7,
    colorSet.name === 'dark' ? colorSet.colors.shade0 : colorSet.colors.shade1
  );
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size.w, size.h);

  const xCount = Math.round(size.w / SIZE);
  const yCount = Math.round(size.h / SIZE);
  const cellWidth = size.w / xCount;
  const cellHeight = size.h / yCount;
  for (let i = 0; i < xCount; i++) {
    for (let j = 0; j < yCount; j++) {
      const x1 = i * cellWidth + Math.random() * cellWidth;
      const y1 = j * cellHeight + Math.random() * cellHeight;
      const [x2, y2] = getClampedPoint(x1, y1, focalPoint.x, focalPoint.y);
      const accent = (Math.round(i / xCount * 8 + (Math.random() * LEAK_FACTOR * 2 - LEAK_FACTOR)) + 8) % 8;
      const color = colorSet.colors[`accent${accent}`];
      const transparentColor = Color(color).alpha(0).rgb().string();
      const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
      gradient.addColorStop(0.02, colorSet.colors.shade7);
      gradient.addColorStop(0.3, color);
      gradient.addColorStop(0.5, transparentColor);
      ctx.lineCap = 'round';
      ctx.lineWidth = 3;
      ctx.strokeStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
  }
  
  return Buffer.from(
    canvas.toDataURL().replace('data:image/png;base64,', ''),
    'base64',
  );
};

const render = (colors, options) => {
  try {
    var sizes = getSizesFromOptOrDefault(
      options['themer-wallpaper-burst-size']
    );
  } catch (e) {
    return [Promise.reject(e.message)];
  }

  const colorSets = getColorSets(colors);

  return deepFlatten(
    sizes.map(
      size => colorSets.map(colorSet => Promise.resolve({
        name: `themer-wallpaper-burst-${colorSet.name}-${size.w}x${size.h}.png`,
        contents: renderImage(size, colorSet),
      })),
    ),
  );
};

module.exports = {
  render,
  renderInstructions: listOutputFiles,
};
