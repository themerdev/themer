import { join, resolve } from 'node:path';
import resolvePackage from './resolve.mjs';
import wrap from './test-helpers/wrap.mjs';
import { describe, expect, it } from 'vitest';

describe('the package resolver', () => {
  describe('paths to local files', () => {
    it('should resolve relative path', async () => {
      const colorsFilePath = join(
        'lib',
        'test-helpers',
        'colors',
        'colors.mjs',
      );
      const wrapped = await wrap(() => resolvePackage(colorsFilePath));
      expect(wrapped).not.toThrow();
    });
    it('should resolve absolute path', async () => {
      const colorsFilePath = resolve(
        'lib',
        'test-helpers',
        'colors',
        'colors.mjs',
      );
      const wrapped = await wrap(() => resolvePackage(colorsFilePath));
      expect(wrapped).not.toThrow();
    });
    it('should fail to resolve nonexistent paths', async () => {
      const wrapped = await wrap(() =>
        resolvePackage(resolve('foo', 'bar', 'baz.js')),
      );
      expect(wrapped).toThrow();
    });
  });

  describe('paths to local packages', () => {
    it('should resolve relative path', async () => {
      const colorsPackagePath = join('lib', 'test-helpers', 'colors');
      const wrapped = await wrap(() => resolvePackage(colorsPackagePath));
      expect(wrapped).not.toThrow();
    });
    it('should resolve absolute path', async () => {
      const colorsPackagePath = resolve('lib', 'test-helpers', 'colors');
      const wrapped = await wrap(() => resolvePackage(colorsPackagePath));
      expect(wrapped).not.toThrow();
    });
  });

  describe('npm packages', () => {
    it('should resolve npm packages', async () => {
      const wrapped = await wrap(() => resolvePackage('minimist'));
      expect(wrapped).not.toThrow();
    });
    it('should fail to resolve uninstalled packages', async () => {
      const wrapped = await wrap(() => resolvePackage('not-installed'));
      expect(wrapped).toThrow();
    });
  });
});
