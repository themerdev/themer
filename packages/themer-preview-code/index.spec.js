const { render } = require('./index');
const { colors } = require('themer-colors-default');

describe('themer color set code preview', () => {
  it('should use the color set name as the default name', done => {
    Promise.all(render(colors, { colors: 'themer-colors-default' })).then(files => {
      expect(files.every(file => /themer-colors-default-(light|dark)-code\.svg/.test(file.name))).toBe(true);
      done();
    });
  });
  it('should also accept custom names through options', done => {
    Promise.all(render(colors, { 'themer-preview-code-name': 'test', colors: 'themer-colors-default' })).then(files => {
      expect(files.every(file => /test-(light|dark)-code\.svg/.test(file.name))).toBe(true);
      done();
    });
  });
  it('should render proper SVG files', done => {
    Promise.all(render(colors, { colors: 'themer-colors-default' })).then(files => {
      files.forEach(file => {
        expect(file.contents.toString('utf8')).toMatchSnapshot();
      });
      done();
    });
  });
});
