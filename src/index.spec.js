import { render } from './index';
import { colors } from 'themer-colors-default';
import path from 'path';

describe('Hyper.app theme generator', () => {

  const promisedFiles = Promise.all(render(colors, {}));

  it('should render four files when given a color set with both a light and a dark theme', async () => {
    const files = await promisedFiles;
    expect(files.length).toBe(4);
    expect(files.filter(file => path.basename(file.name) === 'package.json').length).toBe(2);
    expect(files.filter(file => path.basename(file.name) === 'index.js').length).toBe(2);
  });

  it('should render files without any missing values', async () => {
    const files = await promisedFiles;
    expect(files.every(file => !/undefined/.test(file.contents.toString('utf8')))).toBe(true);
  });

  it('should provide promised files whose contents are buffers', async () => {
    const files = await promisedFiles;
    files.forEach(file => expect(file.contents).toBeInstanceOf(Buffer));
  });

});
