const path = require('path');
const {render} = require('./index');
const {colors} = require('themer-colors-default');

describe('Chrome theme generator', () => {
  it('should render a directory containing a manifest.json', done => {
    const promisedFiles = render(colors);
    Promise.all(promisedFiles).then(files => {
      const dirnames = files.map(file => path.dirname(file.name));
      expect(dirnames.length).toBe(2);
      expect(dirnames).toContain('Themer Light');
      expect(dirnames).toContain('Themer Dark');
      done();
    });
  });
});
