import plist from 'plist';
import type { Template } from './index.js';
import { colorSetToVariants } from '../color-set/index.js';
import { source } from 'common-tags';

const template: Template = {
  name: 'Sublime Text',
  render: async function* (colorSet) {
    const variants = colorSetToVariants(colorSet);
    for (const { title, colors } of variants) {
      yield {
        path: `${title.human}.tmTheme`,
        content: Buffer.from(
          plist.build({
            name: title.human,
            settings: [
              {
                settings: {
                  background: colors.shade0,
                  caret: colors.accent6,
                  foreground: colors.shade6,
                  invisibles: colors.shade1,
                  lineHighlight: colors.shade1,
                  selection: colors.shade2,
                  selectionBorder: colors.shade5,
                  findHighlight: colors.accent2,
                  findHighlightForeground: colors.shade0,
                  activeGuide: colors.accent1,
                  bracketsForeground: `${colors.shade6}7F`,
                  bracketsOptions: 'stippled_underline',
                  bracketsContentsForeground: `${colors.shade6}7F`,
                  tagsOptions: 'stippled_underline',
                },
              },
              {
                name: 'Comment',
                scope: 'comment',
                settings: {
                  foreground: colors.shade2,
                },
              },
              {
                name: 'Constant',
                scope: 'constant',
                settings: {
                  foreground: colors.accent7,
                },
              },
              {
                name: 'Entity',
                scope: 'entity',
                settings: {
                  foreground: colors.accent4,
                },
              },
              {
                name: 'Invalid',
                scope: 'invalid',
                settings: {
                  background: colors.accent0,
                  foreground: colors.shade1,
                },
              },
              {
                name: 'Keyword',
                scope: 'keyword',
                settings: {
                  foreground: colors.accent6,
                },
              },
              {
                name: 'Storage',
                scope: 'storage',
                settings: {
                  foreground: colors.accent7,
                },
              },
              {
                name: 'String',
                scope: 'string',
                settings: {
                  foreground: colors.accent3,
                },
              },
              {
                name: 'Support',
                scope: 'support',
                settings: {
                  foreground: colors.accent4,
                },
              },
              {
                name: 'Variable',
                scope: 'variable',
                settings: {
                  foreground: colors.shade7,
                },
              },
              {
                name: 'Markup Heading',
                scope: 'markup.heading',
                settings: {
                  foreground: colors.accent4,
                },
              },
              {
                name: 'Markup Deleted',
                scope: 'markup.deleted',
                settings: {
                  foreground: colors.accent0,
                },
              },
              {
                name: 'Markup Inserted',
                scope: 'markup.inserted',
                settings: {
                  foreground: colors.accent3,
                },
              },
              {
                name: 'Markup Changed',
                scope: 'markup.changed',
                settings: {
                  foreground: colors.accent2,
                },
              },
              {
                name: 'Markup Underline',
                scope: 'markup.underline',
                settings: {
                  fontStyle: 'underline',
                },
              },
              {
                name: 'Markup Underline Link',
                scope: 'markup.underline.link',
                settings: {
                  foreground: colors.accent5,
                },
              },
              {
                name: 'Markup List',
                scope: 'markup.list',
                settings: {
                  foreground: colors.shade7,
                },
              },
              {
                name: 'Markup Raw',
                scope: 'markup.raw',
                settings: {
                  foreground: colors.accent7,
                },
              },
            ],
          }),
          'utf8',
        ),
      };
    }
  },
  renderInstructions: (paths, colorSet) => source`
    1. Copy (or symlink) the generated theme files (${paths
      .map((p) => `\`${p}\``)
      .join(
        ' or ',
      )}) to the \`User/\` packages folder (you can see where this folder is located by choosing the "Preferences: Browse Packages..." menu option from the Command Palette).
    2. Open the Command Palette and choose "UI: Select Color Scheme"
    3. Choose the theme (${colorSetToVariants(colorSet)
      .map(({ title }) => title.human)
      .map((name) => `"${name}"`)
      .join(' or ')}) from the list of available color themes.
  `,
};

export default template;
