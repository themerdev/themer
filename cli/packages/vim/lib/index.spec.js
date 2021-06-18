const { render, renderInstructions } = require('./index'),
  { colors } = require('../../colors-default');

describe('themer vim color scheme generator', () => {
  const testColorSetConfiguration = (message, colors) => {
    it(message, async () => {
      const files = await Promise.all(render(colors, {}));
      const fileContents = files[0].contents.toString('utf8');
      expect(files.length).toBe(1);
      expect(/undefined/.test(fileContents)).toBe(false);
      expect(/'dark'/.test(fileContents)).toBe('dark' in colors);
      expect(/'light'/.test(fileContents)).toBe('light' in colors);
    });
  };

  testColorSetConfiguration(
    'should produce only one file containing both schemes if passed both a dark and light theme',
    colors,
  );
  testColorSetConfiguration(
    'should produce only one file containing only a dark scheme if passed only a dark color set',
    { dark: colors.dark },
  );
  testColorSetConfiguration(
    'should produce only one file containing only a light scheme if passed only a light color set',
    { light: colors.light },
  );

  it('should provide installation instructions', async () => {
    const files = await Promise.all(render(colors));
    const instructions = renderInstructions(files.map(({ name }) => name));
    expect(instructions).toMatchSnapshot();
  });
});
