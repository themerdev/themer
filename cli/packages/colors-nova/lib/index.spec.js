const { colors } = require('./index');

describe('colors-nova', () => {
  it('should export valid themer color set', () => {
    expect(colors).toMatchSnapshot();
  });
});
