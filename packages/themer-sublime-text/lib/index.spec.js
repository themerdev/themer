const { colors } = require('../../themer-colors-default'),
  { render } = require('./index'),
  plist = require('plist');

describe('themer Sublime Text theme generator', () => {

  const promisedFiles = Promise.all(render(colors, {}));

  it('should produce two files when given a color set with both a dark and a light theme', async () => {
    const files = await promisedFiles;
    expect(files.length).toBe(2);
    expect(files.some(file => /dark/.test(file.name))).toBe(true);
    expect(files.some(file => /light/.test(file.name))).toBe(true);
  });

  it('should produce valid plist files', async () => {
    const files = await promisedFiles;
    files.forEach(file => {
      const contents = file.contents.toString('utf8');
      expect(plist.parse.bind(plist, contents)).not.toThrow();
    });
  });

});
