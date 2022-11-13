import { render, renderInstructions } from './index.mjs';
import { colors } from '@themerdev/colors-default';
import { describe, expect, it } from 'vitest';

describe('themer xresources theme generator', () => {
  const promisedFiles = Promise.all(render(colors));
  it('renders valid theme files', async () => {
    const files = await promisedFiles;
    files.forEach((file) => {
      expect(file.contents.toString('utf8')).toMatchSnapshot();
    });
  });
  it('renders instructions', async () => {
    const files = await promisedFiles;
    const instructions = renderInstructions(files.map(({ name }) => name));
    expect(instructions).toMatchSnapshot();
  });
});
