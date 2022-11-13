import { colors } from './index.mjs';
import { describe, expect, it } from 'vitest';

describe('themer color set', () => {
  it('should provide complete dark color set', () => {
    expect(colors).toMatchSnapshot();
  });
});
