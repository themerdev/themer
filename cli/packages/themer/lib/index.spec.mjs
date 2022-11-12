import { execFile as _execFile, exec as _exec } from 'node:child_process';
import { promisify } from 'node:util';
import { tmpdir } from 'node:os';
import { access, readFile } from 'node:fs/promises';
import {
  outputFileContents,
  outputFileDirectory,
  outputFileName,
  readmeInstructions,
} from './test-helpers/template.mjs';
import wrap from './test-helpers/wrap.mjs';
import path from 'node:path';
import { describe, expect, it, afterEach } from 'vitest';
import { fileURLToPath } from 'node:url';

const execFile = promisify(_execFile);
const exec = promisify(_exec);
const __dirname = fileURLToPath(new URL('.', import.meta.url));

describe('the themer command line interface', () => {
  const pathToExecutable = path.resolve(__dirname, '..', 'bin', 'themer.mjs');

  it('should fail if no arguments are provided', async () => {
    const wrapped = await wrap(() => execFile(pathToExecutable));
    expect(wrapped).toThrow();
  });

  it('should fail if given unresolvable arguments', async () => {
    const args = ['-c', 'fake', '-t', 'fake', '-o', 'fake'];
    const wrapped = await wrap(() => execFile(pathToExecutable, args));
    expect(wrapped).toThrow();
  });

  describe('when given valid arguments', () => {
    const testOutputDir = path.resolve(tmpdir(), 'test-output');
    const templateName = 'template.mjs';
    const testOutputFile = path.join(
      testOutputDir,
      templateName,
      outputFileDirectory,
      outputFileName,
    );
    const args = [
      '-c',
      path.resolve(__dirname, 'test-helpers', 'colors', 'colors.mjs'),
      '-t',
      path.resolve(__dirname, 'test-helpers', templateName),
      '-o',
      testOutputDir,
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
      const wrapped = await wrap(() =>
        access(path.resolve(testOutputDir, templateName)),
      );
      expect(wrapped).not.toThrow();
    });

    it('should render any subdirectories that the templates might specify', async () => {
      await execFile(pathToExecutable, args);
      const wrapped = await wrap(() =>
        access(path.resolve(testOutputDir, templateName, outputFileDirectory)),
      );
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
      const contents = await readFile(
        path.resolve(testOutputDir, 'README.md'),
        'utf8',
      );
      expect(contents).toContain(readmeInstructions);
      expect(contents).toContain(outputFileName);
    });
  });
});
