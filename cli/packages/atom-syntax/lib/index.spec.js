const { render, renderInstructions } = require('./index'),
  { colors } = require('../../colors-default'),
  os = require('os'),
  fs = require('fs'),
  { promisify } = require('util'),
  writeFile = promisify(fs.writeFile),
  readFile = promisify(fs.readFile),
  mkdir = promisify(fs.mkdir),
  less = require('less'),
  path = require('path');

describe('render function', () => {
  const promisedFiles = Promise.all(render(colors));

  const basicFileCheck = async (nameTest) => {
    const files = await promisedFiles;
    const packageFiles = files.filter((file) => nameTest.test(file.name));
    expect(packageFiles.length).toBe(2);
    packageFiles.forEach((file) => {
      const contents = file.contents.toString('utf8');
      expect(/undefined/.test(contents)).toBe(false);
    });
  };

  const wrap = async (fn) => {
    try {
      const result = await fn();
      return () => result;
    } catch (e) {
      return () => {
        throw e;
      };
    }
  };

  const outputDir = path.join(os.tmpdir(), new Date().valueOf().toString());

  it('should properly render package.json files', async () =>
    await basicFileCheck(/package\.json/));
  it('should properly render color variables files', async () =>
    await basicFileCheck(/colors\.less/));
  it('should properly render syntax variables files', async () =>
    await basicFileCheck(/syntax-variables\.less/));
  it('should properly render index.less files', async () =>
    await basicFileCheck(/index\.less/));

  it('should provide promised files whose contents are buffers', async () => {
    const files = await promisedFiles;
    files.forEach((file) => expect(file.contents).toBeInstanceOf(Buffer));
  });

  it('should properly place files into a folder for dark and light each', async () => {
    const files = await promisedFiles;
    const uniqueDirs = new Set(files.map((file) => path.dirname(file.name)));
    expect(uniqueDirs.size).toBe(2);
  });

  it('should provide non-absolute paths for the files to be written', async () => {
    const files = await promisedFiles;
    const paths = files.map((file) => file.name);
    expect(paths.some(path.isAbsolute)).toBe(false);
  });

  it('should produce valid, compilable less', async () => {
    const files = await promisedFiles;
    const outputFilePaths = await Promise.all(
      files.map(async (file) => {
        const outputFilePath = path.resolve(outputDir, file.name);
        await mkdir(path.dirname(outputFilePath), { recursive: true });
        await writeFile(outputFilePath, file.contents);
        return outputFilePath;
      }),
    );
    const indexFilePaths = outputFilePaths.filter((outputFilePath) =>
      /index\.less/.test(outputFilePath),
    );
    expect(indexFilePaths.length).toBe(2);
    const wrapped = await wrap(() =>
      Promise.all(
        indexFilePaths.map(async (indexFilePath) => {
          const contents = await readFile(indexFilePath, 'utf8');
          return await less.render(contents, {
            paths: [path.dirname(indexFilePath)],
            filename: path.basename(indexFilePath),
          });
        }),
      ),
    );
    expect(wrapped).not.toThrow();
  });
});

describe('renderInstructions function', () => {
  it('should provide installation instructions', async () => {
    const files = await Promise.all(render(colors));
    const instructions = renderInstructions(files.map(({ name }) => name));
    expect(instructions).toMatchSnapshot();
  });
});
