const path = require('path'),
  resolvePackage = require('./resolve'),
  wrap = require('./test-helpers/wrap');

describe('the package resolver', () => {

  const helperDir = path.resolve('lib', 'test-helpers');

  it('should resolve local files', async () => {
    const helperColors = path.resolve(helperDir, 'colors.js');
    const wrapped = await wrap(() => resolvePackage(helperColors));
    expect(wrapped).not.toThrow();
  });

  it('should resolve npm packages', async () => {
    const wrapped = await wrap(() => resolvePackage('minimist'));
    expect(wrapped).not.toThrow();
  });

  it('should fail to resolve nonexistant paths', async () => {
    const wrapped = await wrap(() => resolvePackage(path.resolve('foo', 'bar', 'baz.js')));
    expect(wrapped).toThrow();
  });

  it('should fail to resolve uninstalled packages', async () => {
    const wrapped = await wrap(() => resolvePackage('themer-hyper'));
    expect(wrapped).toThrow();
  });

});

