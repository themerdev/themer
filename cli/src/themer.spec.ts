import test from 'ava';
import template from './fixture/template.js';
import { themer } from './themer.js';
import { OutputFileTransform } from './transform/index.js';
import { basename } from 'node:path';

const backupFile: OutputFileTransform = async function* (file) {
  yield file;
  yield {
    ...file,
    path: `${file.path}.bak`,
  };
};

test('supports file post-processing', async (t) => {
  const files = [];
  for await (const file of themer(
    ['default'],
    [template],
    { wallpaperSizes: [] },
    backupFile,
  )) {
    files.push(file);
  }

  t.plan(9);

  const expectedPaths = [
    'Default/Test/themer-default-dark.txt',
    'Default/Test/themer-default-dark.txt.bak',
    'Default/Test/themer-default-light.txt',
    'Default/Test/themer-default-light.txt.bak',
  ];

  const readme = files.find((file) => file.path.endsWith('README.md'));
  t.assert(readme, 'No README file in output');

  for (const path of expectedPaths) {
    t.assert(
      files.find((file) => file.path === path),
      `Output files must contain ${path}`,
    );
    const base = basename(path);
    t.assert(readme?.content.includes(base), `README must contain ${base}`);
  }
});
