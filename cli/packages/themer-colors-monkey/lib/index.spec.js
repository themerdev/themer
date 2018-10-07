const { colors } = require('./index');

describe('themer-colors-monkey', () => {
  it('should define all 32 required colors', () => {
    const prefixes = [ 'accent', 'shade' ];
    prefixes.forEach(prefix => {
      for (let i = 0; i <= 7; i++) {
        expect(colors.dark[`${prefix}${i}`]).toBeDefined();
        expect(colors.light[`${prefix}${i}`]).toBeDefined();
      }
    });
  });
});
