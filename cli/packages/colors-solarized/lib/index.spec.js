const { colors } = require('./index');

describe('solarized color set', () => {
  it('should provide complete themes with all required keys', () => {
    expect(colors).toMatchSnapshot();
  });
});
