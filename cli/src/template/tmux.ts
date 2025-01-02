import type { Template } from './index.js';
import { colorSetToVariants, FullVariant } from '../color-set/index.js';
import { source } from 'common-tags';

type Layout = 'block' | 'default' | 'double';

const renderLayout = (
  layoutName: Layout,
  colorSet: FullVariant,
  index: number,
) => {
  const layouts = {
    block: (colors: FullVariant, i: number) => source`
      # Powerline Themer Block - Tmux Theme
      set -g status-interval 1
      set -g status-fg "${colors.shade3}"
      set -g status-bg "${colors.shade1}"
      set -g status-left "#[fg=${colors.shade0},bg=${
      colors[`accent${i * 2}` as keyof FullVariant]
    },bold] #S #[fg=${colors[`accent${i * 2}` as keyof FullVariant]},bg=${
      colors.shade4
    },nobold]"
      set -g status-right "#[fg=${colors.shade2},bg=${colors.shade1}]#[fg=${
      colors.shade4
    },bg=${colors.shade2}] %H:%M:%S"
    `,
    default: (colors: FullVariant, i: number) => source`
      # Powerline Default - Tmux Theme
      set -g status-interval 1
      set -g status-fg "${colors.shade3}"
      set -g status-bg "${colors.shade1}"
      set -g status-left "#[fg=${colors.shade0},bg=${
      colors[`accent${i * 2}` as keyof FullVariant]
    },bold] #S #[fg=${colors[`accent${i * 2}` as keyof FullVariant]},bg=${
      colors.shade4
    },nobold]"
      set -g status-right "#[fg=${colors.shade2},bg=${colors.shade1}]#[fg=${
      colors.shade4
    },bg=${colors.shade2}] %H:%M:%S"
    `,
    double: (colors: FullVariant, i: number) => source`
      # Powerline Double - Tmux Theme
      set -g status-interval 1
      set -g status-fg "${colors.shade3}"
      set -g status-bg "${colors.shade1}"
      set -g status-left "#[fg=${colors.shade0},bg=${
      colors[`accent${i * 2}` as keyof FullVariant]
    },bold] #S #[fg=${colors[`accent${i * 2}` as keyof FullVariant]},bg=${
      colors.shade4
    },nobold]"
      set -g status-right "#[fg=${colors.shade2},bg=${colors.shade1}]#[fg=${
      colors.shade4
    },bg=${colors.shade2}] %H:%M:%S"
    `,
  };

  return layouts[layoutName](colorSet, index);
};

const template: Template = {
  name: 'tmux',
  render: async function* (colorSet) {
    const variants = colorSetToVariants(colorSet);
    for (const variant of variants) {
      const { colors, name } = variant;
      for (const layoutName of ['block', 'default', 'double'] as Layout[]) {
        for (let i = 0; i < Math.floor(Object.keys(colors).length / 4); i++) {
          yield {
            path: `themer-tmux.${name}.${layoutName}.v${i}.tmuxtheme`,
            content: renderLayout(layoutName, colors, i),
          };
        }
      }
    }
  },
  renderInstructions: (paths) => source`
    Generated tmux themes:

    ${paths.map((path) => `  - ${path}`).join('\n')}

    Copy or symlink these files to your tmux configuration directory, and include them in your \`.tmux.conf\` like so:

    \`\`\`
    source-file path/to/theme-file
    \`\`\`
  `,
};

export default template;
