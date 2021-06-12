const { render, renderInstructions } = require('./index'),
  { colors } = require('../../colors-default');

describe('Terminal.app theme generator', () => {

  const promisedFiles = render(colors, {});

  it('should render two files when given a color set with both a light and a dark theme', async () => {
    const files = await Promise.all(promisedFiles);
    expect(files.length).toBe(2);
    expect(files.some(file => /dark/.test(file.name))).toBe(true);
    expect(files.some(file => /light/.test(file.name))).toBe(true);
  });

  it('should render well-formed theme files', async () => {
    const files = await Promise.all(promisedFiles);
    files.forEach(file => {
      expect(file.contents).toBeInstanceOf(Buffer);
      expect(file.contents.toString('utf8')).toMatchSnapshot();
    });
    expect(files.some(file => /undefined/.test(file.contents.toString('utf8')))).toBe(false);
  });

  it('should provide installation instructions', async () => {
    const files = await Promise.all(render(colors));
    const instructions = renderInstructions(files.map(({ name }) => name));
    expect(instructions).toMatchSnapshot();
  });

});
