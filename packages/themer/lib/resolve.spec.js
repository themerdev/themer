const path = require('path'),
  resolvePackage = require('./resolve'),
  wrap = require('./test-helpers/wrap');

describe('the package resolver', () => {

  const helperDir = path.resolve(__dirname, 'test-helpers');

  it('should resolve local files', async () => {
    const helperColors = path.resolve(helperDir, 'colors.js');
    const wrapped = await wrap(() => resolvePackage(helperColors));
    expect(wrapped).not.toThrow();
  });

  it('should resolve npm packages', async () => {
    const wrapped = await wrap(() => resolvePackage('minimist'));
    expect(wrapped).not.toThrow();
  });

  it('should fail to resolve nonexistent paths', async () => {
    const wrapped = await wrap(() => resolvePackage(path.resolve(__dirname, 'foo', 'bar', 'baz.js')));
    expect(wrapped).toThrow();
  });

  it('should fail to resolve uninstalled packages', async () => {
    const wrapped = await wrap(() => resolvePackage('not-installed'));
    expect(wrapped).toThrow();
  });

});

