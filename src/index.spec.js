jest.mock('svg2png', () => (sourceBuffer, options) => Promise.resolve(sourceBuffer));

import { render } from './index';

describe('themer "block wave" wallpaper', () => {

  const light = {
    accent0: '#ffffff',
    accent1: '#ffffff',
    accent2: '#ffffff',
    accent3: '#ffffff',
    accent4: '#ffffff',
    accent5: '#ffffff',
    accent6: '#ffffff',
    accent7: '#ffffff',
    shade0: '#ffffff',
    shade1: '#ffffff',
    shade2: '#ffffff',
    shade3: '#ffffff',
    shade4: '#ffffff',
    shade5: '#ffffff',
    shade6: '#ffffff',
    shade7: '#ffffff',
  };

  const dark = {
    accent0: '#000000',
    accent1: '#000000',
    accent2: '#000000',
    accent3: '#000000',
    accent4: '#000000',
    accent5: '#000000',
    accent6: '#000000',
    accent7: '#000000',
    shade0: '#000000',
    shade1: '#000000',
    shade2: '#000000',
    shade3: '#000000',
    shade4: '#000000',
    shade5: '#000000',
    shade6: '#000000',
    shade7: '#000000',
  };

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
        const promises = render(colors, { 'themer-wallpaper-block-wave-size': '600x600' });

        it(`should retrun four ${totalDefaultFiles / 2} to write`, async () => {
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

  test('when given both a light and a dark theme', { light: light, dark: dark }, 8);
  test('when given only a dark theme', { dark: dark }, 4);
  test('when given only a light theme', { light: light }, 4);

});
