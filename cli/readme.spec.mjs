import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

describe('readme', () => {
  it('includes all packages', async () => {
    const readmeContents = await readFile(
      join(__dirname, '..', 'README.md'),
      'utf8',
    );

    const templates = [
      ...readmeContents.matchAll(/^\- \[@themerdev\/([\w-]+)\]/gm),
    ].map(([_, basename]) => basename);
    const colorSets = [
      ...readmeContents.matchAll(/^\| \[@themerdev\/([\w-]+)\]/gm),
    ].map(([_, basename]) => basename);
    const actual = new Set([...templates, ...colorSets]);

    const unlisted = new Set([
      'preview-code',
      'preview-inline',
      'preview-swatch',
      'themer',
      'utils',
    ]);
    const expected = new Set(
      (await readdir(join(__dirname, 'packages'))).filter(
        (basename) => !unlisted.has(basename),
      ),
    );

    expect(actual).toEqual(expected);
  });
});

// TODO: include this somewhere
