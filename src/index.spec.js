import { render } from './index';
import { colors } from 'themer-colors-default';
import path from 'path';

describe('render function', () => {

  const promisedFiles = Promise.all(render(colors));

  const basicFileCheck = async nameTest => {
    const files = await promisedFiles;
    const packageFiles = files.filter(file => nameTest.test(file.name));
    expect(packageFiles.length).toBe(2);
    packageFiles.forEach(file => {
      const contents = file.contents.toString('utf8');
      expect(/undefined/.test(contents)).toBe(false);
    });
  };

  it('should properly render package.json files', async () => await basicFileCheck(/package\.json/));
  it('should properly render color variables files', async () => await basicFileCheck(/colors\.less/));
  it('should properly render syntax variables files', async () => await basicFileCheck(/syntax-variables\.less/));
  it('should properly render index.less files', async () => await basicFileCheck(/index\.less/));

  it('should provide promised files whose contents are buffers', async () => {
    const files = await promisedFiles;
    files.forEach(file => expect(file.contents).toBeInstanceOf(Buffer));
  });

  it('should properly place files into a folder for dark and light each', async () => {
    const files = await promisedFiles;
    const uniqueDirs = new Set(files.map(file => path.dirname(file.name)));
    expect(uniqueDirs.size).toBe(2);
  });

  // TODO: start here. TDD: compile index.less

});
