import { createCanvas } from 'canvas';
import Color from 'color';
import { listOutputFiles, Template } from './index.js';
import { Accents, colorSetToVariants } from '../color-set/index.js';

const SIZE = 100;
const DIAGONAL = Math.sqrt(2 * Math.pow(SIZE, 2));

function anchoredRandom(anchor: number, factor = 3) {
  return (anchor * (factor - 1) + Math.random()) / factor;
}

function randomColorKey(anchor: number): keyof Accents {
  const keys: (keyof Accents)[] = [
    'accent0',
    'accent1',
    'accent2',
    'accent3',
    'accent4',
    'accent5',
    'accent6',
    'accent7',
  ];
  return keys[Math.round(anchoredRandom(anchor) * keys.length) % keys.length]!;
}

function minRandom(min: number) {
  return min + Math.random() * (1 - min);
}

const template: Template = {
  name: 'Diamonds wallpaper',
  render: async function* (colorSet, options) {
    const variants = colorSetToVariants(colorSet);
    for (const variant of variants) {
      for (const size of options.wallpaperSizes) {
        const rowCount = Math.ceil(size.h / (DIAGONAL / 2));
        const columnCount = Math.ceil(size.w / DIAGONAL);
        const canvas = createCanvas(size.w, size.h);
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = variant.colors.shade0;
        ctx.fillRect(0, 0, size.w, size.h);

        for (let i = 0; i <= rowCount; i++) {
          for (let j = 0; j <= columnCount; j++) {
            const cx = j * DIAGONAL + (DIAGONAL / 2) * (i % 2);
            const cy = (i * DIAGONAL) / 2;
            const anchoredRandomColorKey = () =>
              randomColorKey((i / rowCount + j / columnCount) / 2);
            if (Math.random() < 0.3) {
              ctx.beginPath();
              ctx.fillStyle = Color(variant.colors[anchoredRandomColorKey()])
                .alpha(minRandom(0.2))
                .rgb()
                .string();
              ctx.moveTo(cx, cy - DIAGONAL / 2);
              ctx.lineTo(cx + DIAGONAL / 2, cy);
              ctx.lineTo(cx, cy + DIAGONAL / 2);
              ctx.lineTo(cx - DIAGONAL / 2, cy);
              ctx.closePath();
              ctx.fill();
            } else if (Math.random() < 0.1) {
              ctx.beginPath();
              ctx.fillStyle = Color(variant.colors[anchoredRandomColorKey()])
                .alpha(minRandom(0.2))
                .rgb()
                .string();
              ctx.moveTo(cx - DIAGONAL / 2, cy);
              ctx.lineTo(cx, cy - DIAGONAL / 2);
              ctx.lineTo(cx + DIAGONAL / 2, cy);
              ctx.closePath();
              ctx.fill();
              ctx.beginPath();
              ctx.fillStyle = Color(variant.colors[anchoredRandomColorKey()])
                .alpha(minRandom(0.2))
                .rgb()
                .string();
              ctx.moveTo(cx - DIAGONAL / 2, cy);
              ctx.lineTo(cx + DIAGONAL / 2, cy);
              ctx.lineTo(cx, cy + DIAGONAL / 2);
              ctx.closePath();
              ctx.fill();
            } else {
              ctx.beginPath();
              ctx.fillStyle = Color(variant.colors[anchoredRandomColorKey()])
                .alpha(minRandom(0.2))
                .rgb()
                .string();
              ctx.moveTo(cx, cy - DIAGONAL / 2);
              ctx.lineTo(cx, cy + DIAGONAL / 2);
              ctx.lineTo(cx - DIAGONAL / 2, cy);
              ctx.closePath();
              ctx.fill();
              ctx.beginPath();
              ctx.fillStyle = Color(variant.colors[anchoredRandomColorKey()])
                .alpha(minRandom(0.2))
                .rgb()
                .string();
              ctx.moveTo(cx, cy - DIAGONAL / 2);
              ctx.lineTo(cx + DIAGONAL / 2, cy);
              ctx.lineTo(cx, cy + DIAGONAL / 2);
              ctx.closePath();
              ctx.fill();
            }
          }
        }

        yield {
          path: `${variant.title.kebab}-${size.w}x${size.h}.png`,
          content: Buffer.from(
            canvas.toDataURL().replace('data:image/png;base64,', ''),
            'base64',
          ),
        };
      }
    }
  },
  renderInstructions: listOutputFiles,
};

export default template;
