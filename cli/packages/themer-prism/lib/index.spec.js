const { render, renderInstructions } = require('./index'),
  { colors } = require('../../themer-colors-default');

describe('render', () => {
  const promisedFiles = Promise.all(render(colors));
  it('should render the expected number of files', async () => {
    const files = await promisedFiles;
    expect(files.length).toBe(2);
  });
});

describe('renderInstructions', () => {
  it('should provide installation instructions', async () => {
    const files = await Promise.all(render(colors));
    const instructions = renderInstructions(files.map(({ name }) => name));
    expect(instructions).toMatchSnapshot();
  });
})