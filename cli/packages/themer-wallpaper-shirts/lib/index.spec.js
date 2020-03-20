const { render, renderInstructions } = require('./index');
const { colors } = require('../../themer-colors-default');

describe('themer "shirts" wallpaper', () => {
  it('should render valid SVG', done => {
    Promise.all(render(colors, {})).then(files => {
      files.forEach(file => {
        expect(file.contents.toString('utf8')).toMatchSnapshot();
      });
      done();
    });
  });
  it('should list outputfiles', async () => {
    const files = await Promise.all(render(colors, { 'themer-wallpaper-shirts-size': '1000x1000' }));
    const instructions = renderInstructions(files.map(({ name }) => name));
    expect(instructions).toMatchSnapshot();
  });
});
