import { render, renderInstructions } from './index.mjs';
import { colors } from '@themerdev/colors-default';
import { describe, expect, it } from 'vitest';

describe('themer Windows Terminal theme generator', () => {
  const promisedFiles = Promise.all(render(colors));

  it('should generate well-formatted themes', async () => {
    const files = await promisedFiles;
    const hexMatcher = expect.stringMatching(/#[a-zA-Z0-9]{6}/);
    for (const file of files) {
      const theme = JSON.parse(file.contents.toString('utf8'));
      expect(theme).toMatchObject({
        background: hexMatcher,
        black: hexMatcher,
        blue: hexMatcher,
        brightBlack: hexMatcher,
        brightBlue: hexMatcher,
        brightCyan: hexMatcher,
        brightGreen: hexMatcher,
        brightPurple: hexMatcher,
        brightRed: hexMatcher,
        brightWhite: hexMatcher,
        brightYellow: hexMatcher,
        cursorColor: hexMatcher,
        cyan: hexMatcher,
        foreground: hexMatcher,
        green: hexMatcher,
        name: expect.stringContaining('Themer'),
        purple: hexMatcher,
        red: hexMatcher,
        selectionBackground: hexMatcher,
        white: hexMatcher,
        yellow: hexMatcher,
      });
    }
  });

  it('should provide installation instructions', async () => {
    const files = await promisedFiles;
    const instructions = renderInstructions(files.map(({ name }) => name));
    expect(instructions).toMatchSnapshot();

    const singleThemeInstructions = renderInstructions([files[1].name]);
    expect(singleThemeInstructions).toMatchSnapshot();
  });
});
