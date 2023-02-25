import type { Template } from './index.js';
import { colorSetToVariants } from '../color-set/index.js';

const template: Template = {
  name: 'Slack sidebar',
  render: async function* (colorSet) {
    yield* colorSetToVariants(colorSet).map(({ title, colors }) => ({
      path: `${title.kebab}.txt`,
      content: Buffer.from(
        [
          colors.shade0, // Column BG
          colors.shade1, // Menu BG Hover
          colors.shade3, // Active Item
          colors.shade7, // Active Item Text
          colors.shade2, // Hover Item
          colors.shade7, // Text Color
          colors.accent2, // Active Presence
          colors.accent6, // Mention Badge
        ].join(','),
        'utf8',
      ),
    }));
  },
  renderInstructions: (paths) => {
    const formattedPaths = paths.map((p) => `\`${p}\``).join(' or ');
    return `Copy the contents of ${formattedPaths} and paste into the custom theme input in Slack's preferences.`;
  },
};

export default template;
