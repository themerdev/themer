const { render } = require('./index');
const { colors } = require('themer-colors-default');

describe('render', () => {
  it('should render properly formatted .sketchpalette files', done => {
    Promise.all(render(colors)).then(files => {
      expect(files.length).toBe(2);
      files.forEach(file => {
        expect(file.contents.toString('utf8')).toMatchSnapshot();
      });
      done();
    });
  });
});
