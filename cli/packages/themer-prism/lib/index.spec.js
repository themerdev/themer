const { render } = require('./index'),
  { colors } = require('../../themer-colors-default');

describe('render', () => {
  const promisedFiles = Promise.all(render(colors));
  it('should render the expected number of files', async () => {
    const files = await promisedFiles;
    expect(files.length).toBe(2);
  });
});
