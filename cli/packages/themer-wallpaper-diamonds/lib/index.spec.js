const { render } = require('./index');
const { colors } = require('../../themer-colors-default');

describe('themer "diamonds" wallpaper', () => {
  it('should not contain "undefined" in the SVG output', async () => {
    const files = await Promise.all(render(colors, {}));
    files.forEach(file => {
      expect(file.contents.toString('utf8')).not.toContain('undefined');
    });
  });
});
