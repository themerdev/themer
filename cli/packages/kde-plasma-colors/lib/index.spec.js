const { render, renderInstructions } = require('./index');
const { colors } = require('../../colors-default');

describe('themer kde-plasma-colors theme generator', () => {
  const promisedFiles = Promise.all(render(colors));
  it('renders valid theme files', async () => {
    const files = await promisedFiles;
    files.forEach((file) => {
      expect(file.contents.toString('utf8')).toMatchSnapshot();
    });
  });
  it('renders instructions', async () => {
    const files = await promisedFiles;
    const instructions = renderInstructions(files.map(({ name }) => name));
    expect(instructions).toMatchSnapshot();
  });
});
