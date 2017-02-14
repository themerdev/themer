import child_process from 'pn/child_process';
import fs from 'pn/fs';
import path from 'path';
import wrap from './test-helpers/wrap';
import { outputFileDirectory, outputFileName, outputFileContents } from './test-helpers/template';

describe('the themer command line interface', () => {

  const pathToExecutable = path.resolve('bin', 'themer.js');

  it('should fail if no arguments are provided', async () => {
    const wrapped = await wrap(() => child_process.execFile(pathToExecutable).promise);
    expect(wrapped).toThrow();
  });

  it('should fail if given unresolvable arguments', async () => {
    const args = [
      '-c', 'fake',
      '-t', 'fake',
      '-o', 'fake',
    ];
    const wrapped = await wrap(() => child_process.execFile(pathToExecutable, args).promise);
    expect(wrapped).toThrow();
  });

  describe('when given valid arguments', () => {

    const testOutputDir = path.resolve('test-output');
    const templateName = 'template.js';
    const testOutputFile = path.resolve(testOutputDir, templateName, outputFileDirectory, outputFileName);
    const args = [
      '-c', path.resolve('lib', 'test-helpers', 'colors.js'),
      '-t', path.resolve('lib', 'test-helpers', templateName),
      '-o', testOutputDir,
    ];

    afterEach(() => child_process.exec(`rm -rf ${testOutputDir}`).promise);

    it('should complete without error', async () => {
      const wrapped = await wrap(() => child_process.execFile(pathToExecutable, args).promise);
      expect(wrapped).not.toThrow();
    });

    it('should create the specified output directory if necessary', async () => {
      await child_process.execFile(pathToExecutable, args).promise;
      const wrapped = await wrap(() => fs.access(testOutputDir));
      expect(wrapped).not.toThrow();
    });

    it('should create a directory for each template, named after the template', async () => {
      await child_process.execFile(pathToExecutable, args).promise;
      const wrapped = await wrap(() => fs.access(path.resolve(testOutputDir, templateName)));
      expect(wrapped).not.toThrow();
    });

    it('should render any subdirectories that the templates might specify', async () => {
      await child_process.execFile(pathToExecutable, args).promise;
      const wrapped = await wrap(() => fs.access(path.resolve(testOutputDir, templateName, outputFileDirectory)));
      expect(wrapped).not.toThrow();
    });

    it('should render output files into the specified directory', async () => {
      await child_process.execFile(pathToExecutable, args).promise;
      const wrapped = await wrap(() => fs.access(testOutputFile));
      expect(wrapped).not.toThrow();
    });

    it('should render output files properly', async () => {
      await child_process.execFile(pathToExecutable, args).promise;
      const contents = await fs.readFile(testOutputFile, 'utf8');
      expect(contents).toEqual(outputFileContents);
    });

  });

});
