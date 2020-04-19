const path = require('path');
const {pickBy} = require('lodash');
const {render, renderInstructions} = require('./index');
const {colors} = require('../../themer-colors-default');
const {version} = require('../package.json');

describe('Firefox theme generator', () => {
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
  it('should render properly formatted manifest files', done => {
    const promisedFiles = render(colors);
    Promise.all(promisedFiles).then(files => {
      files.forEach(file => {
        const contents = JSON.parse(file.contents);
        expect(contents.version).toBe(version);
        expect(
          pickBy(contents, (value, key) => key !== 'version')
        ).toMatchSnapshot();
      });
      done();
    });
  });
  it('should provide installation instructions', async () => {
    const files = await Promise.all(render(colors));
    const instructions = renderInstructions(files.map(({ name }) => name));
    expect(instructions).toMatchSnapshot();
  });
});
