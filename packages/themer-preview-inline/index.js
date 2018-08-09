const getName = options =>
  options['themer-preview-inline-name'] || options.colors;

const renderPreview = colorSet =>
  Promise.resolve({
    name: `${colorSet.name}-inline.svg`,
    contents: Buffer.from(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 24">

        <rect fill="${colorSet.colors.shade0}" x="0" y="0" width="160" height="24"></rect>

        <rect fill="${colorSet.colors.shade1}" x="8" y="13" width="18" height="3" rx="1" ry="1"></rect>
        <rect fill="${colorSet.colors.shade2}" x="29" y="13" width="18" height="3" rx="1" ry="1"></rect>
        <rect fill="${colorSet.colors.shade3}" x="50" y="13" width="18" height="3" rx="1" ry="1"></rect>
        <rect fill="${colorSet.colors.shade4}" x="71" y="13" width="18" height="3" rx="1" ry="1"></rect>
        <rect fill="${colorSet.colors.shade5}" x="92" y="13" width="18" height="3" rx="1" ry="1"></rect>
        <rect fill="${colorSet.colors.shade6}" x="113" y="13" width="18" height="3" rx="1" ry="1"></rect>
        <rect fill="${colorSet.colors.shade7}" x="134" y="13" width="18" height="3" rx="1" ry="1"></rect>

        <rect fill="${colorSet.colors.accent0}" x="8" y="8" width="11" height="3" rx="1" ry="1"></rect>
        <rect fill="${colorSet.colors.accent1}" x="27" y="8" width="11" height="3" rx="1" ry="1"></rect>
        <rect fill="${colorSet.colors.accent2}" x="46" y="8" width="11" height="3" rx="1" ry="1"></rect>
        <rect fill="${colorSet.colors.accent3}" x="65" y="8" width="11" height="3" rx="1" ry="1"></rect>
        <rect fill="${colorSet.colors.accent4}" x="84" y="8" width="11" height="3" rx="1" ry="1"></rect>
        <rect fill="${colorSet.colors.accent5}" x="103" y="8" width="11" height="3" rx="1" ry="1"></rect>
        <rect fill="${colorSet.colors.accent6}" x="122" y="8" width="11" height="3" rx="1" ry="1"></rect>
        <rect fill="${colorSet.colors.accent7}" x="141" y="8" width="11" height="3" rx="1" ry="1"></rect>

      </svg>
    `, 'utf8'),
  });

exports.render = (colors, options) => {
  return Object.keys(colors)
    .map(name => ({
      name: `${getName(options)}-${name}`,
      colors: colors[name],
    }))
    .map(colorSet => renderPreview(colorSet));
};
