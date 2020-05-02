const { render, renderInstructions } = require('./index');
const { colors } = require('../../colors-default');

describe('themer kitty theme generator', () => {
  const promisedFiles = Promise.all(render(colors));

  it('should generate well-formatted themes', async () => {
    const files = await promisedFiles;
    for (const file of files) {
      expect(file.contents.toString('utf8')).toMatchSnapshot();
    }
  });

  it('should provide installation instructions', async () => {
    const files = await promisedFiles;
    const instructions = renderInstructions(files.map(({ name }) => name));
    expect(instructions).toMatchSnapshot();
  });
});
