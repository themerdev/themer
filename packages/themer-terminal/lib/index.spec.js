const { render } = require('./index'),
  { colors } = require('../../themer-colors-default');

describe('Terminal.app theme generator', () => {

  global.jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5;
  const promisedFiles = render(colors, {});

  it('should render two files when given a color set with both a light and a dark theme', async () => {
    const files = await Promise.all(promisedFiles);
    expect(files.length).toBe(2);
    expect(files.some(file => /dark/.test(file.name))).toBe(true);
    expect(files.some(file => /light/.test(file.name))).toBe(true);
  });

  it('should render well-formed files without missing values', async () => {
    const files = await Promise.all(promisedFiles);
    files.forEach(file => expect(file.contents).toBeInstanceOf(Buffer));
    expect(files.some(file => /undefined/.test(file.contents.toString('utf8')))).toBe(false);
  });

});
