const convert = require('color-convert');

const render = (colors) => {
  const ansi256Colors = [];

  for (let color = 0; color < 255; ++color) {
    const hexVal = convert.ansi256.hex(color);
    ansi256Colors.push(hexVal);
  }

  ansi256Colors.closest = function (hexVal) {
    const [r, g, b] = convert.hex.rgb(hexVal);
    let minDistance = Infinity;
    let index; // NOTE equals ansi code
    for (let i = 0; i < this.length; ++i) {
      const [otherR, otherG, otherB] = convert.hex.rgb(this[i]);
      const distance =
        (r - otherR) ** 2 + (g - otherG) ** 2 + (b - otherB) ** 2;
      if (distance < minDistance) {
        minDistance = distance;
        index = i;
      }
    }
    return index;
  };

  const gtermToCterm = (hexVal) => ansi256Colors.closest(hexVal);

  const colorVars = (colorSet) => `
  let s:guishade0 = "${colorSet.shade0}"
  let s:guishade1 = "${colorSet.shade1}"
  let s:guishade2 = "${colorSet.shade2}"
  let s:guishade3 = "${colorSet.shade3}"
  let s:guishade4 = "${colorSet.shade4}"
  let s:guishade5 = "${colorSet.shade5}"
  let s:guishade6 = "${colorSet.shade6}"
  let s:guishade7 = "${colorSet.shade7}"
  let s:guiaccent0 = "${colorSet.accent0}"
  let s:guiaccent1 = "${colorSet.accent1}"
  let s:guiaccent2 = "${colorSet.accent2}"
  let s:guiaccent3 = "${colorSet.accent3}"
  let s:guiaccent4 = "${colorSet.accent4}"
  let s:guiaccent5 = "${colorSet.accent5}"
  let s:guiaccent6 = "${colorSet.accent6}"
  let s:guiaccent7 = "${colorSet.accent7}"
  let s:shade0 = ${gtermToCterm(colorSet.shade0)}
  let s:shade1 = ${gtermToCterm(colorSet.shade1)}
  let s:shade2 = ${gtermToCterm(colorSet.shade2)}
  let s:shade3 = ${gtermToCterm(colorSet.shade3)}
  let s:shade4 = ${gtermToCterm(colorSet.shade4)}
  let s:shade5 = ${gtermToCterm(colorSet.shade5)}
  let s:shade6 = ${gtermToCterm(colorSet.shade6)}
  let s:shade7 = ${gtermToCterm(colorSet.shade7)}
  let s:accent0 = ${gtermToCterm(colorSet.accent0)}
  let s:accent1 = ${gtermToCterm(colorSet.accent1)}
  let s:accent2 = ${gtermToCterm(colorSet.accent2)}
  let s:accent3 = ${gtermToCterm(colorSet.accent3)}
  let s:accent4 = ${gtermToCterm(colorSet.accent4)}
  let s:accent5 = ${gtermToCterm(colorSet.accent5)}
  let s:accent6 = ${gtermToCterm(colorSet.accent6)}
  let s:accent7 = ${gtermToCterm(colorSet.accent7)}
  `;

  const theme = `

  ${
    'dark' in colors
      ? `
  if &background == 'dark'
    ${colorVars(colors.dark)}
  endif
  `
      : ''
  }

  ${
    'light' in colors
      ? `
  if &background == 'light'
    ${colorVars(colors.light)}
  endif
  `
      : ''
  }

  let s:p = {'normal': {}, 'inactive': {}, 'insert': {}, 'replace': {}, 'visual': {}, 'tabline': {}}
  let s:p.normal.left = [ [ s:guishade1, s:guiaccent5, s:shade1, s:accent5 ], [ s:guishade7, s:guishade2, s:shade7, s:shade2 ] ]
  let s:p.normal.right = [ [ s:guishade1, s:guishade4, s:shade1, s:shade4 ], [ s:guishade5, s:guishade2, s:shade5, s:shade2 ] ]
  let s:p.inactive.right = [ [ s:guishade1, s:guishade3, s:shade1, s:shade3 ], [ s:guishade3, s:guishade1, s:shade3, s:shade1 ] ]
  let s:p.inactive.left =  [ [ s:guishade4, s:guishade1, s:shade4, s:shade1 ], [ s:guishade3, s:guishade0, s:shade3, s:shade0 ] ]
  let s:p.insert.left = [ [ s:guishade1, s:guiaccent3, s:shade1, s:accent3 ], [ s:guishade7, s:guishade2, s:shade7, s:shade2 ] ]
  let s:p.replace.left = [ [ s:guishade1, s:guiaccent1, s:shade1, s:accent1 ], [ s:guishade7, s:guishade2, s:shade7, s:shade2 ] ]
  let s:p.visual.left = [ [ s:guishade1, s:guiaccent6, s:shade1, s:accent6 ], [ s:guishade7, s:guishade2, s:shade7, s:shade2 ] ]
  let s:p.normal.middle = [ [ s:guishade5, s:guishade1, s:shade5, s:shade1 ] ]
  let s:p.inactive.middle = [ [ s:guishade4, s:guishade1, s:shade4, s:shade1 ] ]
  let s:p.tabline.left = [ [ s:guishade6, s:guishade2, s:shade6, s:shade2 ] ]
  let s:p.tabline.tabsel = [ [ s:guishade6, s:guishade0, s:shade6, s:shade0 ] ]
  let s:p.tabline.middle = [ [ s:guishade2, s:guishade4, s:shade2, s:shade4 ] ]
  let s:p.tabline.right = copy(s:p.normal.right)
  let s:p.normal.error = [ [ s:guiaccent0, s:guishade0, s:accent0, s:shade0 ] ]
  let s:p.normal.warning = [ [ s:guiaccent2, s:guishade1, s:accent2, s:shade1 ] ]

  let g:lightline#colorscheme#ThemerVimLightline#palette = lightline#colorscheme#fill(s:p)

  `;

  return [
    Promise.resolve({
      name: 'ThemerVimLightline.vim',
      contents: Buffer.from(theme, 'utf8'),
    }),
  ];
};

const renderInstructions = (paths) => `
Make sure that the \`background\` option is set in \`.vimrc\`.

Copy or symlink \`${paths[0]}\` to \`~/.vim/autoload/lightline/colorscheme/\`.

Then set the colorscheme in \`.vimrc\`:

    let g:lightline = { 'colorscheme': 'ThemerVimLightline' }
`;

module.exports = {
  render,
  renderInstructions,
};
