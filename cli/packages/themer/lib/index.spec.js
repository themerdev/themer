const child_process = require('child_process'),
  fs = require('fs'),
  { tmpdir } = require('os'),
  { promisify } = require('util'),
  execFile = promisify(child_process.execFile),
  exec = promisify(child_process.exec),
  access = promisify(fs.access),
  readFile = promisify(fs.readFile),
  path = require('path'),
  wrap = require('./test-helpers/wrap'),
  {
    outputFileDirectory,
    outputFileName,
    outputFileContents,
    readmeInstructions,
  } = require('./test-helpers/template');

describe('the themer command line interface', () => {

  const pathToExecutable = path.resolve(__dirname, '..', 'bin', 'themer.js');

  it('should fail if no arguments are provided', async () => {
    const wrapped = await wrap(() => execFile(pathToExecutable));
    expect(wrapped).toThrow();
  });

  it('should fail if given unresolvable arguments', async () => {
    const args = [
      '-c', 'fake',
      '-t', 'fake',
      '-o', 'fake',
    ];
    const wrapped = await wrap(() => execFile(pathToExecutable, args));
    expect(wrapped).toThrow();
  });

  describe('when given valid arguments', () => {

    const testOutputDir = path.resolve(tmpdir(), 'test-output');
    const templateName = 'template.js';
    const testOutputFile = path.resolve(testOutputDir, templateName, outputFileDirectory, outputFileName);
    const args = [
      '-c', path.resolve(__dirname, 'test-helpers', 'colors.js'),
      '-t', path.resolve(__dirname, 'test-helpers', templateName),
      '-o', testOutputDir,
    ];

    afterEach(() => exec(`rm -rf ${testOutputDir}`));

    it('should complete without error', async () => {
      const wrapped = await wrap(() => execFile(pathToExecutable, args));
      expect(wrapped).not.toThrow();
    });

    it('should create the specified output directory if necessary', async () => {
      await execFile(pathToExecutable, args);
      const wrapped = await wrap(() => access(testOutputDir));
      expect(wrapped).not.toThrow();
    });

    it('should create a directory for each template, named after the template', async () => {
      await execFile(pathToExecutable, args);
      const wrapped = await wrap(() => access(path.resolve(testOutputDir, templateName)));
      expect(wrapped).not.toThrow();
    });

    it('should render any subdirectories that the templates might specify', async () => {
      await execFile(pathToExecutable, args);
      const wrapped = await wrap(() => access(path.resolve(testOutputDir, templateName, outputFileDirectory)));
      expect(wrapped).not.toThrow();
    });

    it('should render output files into the specified directory', async () => {
      await execFile(pathToExecutable, args);
      const wrapped = await wrap(() => access(testOutputFile));
      expect(wrapped).not.toThrow();
    });

    it('should render output files properly', async () => {
      await execFile(pathToExecutable, args);
      const contents = await readFile(testOutputFile, 'utf8');
      expect(contents).toEqual(outputFileContents);
    });

    it('should render README.md properly', async () => {
      await execFile(pathToExecutable, args);
      const contents = await readFile(path.resolve(testOutputDir, 'README.md'), 'utf8');
      expect(contents).toContain(readmeInstructions);
      expect(contents).toContain(outputFileName);
    });

  });

});
