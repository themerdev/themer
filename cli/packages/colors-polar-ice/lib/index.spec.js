const { colors } = require('./index');

describe('themer color set', () => {
  it('should contain both a light and a dark theme', () => {
    expect(colors.light).toBeDefined();
    expect(colors.dark).toBeDefined();
  });

  it('should define all 16 required colors for each theme', () => {
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
    ];
    prefixes.forEach((prefix) => {
      expect(colors.light[prefix]).toBeDefined();
      expect(colors.dark[prefix]).toBeDefined();
    });
  });
});
