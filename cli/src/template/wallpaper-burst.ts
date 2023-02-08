import { createCanvas } from 'canvas';
import { listOutputFiles, Template } from './index.js';
import { Accents, colorSetToVariants } from '../color-set/index.js';
import Color from 'color';

const SIZE = 70;
const MAX_DISTANCE = SIZE * 5;
const LEAK_FACTOR = 0.25;

function getClampedPoint(
  x1: number,
  y1: number,
  maxX: number,
  maxY: number,
): [number, number] {
  const distance = Math.sqrt(Math.pow(maxX - x1, 2) + Math.pow(maxY - y1, 2));
  const x2 = x1 + (MAX_DISTANCE / distance) * (maxX - x1);
  const y2 = y1 + (MAX_DISTANCE / distance) * (maxY - y1);
  const croppedDistance = Math.sqrt(
    Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2),
  );
  return croppedDistance > distance ? [maxX, maxY] : [x2, y2];
}

const template: Template = {
  name: 'Burst wallpaper',
  render: async function* (colorSet, options) {
    const variants = colorSetToVariants(colorSet);
    for (const variant of variants) {
      for (const size of options.wallpaperSizes) {
        const canvas = createCanvas(size.w, size.h);
        const ctx = canvas.getContext('2d');

        const focalPoint = {
          x: size.w * 0.5,
          y: size.h * 0.5,
        };

        ctx.fillStyle = variant.colors.shade0;
        ctx.fillRect(0, 0, size.w, size.h);

        const gradient = ctx.createRadialGradient(
          focalPoint.x,
          focalPoint.y,
          0,
          focalPoint.x,
          focalPoint.y,
          Math.min(size.w, size.h) / 2,
        );
        gradient.addColorStop(
          0,
          Color(variant.isDark ? variant.colors.shade1 : variant.colors.shade0)
            .alpha(0.25)
            .rgb()
            .string(),
        );
        gradient.addColorStop(
          0.7,
          colorSet.name === 'dark'
            ? variant.colors.shade0
            : variant.colors.shade1,
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
            const [x2, y2] = getClampedPoint(
              x1,
              y1,
              focalPoint.x,
              focalPoint.y,
            );
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
            const accentKey =
              keys[
                (Math.round(
                  (i / xCount) * keys.length +
                    (Math.random() * LEAK_FACTOR * 2 - LEAK_FACTOR),
                ) +
                  keys.length) %
                  keys.length
              ];
            const color = variant.colors[accentKey!];
            const transparentColor = Color(color).alpha(0).rgb().string();
            const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
            gradient.addColorStop(0.02, variant.colors.shade7);
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
