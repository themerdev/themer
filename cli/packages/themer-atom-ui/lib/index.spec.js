const {render, renderInstructions} = require('./index'),
  {pickBy} = require('lodash'),
  path = require('path'),
  os = require('os'),
  fs = require('pn/fs'),
  mkdirp = require('mkdirp-promise'),
  less = require('less'),
  {colors} = require('../../themer-colors-default');

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

  it('should produce valid compiled CSS', done => {
    const tmp = path.join(os.tmpdir(), new Date().valueOf().toString());
    promisedFiles
      .then(files =>
        Promise.all(
          files.map(file => {
            const outputFilePath = path.resolve(tmp, file.name);
            return mkdirp(path.dirname(outputFilePath))
              .then(() => fs.writeFile(outputFilePath, file.contents))
              .then(() => outputFilePath);
          })
        )
      )
      .then(outputFilePaths => {
        const indexFilePaths = outputFilePaths.filter(outputFilePath =>
          /index\.less/.test(outputFilePath)
        );
        expect(indexFilePaths.length).toBe(2);
        return Promise.all(
          indexFilePaths.map(indexFilePath => {
            return fs.readFile(indexFilePath, 'utf8').then(contents =>
              less.render(contents, {
                paths: [path.dirname(indexFilePath)],
                filename: path.basename(indexFilePath),
              })
            );
          })
        );
      })
      .then(compiledContents => {
        compiledContents.forEach(contents => {
          expect(contents.css).toMatchSnapshot();
        });
        done();
      });
  });
});

describe('renderInstructions', () => {
  it('should provide installation instructions', async () => {
    const files = await Promise.all(render(colors));
    const instructions = renderInstructions(files.map(({ name }) => name));
    expect(instructions).toMatchSnapshot();
  });
});
