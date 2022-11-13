import { render } from './index.mjs';
import { colors } from '@themerdev/colors-default';
import { describe, expect, it } from 'vitest';

describe('themer color set code preview', () => {
  it('should use the color set name as the default name', async () => {
    const files = await Promise.all(
      render(colors, { colors: 'colors-default' }),
    );
    expect(
      files.every((file) =>
        /colors-default-(light|dark)-code\.svg/.test(file.name),
      ),
    ).toBe(true);
  });
  it('should also accept custom names through options', async () => {
    const files = await Promise.all(
      render(colors, {
        'themer-preview-code-name': 'test',
        'colors': 'colors-default',
      }),
    );
    expect(
      files.every((file) => /test-(light|dark)-code\.svg/.test(file.name)),
    ).toBe(true);
  });
  it('should render proper SVG files', async () => {
    const files = await Promise.all(
      render(colors, { colors: 'colors-default' }),
    );
    files.forEach((file) => {
      expect(file.contents.toString('utf8')).toMatchSnapshot();
    });
  });
});
