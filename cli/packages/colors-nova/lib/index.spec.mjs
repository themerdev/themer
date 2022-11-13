import { colors } from './index.mjs';
import { describe, expect, it } from 'vitest';

describe('colors-nova', () => {
  it('should export valid themer color set', () => {
    expect(colors).toMatchSnapshot();
  });
});
