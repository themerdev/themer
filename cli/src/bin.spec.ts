import test from 'ava';
import flattenDeep from 'lodash/flattenDeep.js';
import { spawn } from 'node:child_process';
import { rm, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { randomBytes } from 'node:crypto';
import type { BuiltInColorSet, BuiltInTemplate } from './index.js';

async function run(
  colorSetParams: (BuiltInColorSet | string)[],
  templateParams: (BuiltInTemplate | string)[],
  sizeParams: string[],
  outputDir: string,
): Promise<void> {
  return new Promise((resolve, reject) => {
    const cp = spawn(
      'node',
      flattenDeep([
        './dist/bin.js',
        colorSetParams.map((param) => ['--color-set', param]),
        ...templateParams.map((param) => ['--template', param]),
        ...sizeParams.map((param) => ['--size', param]),
        ['--output', outputDir],
      ]),
    );
    cp.on('error', reject);
    cp.on('exit', (code) => {
      if (code === 0) resolve();
      else reject();
    });
  });
}

const macro = test.macro(
  async (
    t,
    colorSetParams: (BuiltInColorSet | string)[],
    templateParams: (BuiltInTemplate | string)[],
    sizeParams: string[],
    expectedPaths: string[],
  ) => {
    const dir = join('bin-test', randomBytes(32).toString('hex'));
    t.teardown(async () => {
      await rm(dir, { force: true, recursive: true });
    });
    await t.notThrowsAsync(async () => {
      await run(colorSetParams, templateParams, sizeParams, dir);
      for (const path of expectedPaths) {
        await stat(join(dir, path));
      }
    });
  },
);

test(
  'basic CLI',
  macro,
  ['default'],
  ['slack'],
  [],
  [
    join('Default', 'Slack sidebar', 'themer-default-dark.txt'),
    join('Default', 'README.md'),
  ],
);

test(
  'multiple color sets',
  macro,
  ['default', 'green-as-a-whistle'],
  ['slack'],
  [],
  [join('Default', 'README.md'), join('Green as a Whistle', 'README.md')],
);

test(
  'multiple templates',
  macro,
  ['default'],
  ['slack', 'alfred'],
  [],
  [
    join('Default', 'Slack sidebar', 'themer-default-dark.txt'),
    join('Default', 'Alfred', 'themer-default-dark.alfredappearance'),
  ],
);

test(
  'load color set from file',
  macro,
  [join('dist', 'fixture', 'color-set.js')],
  ['slack'],
  [],
  [join('Test', 'Slack sidebar', 'themer-test-dark.txt')],
);

test(
  'load template from file',
  macro,
  ['default'],
  [join('dist', 'fixture', 'template.js')],
  [],
  [join('Default', 'Test', 'themer-default-dark.txt')],
);

test(
  'load base16 file',
  macro,
  [join('src', 'fixture', 'base16.yaml')],
  ['slack'],
  [],
  [join('base16', 'Slack sidebar', 'themer-base-16-dark.txt')],
);

test(
  'renders wallpaper at the specified resolution',
  macro,
  ['default'],
  ['wallpaper-block-wave'],
  ['400x400'],
  [join('Default', 'Block Wave wallpaper', 'themer-default-dark-400x400.svg')],
);

test(
  'supports multiple wallpaper resolutions',
  macro,
  ['default'],
  ['wallpaper-circuits'],
  ['400x400', '450x450'],
  [
    join('Default', 'Circuits wallpaper', 'themer-default-dark-400x400.svg'),
    join('Default', 'Circuits wallpaper', 'themer-default-dark-450x450.svg'),
  ],
);
