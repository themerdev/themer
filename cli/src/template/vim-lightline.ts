import convert from 'color-convert';
import type { Template } from './index.js';
import { colorSetToVariants } from '../color-set/index.js';
import { source } from 'common-tags';

function gtermToCterm(hex: string): number {
  return convert.hex.ansi256(hex);
}

const template: Template = {
  name: 'Vim lightline',
  render: async function* (colorSet) {
    const variants = colorSetToVariants(colorSet);
    const colorVars = variants
      .map(
        ({ colors, name }) => source`
          if &background == '${name}'
            let s:guishade0 = "${colors.shade0}"
            let s:guishade1 = "${colors.shade1}"
            let s:guishade2 = "${colors.shade2}"
            let s:guishade3 = "${colors.shade3}"
            let s:guishade4 = "${colors.shade4}"
            let s:guishade5 = "${colors.shade5}"
            let s:guishade6 = "${colors.shade6}"
            let s:guishade7 = "${colors.shade7}"
            let s:guiaccent0 = "${colors.accent0}"
            let s:guiaccent1 = "${colors.accent1}"
            let s:guiaccent2 = "${colors.accent2}"
            let s:guiaccent3 = "${colors.accent3}"
            let s:guiaccent4 = "${colors.accent4}"
            let s:guiaccent5 = "${colors.accent5}"
            let s:guiaccent6 = "${colors.accent6}"
            let s:guiaccent7 = "${colors.accent7}"
            let s:shade0 = ${gtermToCterm(colors.shade0)}
            let s:shade1 = ${gtermToCterm(colors.shade1)}
            let s:shade2 = ${gtermToCterm(colors.shade2)}
            let s:shade3 = ${gtermToCterm(colors.shade3)}
            let s:shade4 = ${gtermToCterm(colors.shade4)}
            let s:shade5 = ${gtermToCterm(colors.shade5)}
            let s:shade6 = ${gtermToCterm(colors.shade6)}
            let s:shade7 = ${gtermToCterm(colors.shade7)}
            let s:accent0 = ${gtermToCterm(colors.accent0)}
            let s:accent1 = ${gtermToCterm(colors.accent1)}
            let s:accent2 = ${gtermToCterm(colors.accent2)}
            let s:accent3 = ${gtermToCterm(colors.accent3)}
            let s:accent4 = ${gtermToCterm(colors.accent4)}
            let s:accent5 = ${gtermToCterm(colors.accent5)}
            let s:accent6 = ${gtermToCterm(colors.accent6)}
            let s:accent7 = ${gtermToCterm(colors.accent7)}
          endif
        `,
      )
      .join('\n');
    yield {
      path: `${colorSet.title.upperCamel}Lightline.vim`,
      content: source`
        ${colorVars}

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

        let g:lightline#colorscheme#${colorSet.title.upperCamel}#palette = s:p
      `,
    };
  },
  renderInstructions: ([path], colorSet) => source`
    1. Make sure that the \`background\` option is set in \`.vimrc\`.
    2. Copy or symlink \`${path}\` to \`~/.vim/autoload/lightline/colorscheme/\`.
    3. Set the colorscheme in \`.vimrc\`: \`let g:lightline = { 'colorscheme': '${colorSet.title.upperCamel}' }\`
    4. Restart Vim.
  `,
};

export default template;
