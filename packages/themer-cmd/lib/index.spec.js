const {render} = require('./index');
const {colors} = require('themer-colors-default');

describe('render', () => {
  it('should render properly formatted CMD.exe theme .reg file', done => {
    Promise.all(render(colors)).then(files => {
      expect(files.length).toBe(2);
      files.forEach(file => {
        expect(/themer-(dark|light)\.reg/.test(file.name)).toBe(true);
        expect(file.contents.toString('utf8')).toMatchSnapshot();
      });
      done();
    });
  });
});
