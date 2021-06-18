const { colors } = require('./index');

describe('themer color set', () => {
  it('should provide complete dark and light themes', () => {
    expect(colors).toMatchSnapshot();
  });
});
