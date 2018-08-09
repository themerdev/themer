const { mapValues } = require('lodash');

const formatColors = colors =>
  mapValues(colors, hex => {
    const elements = hex.replace('#', '').match(/.{2}/g);
    elements.push('00');
    elements.reverse();
    return elements.join('');
  });

const renderTheme = colorSet => Promise.resolve({
  name: `themer-${colorSet.name}.xml`,
  contents: Buffer.from(
    `
      <value name="ColorTable00" type="dword" data="${colorSet.colors.shade0}" />
      <value name="ColorTable01" type="dword" data="${colorSet.colors.accent5}" />
      <value name="ColorTable02" type="dword" data="${colorSet.colors.accent3}" />
      <value name="ColorTable03" type="dword" data="${colorSet.colors.accent4}" />
      <value name="ColorTable04" type="dword" data="${colorSet.colors.accent0}" />
      <value name="ColorTable05" type="dword" data="${colorSet.colors.accent6}" />
      <value name="ColorTable06" type="dword" data="${colorSet.colors.accent1}" />
      <value name="ColorTable07" type="dword" data="${colorSet.colors.shade6}" />
      <value name="ColorTable08" type="dword" data="${colorSet.colors.shade1}" />
      <value name="ColorTable09" type="dword" data="${colorSet.colors.accent5}" />
      <value name="ColorTable10" type="dword" data="${colorSet.colors.accent3}" />
      <value name="ColorTable11" type="dword" data="${colorSet.colors.accent4}" />
      <value name="ColorTable12" type="dword" data="${colorSet.colors.accent0}" />
      <value name="ColorTable13" type="dword" data="${colorSet.colors.accent7}" />
      <value name="ColorTable14" type="dword" data="${colorSet.colors.accent2}" />
      <value name="ColorTable15" type="dword" data="${colorSet.colors.shade7}" />
      <value name="ColorTable16" type="dword" data="${colorSet.colors.shade0}" />
      <value name="ColorTable17" type="dword" data="${colorSet.colors.accent0}" />
      <value name="ColorTable18" type="dword" data="${colorSet.colors.accent3}" />
      <value name="ColorTable19" type="dword" data="${colorSet.colors.accent1}" />
      <value name="ColorTable20" type="dword" data="${colorSet.colors.accent5}" />
      <value name="ColorTable21" type="dword" data="${colorSet.colors.accent6}" />
      <value name="ColorTable22" type="dword" data="${colorSet.colors.accent4}" />
      <value name="ColorTable23" type="dword" data="${colorSet.colors.shade6}" />
      <value name="ColorTable24" type="dword" data="${colorSet.colors.shade1}" />
      <value name="ColorTable25" type="dword" data="${colorSet.colors.accent0}" />
      <value name="ColorTable26" type="dword" data="${colorSet.colors.accent3}" />
      <value name="ColorTable27" type="dword" data="${colorSet.colors.accent2}" />
      <value name="ColorTable28" type="dword" data="${colorSet.colors.accent5}" />
      <value name="ColorTable29" type="dword" data="${colorSet.colors.accent7}" />
      <value name="ColorTable30" type="dword" data="${colorSet.colors.accent4}" />
      <value name="ColorTable31" type="dword" data="${colorSet.colors.shade7}" />
    `,
    'utf8'
  ),
});

const render = colors => Object.keys(colors)
  .map(name => ({
    name,
    colors: formatColors(colors[name]),
  }))
  .map(colorSet => renderTheme(colorSet));

module.exports = { render };
