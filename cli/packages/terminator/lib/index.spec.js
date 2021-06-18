const { render, renderInstructions } = require('./index');
const { colors } = require('../../colors-default');

describe('render', () => {
  const promisedFiles = Promise.all(render(colors));

  it('should render the expected number of files', async () => {
    const files = await promisedFiles;
    expect(files.length).toBe(2);
    expect(files.some((file) => /dark/.test(file.name))).toBe(true);
    expect(files.some((file) => /light/.test(file.name))).toBe(true);
  });

  it('should render valid terminator theme config', async () => {
    const files = await promisedFiles;
    files.forEach((file) => {
      const contents = file.contents.toString('utf8');
      [
        'background_color',
        'cursor_color',
        'foreground_color',
        'palette',
      ].forEach((prop) => {
        expect(contents).toMatch(new RegExp(prop, 'i'));
      });
    });
  });
});

describe('renderInstructions', () => {
  it('should provide installation instructions', async () => {
    const files = await Promise.all(render(colors));
    const instructions = renderInstructions(files.map(({ name }) => name));
    expect(instructions).toMatchSnapshot();
  });
});
