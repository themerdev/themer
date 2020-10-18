const { colors } = require('../../colors-default'),
  { render, renderInstructions } = require('./index');

describe('themer trianglify wallpaper', () => {
  it(`should return 8 PNG files to write`, async () => {
    const files = await Promise.all(render(colors, {}));
    expect(files.length).toBe(8);
    expect(files.filter(file => /\.png/.test(file.name)).length).toBe(8);
  });
  it('should list output files', async () => {
    const files = await Promise.all(
      render(
        colors,
        {
          'themer-wallpaper-trianglify-size': '1000x1000',
          'themer-wallpaper-trianglify-variance': '0.5',
        },
      )
    );
    const instructions = renderInstructions(files.map(({ name }) => name));
    expect(instructions).toMatchSnapshot();
  });
});
