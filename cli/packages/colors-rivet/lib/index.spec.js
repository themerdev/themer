const { colors } = require('./index');

describe('themer color set', () => {

  it('should contain both a light and a dark theme', () => {
    expect(colors.light).toBeDefined();
    expect(colors.dark).toBeDefined();
  });

  it('should define all 10 required colors for each theme', () => {
    const keys = [
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
    keys.forEach(key => {
      expect(colors.light[key]).toBeDefined();
      expect(colors.dark[key]).toBeDefined();
    });
  });

});
