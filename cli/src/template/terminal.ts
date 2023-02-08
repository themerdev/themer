import type { Template } from './index.js';
import { brightMix, colorSetToVariants } from '../color-set/index.js';
import Color from 'color';
import { source } from 'common-tags';

// Prior art: stayradiated/termcolors and chriskempson/base16-builder
function toData(hex: string): string {
  const code: [Buffer, Buffer] = [
    Buffer.from(
      '62706c6973743030d40102030405061516582476657273696f6e58246f626a65637473' +
        '592461726368697665725424746f7012000186a0a307080f55246e756c6cd3090a0b' +
        '0c0d0e554e535247425c4e53436f6c6f7253706163655624636c6173734f1027',
      'hex',
    ),
    Buffer.from(
      '0010018002d2101112135a24636c6173736e616d655824636c6173736573574e53436f' +
        '6c6f72a21214584e534f626a6563745f100f4e534b657965644172636869766572d1' +
        '171854726f6f74800108111a232d32373b41484e5b628c8e9095a0a9b1b4bdcfd2d7' +
        '00000000000001010000000000000019000000000000000000000000000000d9',
      'hex',
    ),
  ];
  const srgb = Color(hex)
    .rgb()
    .array()
    .map((channel) => (channel / 255).toFixed(10))
    .join(' ');
  return Buffer.from(
    code[0].toString('binary') + srgb + code[1].toString('binary'),
    'binary',
  ).toString('base64');
}

const template: Template = {
  name: 'Terminal',
  render: async function* (colorSet) {
    const variants = colorSetToVariants(colorSet);
    for (const { title, colors, isDark } of variants) {
      yield {
        path: `${title.human}.terminal`,
        content: Buffer.from(
          source`
            <?xml version="1.0" encoding="UTF-8"?>
            <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
            <plist version="1.0">
              <dict>
                <key>name</key>
                <string>${title.human}</string>
                <key>type</key>
                <string>Window Settings</string>
                <key>BackgroundColor</key>
                <data>${toData(colors.shade0)}</data>
                <key>TextColor</key>
                <data>${toData(colors.shade6)}</data>
                <key>BoldTextColor</key>
                <data>${toData(colors.shade7)}</data>
                <key>CursorColor</key>
                <data>${toData(colors.accent6)}</data>
                <key>SelectionColor</key>
                <data>${toData(colors.accent7)}</data>
                <key>ANSIBlackColor</key>
                <data>${
                  isDark ? toData(colors.shade0) : toData(colors.shade7)
                }</data>
                <key>ANSIRedColor</key>
                <data>${toData(colors.accent0)}</data>
                <key>ANSIGreenColor</key>
                <data>${toData(colors.accent3)}</data>
                <key>ANSIYellowColor</key>
                <data>${toData(colors.accent2)}</data>
                <key>ANSIBlueColor</key>
                <data>${toData(colors.accent5)}</data>
                <key>ANSIMagentaColor</key>
                <data>${toData(colors.accent7)}</data>
                <key>ANSICyanColor</key>
                <data>${toData(colors.accent4)}</data>
                <key>ANSIWhiteColor</key>
                <data>${
                  isDark ? toData(colors.shade6) : toData(colors.shade1)
                }</data>
                <key>ANSIBrightBlackColor</key>
                <data>${
                  isDark ? toData(colors.shade1) : toData(colors.shade6)
                }</data>
                <key>ANSIBrightRedColor</key>
                <data>${toData(brightMix(colors, 'accent0', isDark))}</data>
                <key>ANSIBrightGreenColor</key>
                <data>${toData(brightMix(colors, 'accent3', isDark))}</data>
                <key>ANSIBrightYellowColor</key>
                <data>${toData(brightMix(colors, 'accent2', isDark))}</data>
                <key>ANSIBrightBlueColor</key>
                <data>${toData(brightMix(colors, 'accent5', isDark))}</data>
                <key>ANSIBrightMagentaColor</key>
                <data>${toData(brightMix(colors, 'accent7', isDark))}</data>
                <key>ANSIBrightCyanColor</key>
                <data>${toData(brightMix(colors, 'accent4', isDark))}</data>
                <key>ANSIBrightWhiteColor</key>
                <data>${
                  isDark ? toData(colors.shade7) : toData(colors.shade0)
                }</data>
              </dict>
            </plist>
          `,
          'utf8',
        ),
      };
    }
  },
  renderInstructions: (paths, colorSet) => source`
    1. Launch Terminal.app and open the preferences (\`cmd\`-\`,\`)
    2. Click Profiles > (...) icon > Import...
    3. Choose the generated ${paths.length > 1 ? 'files' : 'file'} (${paths
    .map((p) => `\`${p}\``)
    .join(' / ')})
    4. Select the imported theme (${colorSetToVariants(colorSet)
      .map((v) => v.title.human)
      .map((name) => `"${name}"`)
      .join(' or ')}) from the profile picker
  `,
};

export default template;
