const { render, renderInstructions } = require('./index');
const { colors } = require('../../colors-default');
const { load } = require('js-yaml');

let promisedFiles;

beforeAll(() => {
  promisedFiles = Promise.all(render(colors));
});

describe('render', () => {
  it('should render the expected number of files', async () => {
    const files = await promisedFiles;
    expect(files.length).toBe(2);
  });

  it('should render valid Warp theme yaml', async () => {
    const files = await promisedFiles;
    files.forEach((file) => {
      expect(load(file.contents.toString('utf8'))).toMatchSnapshot();
    });
  });
});

describe('renderInstructions', () => {
  it('should provide installation instructions', async () => {
    const files = await promisedFiles;
    const instructions = renderInstructions(files.map(({ name }) => name));
    expect(instructions).toMatchSnapshot();
  });
});
