import type { Template } from './index.js';
import { brightMix, colorSetToVariants } from '../color-set/index.js';
import Color from 'color';
import { source } from 'common-tags';
import { fromByteArray } from 'base64-js';

function stringToByteArray(str: string) {
  const bytes = [];
  for (let i = 0; i < str.length; i++) {
    bytes.push(str.charCodeAt(i));
  }
  return new Uint8Array(bytes);
}

// Prior art: stayradiated/termcolors and chriskempson/base16-builder
export function toData(hex: string): string {
  const code: [Uint8Array, Uint8Array] = [
    new Uint8Array([
      0x62, 0x70, 0x6c, 0x69, 0x73, 0x74, 0x30, 0x30, 0xd4, 0x01, 0x02, 0x03,
      0x04, 0x05, 0x06, 0x15, 0x16, 0x58, 0x24, 0x76, 0x65, 0x72, 0x73, 0x69,
      0x6f, 0x6e, 0x58, 0x24, 0x6f, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x59,
      0x24, 0x61, 0x72, 0x63, 0x68, 0x69, 0x76, 0x65, 0x72, 0x54, 0x24, 0x74,
      0x6f, 0x70, 0x12, 0x00, 0x01, 0x86, 0xa0, 0xa3, 0x07, 0x08, 0x0f, 0x55,
      0x24, 0x6e, 0x75, 0x6c, 0x6c, 0xd3, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e,
      0x55, 0x4e, 0x53, 0x52, 0x47, 0x42, 0x5c, 0x4e, 0x53, 0x43, 0x6f, 0x6c,
      0x6f, 0x72, 0x53, 0x70, 0x61, 0x63, 0x65, 0x56, 0x24, 0x63, 0x6c, 0x61,
      0x73, 0x73, 0x4f, 0x10, 0x27,
    ]),
    new Uint8Array([
      0x00, 0x10, 0x01, 0x80, 0x02, 0xd2, 0x10, 0x11, 0x12, 0x13, 0x5a, 0x24,
      0x63, 0x6c, 0x61, 0x73, 0x73, 0x6e, 0x61, 0x6d, 0x65, 0x58, 0x24, 0x63,
      0x6c, 0x61, 0x73, 0x73, 0x65, 0x73, 0x57, 0x4e, 0x53, 0x43, 0x6f, 0x6c,
      0x6f, 0x72, 0xa2, 0x12, 0x14, 0x58, 0x4e, 0x53, 0x4f, 0x62, 0x6a, 0x65,
      0x63, 0x74, 0x5f, 0x10, 0x0f, 0x4e, 0x53, 0x4b, 0x65, 0x79, 0x65, 0x64,
      0x41, 0x72, 0x63, 0x68, 0x69, 0x76, 0x65, 0x72, 0xd1, 0x17, 0x18, 0x54,
      0x72, 0x6f, 0x6f, 0x74, 0x80, 0x01, 0x08, 0x11, 0x1a, 0x23, 0x2d, 0x32,
      0x37, 0x3b, 0x41, 0x48, 0x4e, 0x5b, 0x62, 0x8c, 0x8e, 0x90, 0x95, 0xa0,
      0xa9, 0xb1, 0xb4, 0xbd, 0xcf, 0xd2, 0xd7, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x01, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x19, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0xd9,
    ]),
  ];
  const srgb = Color(hex)
    .rgb()
    .array()
    .map((channel) => (channel / 255).toFixed(10))
    .join(' ');
  return fromByteArray(
    new Uint8Array([...code[0], ...stringToByteArray(srgb), ...code[1]]),
  );
}

const template: Template = {
  name: 'Terminal',
  render: async function* (colorSet) {
    const variants = colorSetToVariants(colorSet);
    for (const { title, colors, isDark } of variants) {
      yield {
        path: `${title.human}.terminal`,
        content: source`
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
