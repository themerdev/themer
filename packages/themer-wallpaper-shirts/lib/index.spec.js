const { render } = require('./index');
const { colors } = require('../../themer-colors-default');

describe('themer "shirts" wallpaper', () => {
  it('should render valid SVG', done => {
    Promise.all(render(colors, {})).then(files => {
      files.forEach(file => {
        expect(file.contents.toString('utf8')).toMatchSnapshot();
      });
      done();
    });
  })
});
