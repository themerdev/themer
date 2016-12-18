import { render } from './index';

describe('iTerm theme generator', () => {

  const darkSet = {
    accent0: '#000000',
    accent1: '#000000',
    accent2: '#000000',
    accent3: '#000000',
    accent4: '#000000',
    accent5: '#000000',
    accent6: '#000000',
    accent7: '#000000',
    shade0: '#000000',
    shade1: '#000000',
    shade2: '#000000',
    shade3: '#000000',
    shade4: '#000000',
    shade5: '#000000',
    shade6: '#000000',
    shade7: '#000000',
  };
  const lightSet = {
    accent0: '#ffffff',
    accent1: '#ffffff',
    accent2: '#ffffff',
    accent3: '#ffffff',
    accent4: '#ffffff',
    accent5: '#ffffff',
    accent6: '#ffffff',
    accent7: '#ffffff',
    shade0: '#ffffff',
    shade1: '#ffffff',
    shade2: '#ffffff',
    shade3: '#ffffff',
    shade4: '#ffffff',
    shade5: '#ffffff',
    shade6: '#ffffff',
    shade7: '#ffffff',
  };

  const promisedFiles = render({ dark: darkSet, light: lightSet }, {});

  it('should render two files when given a color set with both a light and a dark theme', async () => {
    const files = await Promise.all(promisedFiles);
    expect(files.length).toBe(2);
    expect(files.some(file => /dark/.test(file.name))).toBe(true);
    expect(files.some(file => /light/.test(file.name))).toBe(true);
  });

  it('should render well-formed files without missing values', async () => {
    const files = await Promise.all(promisedFiles);
    expect(files.some(file => /undefined/.test(file.contents.toString('utf8')))).toBe(false);
  });

});
