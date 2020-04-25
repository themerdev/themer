const { render } = require('./index');
const { colors } = require('../../colors-default');

describe('themer color set swatch preview', () => {
  it('should use the color set name as the default name', done => {
    Promise.all(render(colors, { colors: 'colors-default' })).then(files => {
      expect(files.every(file => /colors-default-(light|dark)-swatch\.svg/.test(file.name))).toBe(true);
      done();
    });
  });
  it('should also accept custom names through options', done => {
    Promise.all(render(colors, { 'themer-preview-swatch-name': 'test', colors: 'colors-default' })).then(files => {
      expect(files.every(file => /test-(light|dark)-swatch\.svg/.test(file.name))).toBe(true);
      done();
    });
  });
  it('should render proper SVG files', done => {
    Promise.all(render(colors, { colors: 'colors-default' })).then(files => {
      files.forEach(file => {
        expect(file.contents.toString('utf8')).toMatchSnapshot();
      });
      done();
    });
  });
});
