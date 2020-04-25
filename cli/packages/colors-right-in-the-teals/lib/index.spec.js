const { colors } = require('./index');

describe('colors-right-in-the-teals', () => {
  it('should define all required colors', () => {
    const prefixes = [
      'accent0',
      'accent1',
      'accent2',
      'accent3',
      'accent4',
      'accent5',
      'accent6',
      'accent7',
      'shade0',
      'shade7',
    ]
    prefixes.forEach(prefix => {
      expect(colors.dark[prefix]).toBeDefined();
      expect(colors.light[prefix]).toBeDefined();
    });
  });
});
