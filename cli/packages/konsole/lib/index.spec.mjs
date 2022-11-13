import { render, renderInstructions } from './index.mjs';
import { colors } from '@themerdev/colors-default';
import { describe, expect, it } from 'vitest';

describe('themer konsole theme generator', () => {
  const promisedFiles = Promise.all(render(colors));

  it('should generate well-formatted themes', async () => {
    const files = await promisedFiles;
    for (const file of files) {
      expect(file.contents.toString('utf8')).toMatchSnapshot();
    }
  });

  it('should provide installation instructions', async () => {
    const files = await promisedFiles;
    const instructions = renderInstructions(files.map(({ name }) => name));
    expect(instructions).toMatchSnapshot();
  });
});
