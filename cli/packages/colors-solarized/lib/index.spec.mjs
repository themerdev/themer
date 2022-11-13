import { colors } from './index.mjs';
import { describe, expect, it } from 'vitest';

describe('solarized color set', () => {
  it('should provide complete themes with all required keys', () => {
    expect(colors).toMatchSnapshot();
  });
});
