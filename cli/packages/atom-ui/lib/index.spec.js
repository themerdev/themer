const { render, renderInstructions } = require('./index'),
  { pickBy } = require('lodash'),
  path = require('path'),
  os = require('os'),
  { promisify } = require('util'),
  fs = require('fs'),
  writeFile = promisify(fs.writeFile),
  readFile = promisify(fs.readFile),
  mkdir = promisify(fs.mkdir),
  less = require('less'),
  { colors } = require('../../themer-colors-default');

describe('render', () => {
  const promisedFiles = Promise.all(render(colors));

  it('should render one package directory for each theme in the colorset', async () => {
    const files = await promisedFiles;
    const packages = new Set();
    files.forEach(file => {
      const packageName = file.name.split(path.sep)[0];
      packages.add(packageName);
    });
    expect(packages.size).toBe(2);
  });

  it('should render properly-formatted theme files', async () => {
    const files = await promisedFiles;
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
  });

  it('should produce valid compiled CSS', async () => {
    const tmp = path.join(os.tmpdir(), new Date().valueOf().toString());
    const files = await promisedFiles;
    const outputFilePaths = await Promise.all(
      files.map(async file => {
        const outputFilePath = path.resolve(tmp, file.name);
        await mkdir(path.dirname(outputFilePath), { recursive: true });
        await writeFile(outputFilePath, file.contents);
        return outputFilePath;
      }),
    );
    const indexFilePaths = outputFilePaths.filter(outputFilePath =>
      /index\.less/.test(outputFilePath)
    );
    expect(indexFilePaths.length).toBe(2);
    const compiledContents = await Promise.all(
      indexFilePaths.map(async indexFilePath => {
        const contents = await readFile(indexFilePath, 'utf8')
        return await less.render(contents, {
          paths: [path.dirname(indexFilePath)],
          filename: path.basename(indexFilePath),
        });
      }),
    );
    compiledContents.forEach(contents => {
      expect(contents.css).toMatchSnapshot();
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
