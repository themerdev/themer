const {mapValues} = require('lodash');

const formatColors = colors =>
  mapValues(colors, hex => {
    const elements = hex.replace('#', '').match(/.{2}/g);
    elements.push('00');
    elements.reverse();
    return elements.join('');
  });

const renderTheme = colorSet =>
  Promise.resolve({
    name: `themer-${colorSet.name}.reg`,
    contents: Buffer.from(
      `Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\\Console]
"ColorTable00"=dword:${colorSet.colors.shade0}
"ColorTable01"=dword:${colorSet.colors.accent5}
"ColorTable02"=dword:${colorSet.colors.accent3}
"ColorTable03"=dword:${colorSet.colors.accent4}
"ColorTable04"=dword:${colorSet.colors.accent1}
"ColorTable05"=dword:${colorSet.colors.accent6}
"ColorTable06"=dword:${colorSet.colors.accent2}
"ColorTable07"=dword:${colorSet.colors.shade6}
"ColorTable08"=dword:${colorSet.colors.shade1}
"ColorTable09"=dword:${colorSet.colors.accent5}
"ColorTable10"=dword:${colorSet.colors.accent3}
"ColorTable11"=dword:${colorSet.colors.accent4}
"ColorTable12"=dword:${colorSet.colors.accent0}
"ColorTable13"=dword:${colorSet.colors.accent7}
"ColorTable14"=dword:${colorSet.colors.accent2}
"ColorTable15"=dword:${colorSet.colors.shade7}
"ScreenColors"=dword:${colorSet.colors.accent0}
"PopupColors"=dword:${colorSet.colors.shade0}
    `,
      'utf8'
    ),
  });

const render = colors =>
  Object.keys(colors)
    .map(name => ({
      name,
      colors: formatColors(colors[name]),
    }))
    .map(colorSet => renderTheme(colorSet));

module.exports = {render};
