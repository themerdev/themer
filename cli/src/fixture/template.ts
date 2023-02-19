import type { Template } from '../index.js';
import { colorSetToVariants } from '../color-set/index.js';

const template: Template = {
  name: 'Test',
  render: async function* (colorSet) {
    yield* colorSetToVariants(colorSet).map(({ title }) => ({
      path: `${title.kebab}.txt`,
      content: Buffer.from(title.human, 'utf8'),
    }));
  },
  renderInstructions: (paths) => paths.join('\n'),
};

export default template;
