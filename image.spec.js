const Color = require('color');
const {colorPixel} = require('./image.js');

describe('color pixel renderer', () => {
  it('should render a single-pixel PNG image buffer of the given color', done => {
    colorPixel(Color('teal')).then(data => {
      expect(data.toString('base64')).toMatchSnapshot();
      done();
    });
  });
});
