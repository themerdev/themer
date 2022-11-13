import { render, renderInstructions } from './index.mjs';
import { colors } from '@themerdev/colors-default';
import test from 'ava';

test('themer "dot grid" wallpaper returns PNG data', async (t) => {
  const files = await Promise.all(
    render(colors, { 'themer-wallpaper-dot-grid-size': '600x600' }),
  );
  t.is(files.length, 4);
  t.is(files.filter((file) => /\.png/.test(file.name)).length, 4);
});

test('themer "dot grid" wallpaper lists output files', async (t) => {
  const files = await Promise.all(
    render(colors, { 'themer-wallpaper-dot-grid-size': '1000x1000' }),
  );
  const instructions = renderInstructions(files.map(({ name }) => name));
  t.snapshot(instructions);
});
