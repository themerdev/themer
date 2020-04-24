const { render, renderInstructions } = require('./index');
const { colors } = require('../../themer-colors-default');

describe('Brave theme generator', () => {
  it('should provide installation instructions', async () => {
    const files = await Promise.all(render(colors));
    const instructions = renderInstructions(files.map(({ name }) => name));
    expect(instructions).toMatchSnapshot();
  });
});
