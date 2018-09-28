const {
  getSizesFromOptOrDefault,
  deepFlatten,
  colorSets,
} = require('./index');

describe('getSizesFromOptOrDefault()', () => {
  it('should return the default size if none provided', () => {
    expect(getSizesFromOptOrDefault()).toEqual([
      { w: 2880, h: 1800 },
      { w: 750, h: 1334 },
    ]);
  });
  it('should accept a single resolution string argument', () => {
    expect(getSizesFromOptOrDefault('200x200')).toEqual([{ w: 200, h: 200 }]);
  });
  it('should accept an array of string resolution arguments', () => {
    expect(getSizesFromOptOrDefault(['100x200', '300x400', '500x600'])).toEqual([
      { w: 100, h: 200 },
      { w: 300, h: 400 },
      { w: 500, h: 600 },
    ]);
  });
  it('should throw with invalid arguments', () => {
    expect(() => getSizesFromOptOrDefault('foo')).toThrow();
    expect(() => getSizesFromOptOrDefault(['bar', 'asdfx123'])).toThrow();
  });
  it('should add a pixel-perfected pattern size to each output if provided one', () => {
    expect(getSizesFromOptOrDefault(['2880x1800', '558x558'], 36)).toEqual([
      { w: 2880, h: 1800, s: 36 },
      { w: 558, h: 558, s: 34.875 }
    ])
  });
});

describe('deepFlatten()', () => {
  it('should flatten arbitrarily deeply nested arrays', () => {
    expect(deepFlatten([0, 1, [2, 3], 4, [5, [6, [7, 8], 9]]])).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});

describe('getColorSets', () => {
  it('should properly transpose the standard colors object', () => {
    expect(colorSets({
      dark: { foo: 'bar' },
      light: { baz: 'qux' },
    })).toEqual([
      { name: 'dark', colors: { foo: 'bar' } },
      { name: 'light', colors: { baz: 'qux' } },
    ]);
  })
});
