const { render } = require('./index');
const { colors } = require('themer-colors-default');

describe('render', () => {
  it('should render properly formatted ConEmu theme xml', done => {
    Promise.all(render(colors)).then(files => {
      expect(files.length).toBe(2);
      files.forEach(file => {
        expect(/themer-(dark|light)\.xml/.test(file.name)).toBe(true);
        expect(file.contents.toString('utf8')).toMatchSnapshot();
      });
      done();
    });
  });
});
