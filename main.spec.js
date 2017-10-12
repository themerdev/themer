const {render} = require('./index');
const {pickBy} = require('lodash');
const path = require('path');
const {colors} = require('themer-colors-default');

describe('render', () => {
  const promisedFiles = Promise.all(render(colors));

  it('should render one package directory for each theme in the colorset', done => {
    promisedFiles.then(files => {
      const packages = new Set();
      files.forEach(file => {
        const packageName = file.name.split(path.sep)[0];
        packages.add(packageName);
      });
      expect(packages.size).toBe(2);
      done();
    });
  });

  it('should render properly-formatted theme files', done => {
    promisedFiles.then(files => {
      files.forEach(file => {
        if (path.basename(file.name) === 'package.json') {
          expect(
            pickBy(
              JSON.parse(file.contents.toString('utf8')),
              (v, k) => k !== 'version'
            )
          ).toMatchSnapshot();
        } else {
          expect(file.contents.toString('utf8')).toMatchSnapshot();
        }
      });
      done();
    });
  });
});
