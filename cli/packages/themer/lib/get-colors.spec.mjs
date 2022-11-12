import { resolve } from 'path';
import getColors from './get-colors';
import { describe, expect, it } from 'vitest';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

describe('the color set reading/parsing', () => {
  it('should return colors defined in standard javascript format', async () => {
    const colors = await getColors(
      resolve(__dirname, 'test-helpers', 'colors', 'colors.mjs'),
    );
    expect(colors).toMatchSnapshot();
  });
  it('should parse and transform a base16 dark scheme YAML file', async () => {
    const colors = await getColors(
      resolve(__dirname, 'test-helpers', 'base16-dark.yml'),
    );
    expect(colors).toMatchSnapshot();
  });
  it('should parse and transform a base16 light scheme YAML file', async () => {
    const colors = await getColors(
      resolve(__dirname, 'test-helpers', 'base16-light.yml'),
    );
    expect(colors).toMatchSnapshot();
  });
  it('should parse and transform a base16 YAML file with .yaml extension', async () => {
    const colors = await getColors(
      resolve(__dirname, 'test-helpers', 'base16-rebecca.yaml'),
    );
    expect(colors).toMatchSnapshot();
  });
});
