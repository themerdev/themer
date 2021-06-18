const { render, renderInstructions } = require('./index'),
  { colors } = require('../../colors-default');

describe('iTerm theme generator', () => {
  const promisedFiles = render(colors, {});

  it('should render two files when given a color set with both a light and a dark theme', async () => {
    const files = await Promise.all(promisedFiles);
    expect(files.length).toBe(2);
    expect(files.some((file) => /dark/.test(file.name))).toBe(true);
    expect(files.some((file) => /light/.test(file.name))).toBe(true);
  });

  it('should render well-formed files without missing values', async () => {
    const files = await Promise.all(promisedFiles);
    expect(
      files.some((file) => /undefined/.test(file.contents.toString('utf8'))),
    ).toBe(false);
  });

  it('should provide installation instructions', async () => {
    const files = await Promise.all(render(colors));
    const instructions = renderInstructions(files.map(({ name }) => name));
    expect(instructions).toMatchSnapshot();
  });
});
