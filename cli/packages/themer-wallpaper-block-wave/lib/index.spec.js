const { render, renderInstructions } = require('./index'),
  { colors } = require('../../colors-default');

describe('themer "block wave" wallpaper', () => {

  const test = (scenario, colors, totalDefaultFiles) => {

    describe(scenario, () => {

      describe('and when rendering only default resolutions', () => {
        const promises = render(colors, {});

        it(`should return ${totalDefaultFiles} files to write`, async () => {
          const files = await Promise.all(promises);
          expect(files.length).toBe(totalDefaultFiles);
          expect(files.filter(file => /\.svg/.test(file.name)).length).toBe(totalDefaultFiles);
        });

        it('should not contain "undefined" in the SVG output', async () => {
          const files = await Promise.all(promises);
          files.filter(file => /\.svg/.test(file.name)).forEach(file => {
            expect(file.contents.toString('utf8')).not.toContain('undefined');
          });
        });

      });

      describe('and when rendering a custom resolution', () => {
        const promises = render(colors, { 'themer-wallpaper-block-wave-size': '600x600' });

        it(`should return ${totalDefaultFiles / 2} files to write`, async () => {
          const files = await Promise.all(promises);
          expect(files.length).toBe(totalDefaultFiles / 2);
          expect(files.filter(file => /\.svg/.test(file.name)).length).toBe(totalDefaultFiles / 2);
        });

        it('should not contain "undefined" in the SVG output', async () => {
          const files = await Promise.all(promises);
          files.filter(file => /\.svg/.test(file.name)).forEach(file => {
            expect(file.contents.toString('utf8')).not.toContain('undefined');
          });
        });

      });

    });

  };

  test('when given both a light and a dark theme', colors, 4);
  test('when given only a dark theme', { dark: colors.dark }, 2);
  test('when given only a light theme', { light: colors.light }, 2);

  it('should list output files', async () => {
    const files = await Promise.all(render(colors, { 'themer-wallpaper-block-wave-size': '1000x1000' }));
    const instructions = renderInstructions(files.map(({ name }) => name));
    expect(instructions).toMatchSnapshot();
  });

});
