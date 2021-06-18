const Color = require('color');

const schemeName = (key) => `themer-${key}`;

const MIX = 0.2;

const brightMix = (name, colors, key) =>
  Color(colors[key])
    .mix(name === 'dark' ? Color(colors.shade7) : Color(colors.shade0), MIX)
    .hex();

const dimMix = (name, colors, key) =>
  Color(colors[key])
    .mix(name === 'dark' ? Color(colors.shade0) : Color(colors.shade7), MIX)
    .hex();

const render = (colors) => {
  const document = `
# Themer Alacritty

schemes:
  ${Object.entries(colors).map(
    ([name, colors]) => `${schemeName(name)}: &${name}
    primary:
      background: '${colors.shade0}'
      foreground: '${colors.shade6}'

    cursor:
      text: '${colors.shade0}'
      cursor: '${colors.accent6}'

    selection:
      text: '${colors.shade0}'
      background: '${colors.accent5}'

    normal:
      black: '${name === 'dark' ? colors.shade2 : colors.shade6}'
      red: '${colors.accent0}'
      green: '${colors.accent3}'
      yellow: '${colors.accent2}'
      blue: '${colors.accent5}'
      magenta: '${colors.accent7}'
      cyan: '${colors.accent4}'
      white: '${name === 'dark' ? colors.shade6 : colors.shade2}'

    bright:
      black: '${name === 'dark' ? colors.shade3 : colors.shade5}'
      red: '${brightMix(name, colors, 'accent0')}'
      green: '${brightMix(name, colors, 'accent3')}'
      yellow: '${brightMix(name, colors, 'accent2')}'
      blue: '${brightMix(name, colors, 'accent5')}'
      magenta: '${brightMix(name, colors, 'accent7')}'
      cyan: '${brightMix(name, colors, 'accent4')}'
      white: '${name === 'dark' ? colors.shade7 : colors.shade1}'

    dim:
      black: '${name === 'dark' ? colors.shade1 : colors.shade7}'
      red: '${dimMix(name, colors, 'accent0')}'
      green: '${dimMix(name, colors, 'accent3')}'
      yellow: '${dimMix(name, colors, 'accent2')}'
      blue: '${dimMix(name, colors, 'accent5')}'
      magenta: '${dimMix(name, colors, 'accent7')}'
      cyan: '${dimMix(name, colors, 'accent4')}'
      white: '${name === 'dark' ? colors.shade5 : colors.shade3}'
  `,
  ).join(`

  `)}
`;
  return [
    Promise.resolve({
      name: 'Themer.yml',
      contents: Buffer.from(document, 'utf8'),
    }),
  ];
};

const renderInstructions = (paths) => `
1. Paste the contents of \`${paths[0]}\` into your Alacritty config file.
2. Select the desired theme by setting the \`colors\` config key to reference the scheme's anchor (i.e., \`colors: *light\` or \`colors: *dark\`).
`;

module.exports = {
  render,
  renderInstructions,
};
