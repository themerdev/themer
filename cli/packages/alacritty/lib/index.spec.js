const { render, renderInstructions } = require('./index');
const { colors } = require('../../themer-colors-default');
const singleThemeColors = { light: colors.light };

describe('themer alacritty theme generator', () => {

  const promisedFilesDefault = Promise.all(render(colors));
  const promisedFilesSingleTheme = Promise.all(render(singleThemeColors));
  
  it('should generate a single file regardless of dark, light, or both', async () => {
    const filesDefault = await promisedFilesDefault;
    expect(filesDefault.length).toBe(1);
    const filesSingleTheme = await promisedFilesSingleTheme;
    expect(filesSingleTheme.length).toBe(1);
  });
  
  it('should generate well-formatted themes', async () => {
    const filesDefault = await promisedFilesDefault;
    expect(filesDefault[0].contents.toString('utf8')).toMatchSnapshot();
    const filesSingleTheme = await promisedFilesSingleTheme;
    expect(filesSingleTheme[0].contents.toString('utf8')).toMatchSnapshot();
  });

  it('should provide installation instructions', async () => {
    const files = await Promise.all(render(colors));
    const instructions = renderInstructions(files.map(({ name }) => name));
    expect(instructions).toMatchSnapshot();
  });
});
