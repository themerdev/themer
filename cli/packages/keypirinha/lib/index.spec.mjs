import { render, renderInstructions } from './index.mjs';
import { colors } from '@themerdev/colors-default';
import { describe, expect, it } from 'vitest';

describe('themer keypirinha theme generator', () => {
  const promisedFiles = Promise.all(render(colors));
  const colorPropertyNames = [
    'color_background',
    'color_foreground',
    'color_faded',
    'color_accent',
    'color_warn',
    'color_title',
    'color_status',
    'color_textbox_back',
    'color_listitem_back',
    'color_listitem_title',
    'color_listitem_desc',
    'color_listitem_tips',
    'color_listitem_selected_back',
    'color_listitem_selected_title',
    'color_listitem_selected_desc',
    'color_listitem_selected_tips',
  ];

  it('should generate well-formatted themes', async () => {
    const files = await promisedFiles;
    expect(files.length).toBe(2);
    files.forEach((file) => {
      expect(/themer-keypirinha-(dark|light)\.ini/.test(file.name)).toBe(true);
      const fileLines = file.contents.toString('utf8').split('\n');
      expect(/\[theme\/Themer(Dark|Light)Colors\]/.test(fileLines[0])).toBe(
        true,
      );
      for (let i = 1; i < fileLines.length; i++) {
        if (fileLines[i] === '') continue;
        else {
          const [colorPropertyName, color] = fileLines[i].split('=');
          expect(
            colorPropertyNames.indexOf(colorPropertyName.trim()),
          ).toBeGreaterThan(-1);
          expect(/^#[a-fA-F0-9]+$/.test(color.trim())).toBe(true);
        }
      }
    });
  });

  it('should provide installation instructions', async () => {
    const files = await promisedFiles;
    const instructions = renderInstructions(files.map(({ name }) => name));
    expect(instructions).toMatchSnapshot();

    const singleThemeInstructions = renderInstructions([files[1].name]);
    expect(singleThemeInstructions).toMatchSnapshot();
  });
});
