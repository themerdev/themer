import { source } from 'common-tags';
import { colorSetToVariants } from '../color-set/index.js';
import type { Template } from './index.js';

const template: Template = {
  name: 'Alfred',
  render: async function* (colorSet) {
    const variants = colorSetToVariants(colorSet);
    for (const variant of variants) {
      const {
        shade0,
        shade1,
        shade2,
        shade4,
        shade6,
        shade7,
        accent2,
        accent4,
        accent5,
        accent7,
      } = variant.colors;
      yield {
        path: `${variant.title.kebab}.alfredappearance`,
        content: Buffer.from(
          JSON.stringify(
            {
              alfredtheme: {
                result: {
                  textSpacing: 6,
                  subtext: {
                    size: 12,
                    colorSelected: `${shade1}FF`,
                    font: 'System Light',
                    color: `${shade4}FF`,
                  },
                  shortcut: {
                    size: 16,
                    colorSelected: `${shade1}FF`,
                    font: 'System',
                    color: `${shade6}FF`,
                  },
                  backgroundSelected: `${accent4}FF`,
                  text: {
                    size: 18,
                    colorSelected: `${shade0}FF`,
                    font: 'System Light',
                    color: `${shade7}FF`,
                  },
                  iconPaddingHorizontal: 6,
                  paddingVertical: 6,
                  iconSize: 36,
                },
                search: {
                  paddingVertical: 8,
                  background: `${shade2}7F`,
                  spacing: 10,
                  text: {
                    size: 22,
                    colorSelected: `${accent5}FF`,
                    font: 'System',
                    color: `${shade7}FF`,
                  },
                  backgroundSelected: `${accent7}FF`,
                },
                window: {
                  color: `${shade0}CC`,
                  paddingHorizontal: 10,
                  width: 560,
                  borderPadding: 0,
                  borderColor: `${shade0}00`,
                  blur: 15,
                  roundness: 2,
                  paddingVertical: 10,
                },
                credit: 'Themer',
                separator: {
                  color: `${shade0}00`,
                  thickness: 0,
                },
                scrollbar: {
                  color: `${accent2}FF`,
                  thickness: 2,
                },
                name: variant.title.human,
              },
            },
            null,
            2,
          ),
          'utf8',
        ),
      };
    }
  },
  renderInstructions: (paths) => source`
    Simply open the files to import them into Alfred. Either double-click them in Finder or use the terminal:
    
    \`\`\`
    ${paths.map((path) => `open '${path}'`)}
    \`\`\`
  `,
};

export default template;
