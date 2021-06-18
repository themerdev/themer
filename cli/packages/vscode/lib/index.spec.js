const path = require('path'),
  { render, renderInstructions } = require('./index'),
  { colors } = require('../../colors-default');

describe('render function', () => {
  const promisedFiles = Promise.all(render(colors));

  it('should provide promised files whose contents are buffers', async () => {
    const files = await promisedFiles;
    files.forEach((file) => expect(file.contents).toBeInstanceOf(Buffer));
  });

  it('should provide non-absolute paths for the files to be written', async () => {
    const files = await promisedFiles;
    const paths = files.map((file) => file.name);
    expect(paths.some(path.isAbsolute)).toBe(false);
  });

  it('should properly render a package.json file', async () => {
    const files = await promisedFiles;
    const file = files.find((file) => /package\.json/.test(file.name));
    const json = JSON.parse(file.contents.toString('utf8'));
    delete json.version;
    expect(json).toMatchSnapshot();
  });

  it('should properly render a simple README.md file', async () => {
    const files = await promisedFiles;
    const file = files.find((file) => /README\.md/.test(file.name));
    expect(file.contents.toString('utf8')).toMatchSnapshot();
  });

  it('should properly render the README.md file when given only one set of colors', async () => {
    const darkColors = {
      dark: colors.dark,
    };
    const files = await Promise.all(render(darkColors));
    const file = files.find((file) => /README\.md/.test(file.name));
    expect(file.contents.toString('utf8')).toMatchSnapshot();
  });

  it('should properly render an icon file when given both light and dark colors', async () => {
    const files = await promisedFiles;
    const file = files.find((file) => /icon\.svg/.test(file.name));
    expect(file.contents.toString('utf8')).toMatchSnapshot();
  });

  it('should properly render an icon file when given only one set of colors', async () => {
    const lightColors = {
      light: colors.light,
    };
    const files = await Promise.all(render(lightColors));
    const file = files.find((file) => /icon\.svg/.test(file.name));
    expect(file.contents.toString('utf8')).toMatchSnapshot();
  });

  it('should properly render theme files with no duplicate keys', async () => {
    const files = await promisedFiles;
    const themeFiles = files.filter((file) =>
      /color-theme\.json/.test(file.name),
    );
    expect(themeFiles.length).toBe(2);
    themeFiles.forEach((themeFile) => {
      expect(themeFile.contents.toString('utf8')).toMatchSnapshot();
    });
  });
});

describe('renderInstructions function', () => {
  it('should provide installation instructions', async () => {
    const files = await Promise.all(render(colors));
    const instructions = renderInstructions(files.map(({ name }) => name));
    expect(instructions).toMatchSnapshot();
  });
});
