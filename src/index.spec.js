import { render } from './index';
import { colors } from 'themer-colors-default';

describe('Hyper.app theme generator', () => {

  const promisedFiles = render(colors, {});

  it('should render two files when given a color set with both a light and a dark theme', async () => {
    const files = await Promise.all(promisedFiles);
    expect(files.length).toBe(2);
    expect(files.some(file => /dark/.test(file.name))).toBe(true);
    expect(files.some(file => /light/.test(file.name))).toBe(true);
  });

  it('should render files with no missing values', async () => {
    const files = await Promise.all(promisedFiles);
    expect(files.every(file => !/undefined/.test(file.contents.toString('utf8')))).toBe(true);
  });

});
