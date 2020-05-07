const { render, renderInstructions } = require('./index');
const { colors } = require('../../colors-default');

describe('themer Windows Terminal theme generator', () => {
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

    const singleThemeInstructions = renderInstructions([files[1].name]);
    expect(singleThemeInstructions).toMatchSnapshot();
  });
});
