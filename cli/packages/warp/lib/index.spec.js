const { render, renderInstructions } = require('./index');
const { colors } = require('../../colors-default');

describe('render', () => {
  const promisedFiles = Promise.all(
    render(colors, {
      _: [],
      c: './colors-default',
      colors: './colors-default',
      t: './warp',
      template: ['./warp'],
      o: '/tmp/themer',
      out: '/tmp/themer',
    }),
  );

  it('should render the expected number of files', async () => {
    const files = await promisedFiles;
    expect(files.length).toBe(2);
  });

  it('should render valid Warp theme yaml', async () => {
    const files = await promisedFiles;
    files.forEach((file) => {
      const contents = file.contents.toString('utf8');
      expect(
        /([ ]+)?((\\w+|[^\\w\\s\\r\\n])([ ]*))?(?:\\r)?(\\n)?/.test(contents),
      ).toBe(true);
    });
  });
});

describe('renderInstructions', () => {
  it('should provide installation instructions', async () => {
    const files = await Promise.all(
      render(colors, {
        _: [],
        c: './colors-default',
        colors: './colors-default',
        t: './warp',
        template: ['./warp'],
        o: '/tmp/themer',
        out: '/tmp/themer',
      }),
    );
    const instructions = renderInstructions(files.map(({ name }) => name));
    expect(instructions).toMatchSnapshot();
  });
});
