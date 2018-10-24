import getBestForeground from './getBestForeground';

describe('getBestForeground', () => {
  test('getBestForeground', () => {
    expect(getBestForeground('#ccc', '#333', '#000')).toBe('#CCCCCC');
    expect(getBestForeground('#ccc', '#333', '#fff')).toBe('#333333');
  });
});
