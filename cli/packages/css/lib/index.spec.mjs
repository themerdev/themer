import { render, renderInstructions } from './index.mjs';
import { colors } from '@themerdev/colors-default';
import { describe, expect, it } from 'vitest';

describe('themer css theme generator', () => {
  const promisedFiles = Promise.all(render(colors));

  it('should generate valid CSS', async () => {
    const files = await promisedFiles;
    expect(files.length).toBe(3);
    files.forEach((file) => {
      const contents = file.contents.toString('utf8');
      expect(contents).toMatchSnapshot();
    });
  });

  it('should provide usage instructions', async () => {
    const files = await Promise.all(render(colors));
    const instructions = renderInstructions(files.map(({ name }) => name));
    expect(instructions).toMatchSnapshot();
  });
});
