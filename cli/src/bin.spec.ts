import test from 'ava';
import flattenDeep from 'lodash/flattenDeep.js';
import { spawn } from 'node:child_process';
import { rm, stat } from 'node:fs/promises';
import { join } from 'node:path';
import type { BuiltInColorSet, BuiltInTemplate } from './index.js';

const TEST_OUTPUT_DIR = 'bin-test';

test.afterEach.always('clean up test output', async () => {
  await rm(TEST_OUTPUT_DIR, { force: true, recursive: true });
});

async function run(
  colorSetParams: (BuiltInColorSet | string)[],
  templateParams: (BuiltInTemplate | string)[],
  sizeParams: string[],
): Promise<void> {
  return new Promise((resolve, reject) => {
    const cp = spawn(
      'node',
      flattenDeep([
        './dist/bin.js',
        colorSetParams.map((param) => ['--color-set', param]),
        ...templateParams.map((param) => ['--template', param]),
        ...sizeParams.map((param) => ['--size', param]),
        ['--output', TEST_OUTPUT_DIR],
      ]),
    );
    cp.on('error', reject);
    cp.on('exit', (code) => {
      if (code === 0) resolve();
      else reject();
    });
  });
}

test.serial('basic CLI', async (t) => {
  await t.notThrowsAsync(async () => {
    await run(['default'], ['slack'], []);
    await stat(
      join(
        TEST_OUTPUT_DIR,
        'Default',
        'Slack sidebar',
        'themer-default-dark.txt',
      ),
    );
    await stat(join(TEST_OUTPUT_DIR, 'Default', 'README.md'));
  });
});

test.serial('multiple color sets', async (t) => {
  await t.notThrowsAsync(async () => {
    await run(['default', 'green-as-a-whistle'], ['slack'], []);
    await stat(join(TEST_OUTPUT_DIR, 'Default', 'README.md'));
    await stat(join(TEST_OUTPUT_DIR, 'Green as a Whistle', 'README.md'));
  });
});

test.serial('multiple templates', async (t) => {
  await t.notThrowsAsync(async () => {
    await run(['default'], ['slack', 'alfred'], []);
    await stat(
      join(
        TEST_OUTPUT_DIR,
        'Default',
        'Slack sidebar',
        'themer-default-dark.txt',
      ),
    );
    await stat(
      join(
        TEST_OUTPUT_DIR,
        'Default',
        'Alfred',
        'themer-default-dark.alfredappearance',
      ),
    );
  });
});

test.serial('load color set from file', async (t) => {
  await t.notThrowsAsync(async () => {
    await run([join('dist', 'fixture', 'color-set.js')], ['slack'], []);
    await stat(
      join(TEST_OUTPUT_DIR, 'Test', 'Slack sidebar', 'themer-test-dark.txt'),
    );
  });
});

test.serial('load template from file', async (t) => {
  await t.notThrowsAsync(async () => {
    await run(['default'], [join('dist', 'fixture', 'template.js')], []);
    await stat(
      join(TEST_OUTPUT_DIR, 'Default', 'Test', 'themer-default-dark.txt'),
    );
  });
});

test.serial('load base16 file', async (t) => {
  await t.notThrowsAsync(async () => {
    await run([join('src', 'fixture', 'base16.yaml')], ['slack'], []);
    await stat(
      join(
        TEST_OUTPUT_DIR,
        'base16',
        'Slack sidebar',
        'themer-base-16-dark.txt',
      ),
    );
  });
});

test.serial('renders wallpaper at the specified resolution', async (t) => {
  await t.notThrowsAsync(async () => {
    await run(['default'], ['wallpaper-block-wave'], ['400x400']);
    await stat(
      join(
        TEST_OUTPUT_DIR,
        'Default',
        'Block Wave wallpaper',
        'themer-default-dark-400x400.png',
      ),
    );
  });
});

test.serial('supports multiple wallpaper resolutions', async (t) => {
  await t.notThrowsAsync(async () => {
    await run(['default'], ['wallpaper-circuits'], ['400x400', '450x450']);
    await stat(
      join(
        TEST_OUTPUT_DIR,
        'Default',
        'Circuits wallpaper',
        'themer-default-dark-400x400.png',
      ),
    );
    await stat(
      join(
        TEST_OUTPUT_DIR,
        'Default',
        'Circuits wallpaper',
        'themer-default-dark-450x450.png',
      ),
    );
  });
});
