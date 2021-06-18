const { formatColorSet, render, renderInstructions } = require('./index');
const { colors } = require('../../colors-default');

describe('formatColorSet', () => {
  it('should properly format from hex to space-delimited rounded decimal', () => {
    const input = { color0: '#ff0000', color1: '#c3aed0', color2: '#15232E' };
    const expected = {
      color0: '1 0 0 1',
      color1: '0.764706 0.682353 0.815686 1',
      color2: '0.082353 0.137255 0.180392 1',
    };
    expect(formatColorSet(input)).toEqual(expected);
  });
});

describe('render', () => {
  it('should render a properly formatted Xcode theme file', (done) => {
    Promise.all(render(colors)).then((files) => {
      expect(files.length).toBe(2);
      files.forEach((file) => {
        expect(/Themer (Dark|Light)\.dvtcolortheme/.test(file.name)).toBe(true);
        expect(file.contents.toString('utf8')).toMatchSnapshot();
      });
      done();
    });
  });
});

describe('renderInstructions', () => {
  it('should provide installation instructions', async () => {
    const files = await Promise.all(render(colors));
    const instructions = renderInstructions(files.map(({ name }) => name));
    expect(instructions).toMatchSnapshot();
  });
});
