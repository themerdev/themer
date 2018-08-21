const { colors } = require('./index');

describe('themer-colors-nova', () => {
  it('should export valid themer color set', () => {
    expect(colors).toMatchSnapshot();
  });
});
