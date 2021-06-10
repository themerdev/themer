// Prior art: stayradiated/termcolors and chriskempson/base16-builder
const toData = (hex) => {
  const code = [
    Buffer.from(
      '62706c6973743030d40102030405061516582476657273696f6e58246f626a65637473' +
        '592461726368697665725424746f7012000186a0a307080f55246e756c6cd3090a0b' +
        '0c0d0e554e535247425c4e53436f6c6f7253706163655624636c6173734f1027',
      'hex'
    ),
    Buffer.from(
      '0010018002d2101112135a24636c6173736e616d655824636c6173736573574e53436f' +
        '6c6f72a21214584e534f626a6563745f100f4e534b657965644172636869766572d1' +
        '171854726f6f74800108111a232d32373b41484e5b628c8e9095a0a9b1b4bdcfd2d7' +
        '00000000000001010000000000000019000000000000000000000000000000d9',
      'hex'
    ),
  ];
  const srgb = [
    (parseInt(hex.slice(1, 3), 16) / 0xff).toFixed(10),
    (parseInt(hex.slice(3, 5), 16) / 0xff).toFixed(10),
    (parseInt(hex.slice(5, 7), 16) / 0xff).toFixed(10),
  ].join(' ');
  return Buffer.from(
    code[0].toString('binary') + srgb + code[1].toString('binary'),
    'binary'
  ).toString('base64');
};

const renderTheme = (
  theme,
  {
    shade0,
    shade1,
    shade2,
    shade3,
    shade4,
    shade5,
    shade6,
    shade7,
    accent0,
    accent1,
    accent2,
    accent3,
    accent4,
    accent5,
    accent6,
    accent7,
  }
) => `
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>name</key>
    <string>themer-terminal-${theme}</string>
    <key>type</key>
    <string>Window Settings</string>
    <key>BackgroundColor</key>
    <data>${toData(shade0)}</data>
    <key>TextColor</key>
    <data>${toData(shade6)}</data>
    <key>BoldTextColor</key>
    <data>${toData(shade7)}</data>
    <key>CursorColor</key>
    <data>${toData(accent6)}</data>
    <key>SelectionColor</key>
    <data>${toData(accent7)}</data>
    <key>ANSIBlackColor</key>
    <data>${toData(shade0)}</data>
    <key>ANSIRedColor</key>
    <data>${toData(accent0)}</data>
    <key>ANSIGreenColor</key>
    <data>${toData(accent3)}</data>
    <key>ANSIYellowColor</key>
    <data>${toData(accent2)}</data>
    <key>ANSIBlueColor</key>
    <data>${toData(accent5)}</data>
    <key>ANSIMagentaColor</key>
    <data>${toData(accent7)}</data>
    <key>ANSICyanColor</key>
    <data>${toData(accent4)}</data>
    <key>ANSIWhiteColor</key>
    <data>${toData(shade6)}</data>
    <key>ANSIBrightBlackColor</key>
    <data>${toData(shade1)}</data>
    <key>ANSIBrightRedColor</key>
    <data>${toData(accent1)}</data>
    <key>ANSIBrightGreenColor</key>
    <data>${toData(accent4)}</data>
    <key>ANSIBrightYellowColor</key>
    <data>${toData(accent2)}</data>
    <key>ANSIBrightBlueColor</key>
    <data>${toData(accent5)}</data>
    <key>ANSIBrightMagentaColor</key>
    <data>${toData(accent7)}</data>
    <key>ANSIBrightCyanColor</key>
    <data>${toData(accent4)}</data>
    <key>ANSIBrightWhiteColor</key>
    <data>${toData(shade7)}</data>
  </dict>
</plist>
`;

const render = (colors) =>
  Object.entries(colors).map(async ([theme, colors]) => {
    return {
      name: `themer-${theme}.terminal`,
      contents: Buffer.from(renderTheme(theme, colors), 'utf8'),
    };
  });

const renderInstructions = (paths) => `
1. Launch Terminal.app and open the preferences (\`cmd\`-\`,\`)
2. Click Profile > (...) icon > Import...
3. Choose the generated ${paths.length > 1 ? 'files' : 'file'} (${paths
  .map((p) => `\`${p}\``)
  .join(' / ')})
`;

module.exports = {
  render,
  renderInstructions,
};
