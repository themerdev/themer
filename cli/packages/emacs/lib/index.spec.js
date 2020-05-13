const { render, renderInstructions } = require('./index');
const { colors } = require('../../colors-default');

describe('themer emacs theme generator', () => {
  const promisedFiles = Promise.all(render(colors));
  
  it('should produce valid theme files', async () => {
    const files = await promisedFiles;
    expect(files.length).toBe(2);
    files.forEach(file => {
      const contents = file.contents.toString('utf8');
      expect(/undefined/.test(contents)).toBe(false);
    });
  });

  it('should provide installation instructions', async () => {
    const files = await promisedFiles;
    const instructions = renderInstructions(files.map(({ name }) => name));
    expect(instructions).toMatchSnapshot();
  });
});
