const render = (colors) => {

  const colorVars = colorSet => `
  let s:shade0 = "${colorSet.shade0}"
  let s:shade1 = "${colorSet.shade1}"
  let s:shade2 = "${colorSet.shade2}"
  let s:shade3 = "${colorSet.shade3}"
  let s:shade4 = "${colorSet.shade4}"
  let s:shade5 = "${colorSet.shade5}"
  let s:shade6 = "${colorSet.shade6}"
  let s:shade7 = "${colorSet.shade7}"
  let s:accent0 = "${colorSet.accent0}"
  let s:accent1 = "${colorSet.accent1}"
  let s:accent2 = "${colorSet.accent2}"
  let s:accent3 = "${colorSet.accent3}"
  let s:accent4 = "${colorSet.accent4}"
  let s:accent5 = "${colorSet.accent5}"
  let s:accent6 = "${colorSet.accent6}"
  let s:accent7 = "${colorSet.accent7}"
  `;

  const theme = `

  ${'dark' in colors ? `
  if &background == 'dark'
    ${colorVars(colors.dark)}
  endif
  ` : ''}

  ${'light' in colors ? `
  if &background == 'light'
    ${colorVars(colors.light)}
  endif
  ` : ''}

  let s:p = {'normal': {}, 'inactive': {}, 'insert': {}, 'replace': {}, 'visual': {}, 'tabline': {}}
  let s:p.normal.left = [ [ s:shade1, s:accent5 ], [ s:shade7, s:shade2 ] ]
  let s:p.normal.right = [ [ s:shade1, s:shade4 ], [ s:shade5, s:shade2 ] ]
  let s:p.inactive.right = [ [ s:shade1, s:shade3 ], [ s:shade3, s:shade1 ] ]
  let s:p.inactive.left =  [ [ s:shade4, s:shade1 ], [ s:shade3, s:shade0 ] ]
  let s:p.insert.left = [ [ s:shade1, s:accent3 ], [ s:shade7, s:shade2 ] ]
  let s:p.replace.left = [ [ s:shade1, s:accent1 ], [ s:shade7, s:shade2 ] ]
  let s:p.visual.left = [ [ s:shade1, s:accent6 ], [ s:shade7, s:shade2 ] ]
  let s:p.normal.middle = [ [ s:shade5, s:shade1 ] ]
  let s:p.inactive.middle = [ [ s:shade4, s:shade1 ] ]
  let s:p.tabline.left = [ [ s:shade6, s:shade2 ] ]
  let s:p.tabline.tabsel = [ [ s:shade6, s:shade0 ] ]
  let s:p.tabline.middle = [ [ s:shade2, s:shade4 ] ]
  let s:p.tabline.right = copy(s:p.normal.right)
  let s:p.normal.error = [ [ s:accent0, s:shade0 ] ]
  let s:p.normal.warning = [ [ s:accent2, s:shade1 ] ]

  let g:lightline#colorscheme#ThemerVimLightline#palette = lightline#colorscheme#fill(s:p)

  `;

  return [Promise.resolve({ name: 'ThemerVimLightline.vim', contents: Buffer.from(theme, 'utf8') })];

};

const renderInstructions = paths => `
Copy or symlink \`${paths[0]}\` to \`~/.vim/autoload/lightline/colorscheme/\`.

Then set the colorscheme in \`.vimrc\`:

    let g:lightline = { 'colorscheme': 'ThemerVimLightline' }
`;

module.exports = {
  render,
  renderInstructions,
};
