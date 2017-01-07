jest.mock('svg2png', () => (sourceBuffer) => Promise.resolve(sourceBuffer));

import { render } from './index';
import { colors } from 'themer-colors-default';

describe('themer "octagon" wallpaper', () => {

  const test = (scenario, colors, totalDefaultFiles) => {

    describe(scenario, () => {

      describe('and when rendering only default resolutions', () => {
        const promises = render(colors, {});

        it(`should return ${totalDefaultFiles} files to write`, async () => {
          const files = await Promise.all(promises);
          expect(files.length).toBe(totalDefaultFiles);
          expect(files.filter(file => /\.svg/.test(file.name)).length).toBe(totalDefaultFiles / 2);
          expect(files.filter(file => /\.png/.test(file.name)).length).toBe(totalDefaultFiles / 2);
        });

        it('should not contain "undefined" in the SVG output', async () => {
          const files = await Promise.all(promises);
          files.filter(file => /\.svg/.test(file.name)).forEach(file => {
            expect(file.contents.toString('utf-8')).not.toContain('undefined');
          });
        });

      });

      describe('and when rendering a given resolution', () => {
        const promises = render(colors, { 'themer-wallpaper-octagon-size': '600x600' });

        it(`should return ${totalDefaultFiles / 2} files to write`, async () => {
          const files = await Promise.all(promises);
          expect(files.length).toBe(totalDefaultFiles / 2);
          expect(files.filter(file => /\.svg/.test(file.name)).length).toBe(totalDefaultFiles / 4);
          expect(files.filter(file => /\.png/.test(file.name)).length).toBe(totalDefaultFiles / 4);
        });

        it('should not contain "undefined" in the SVG output', async () => {
          const files = await Promise.all(promises);
          files.filter(file => /\.svg/.test(file.name)).forEach(file => {
            expect(file.contents.toString('utf-8')).not.toContain('undefined');
          });
        });

      });

    });

  };

  test('when given both a light and a dark theme', colors, 8);
  test('when given only a dark theme', { dark: colors.dark }, 4);
  test('when given only a light theme', { light: colors.light }, 4);

});
