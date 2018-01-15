const { getSizes, getVariances, getSeed } = require('./opts');

describe('themer-wallpaper-trianglify options', () => {
  it('should return proper defaults if none provided', () => {
    expect(getSizes()).toMatchSnapshot();
    expect(getVariances()).toMatchSnapshot();
    expect(getSeed()).toMatchSnapshot();
  });
});
