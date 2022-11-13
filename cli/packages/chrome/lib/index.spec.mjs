import { dirname } from 'node:path';
import { pickBy } from 'lodash';
import { render, renderInstructions } from './index.mjs';
import { colors } from '@themerdev/colors-default';
import { version } from '../package.json' assert { type: 'json' };
import { describe, expect, it } from 'vitest';

describe('Chrome theme generator', () => {
  it('should render a directory containing a manifest.json', async () => {
    const promisedFiles = render(colors);
    Promise.all(promisedFiles).then((files) => {
      const dirnames = files.map((file) => dirname(file.name));
      expect(dirnames.length).toBe(2);
      expect(dirnames).toContain('Themer Light');
      expect(dirnames).toContain('Themer Dark');
    });
  });
  it('should render properly formatted manifest files', async () => {
    const promisedFiles = render(colors);
    Promise.all(promisedFiles).then((files) => {
      files.forEach((file) => {
        const contents = JSON.parse(file.contents);
        expect(contents.version).toBe(version);
        expect(
          pickBy(contents, (value, key) => key !== 'version'),
        ).toMatchSnapshot();
      });
    });
  });
  it('should provide installation instructions', async () => {
    const files = await Promise.all(render(colors));
    const instructions = renderInstructions(files.map(({ name }) => name));
    expect(instructions).toMatchSnapshot();
  });
});
