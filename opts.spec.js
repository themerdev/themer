const { getSizes, getVariances, getSeed } = require('./opts');

describe('themer-wallpaper-trianglify options', () => {
  it('should return proper defaults if none provided', () => {
    expect(getSizes()).toMatchSnapshot();
    expect(getVariances()).toMatchSnapshot();
    expect(getSeed()).toMatchSnapshot();
  });
  it('should parse a single resolution option', () => {
    expect(getSizes('200x200')).toEqual([{ h: 200, w: 200 }]);
  });
  it('should parse multiple resolution options', () => {
    expect(getSizes(['100x200', '300x400'])).toEqual([{ w: 100, h: 200}, { w: 300, h: 400 }]);
  });
  it('should throw when a malformed resolution option is given', () => {
    expect(() => getSizes('100xFoo')).toThrow();
  });
  it('should parse a single variance option', () => {
    expect(getVariances('0.61')).toEqual([0.61]);
  });
  it('should parse multiple variance options', () => {
    expect(getVariances(['0.333', '0.1', '1'])).toEqual([0.333, 0.1, 1]);
  });
  it('should throw when an invalid variance option is given', () => {
    expect(() => getVariances('1.1')).toThrow();
    expect(() => getVariances('-1')).toThrow();
    expect(() => getVariances('foo')).toThrow();
  });
  it('should validate and return the seed option untouched', () => {
    const seed = 'hello';
    expect(getSeed(seed)).toEqual(seed);
  });
  it('should not allow multiple seed options', () => {
    expect(() => getSeed(['foo', 'bar'])).toThrow();
  });
});
