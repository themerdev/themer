const { colors } = require('./index');

describe('themer color set', () => {
  it('should provide complete dark color set', () => {
    expect(colors).toMatchSnapshot();
  });
});
