const { render, renderInstructions } = require('./index');
const { colors } = require('../../colors-default');

describe('themer "burst" wallpaper', () => {
  it('should not contain "undefined" in the SVG output', async () => {
    const files = await Promise.all(render(colors, {}));
    files.forEach(file => {
      expect(file.contents.toString('utf8')).not.toContain('undefined');
    });
  });
  it('should list output files', async () => {
    const files = await Promise.all(render(colors, { 'themer-wallpaper-diamonds-size': '1000x1000' }));
    const instructions = renderInstructions(files.map(({ name }) => name));
    expect(instructions).toMatchSnapshot();
  });
});
