const { render } = require('./index');
const { colors } = require('themer-colors-default');

describe('render', () => {
  it('should render a properly formatted BBEdit theme file', done => {
    Promise.all(render(colors)).then(files => {
      expect(files.length).toBe(2);
      files.forEach(file => {
        expect(/Themer (Dark|Light)\.bbColorScheme/.test(file.name)).toBe(true);
        expect(file.contents.toString('utf8')).toMatchSnapshot();
      });
      done();
    });
  });
});
