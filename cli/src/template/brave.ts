import type { Template } from './index.js';
import chromeTemplate from './chrome.js';

const template: Template = {
  ...chromeTemplate,
  name: 'Brave',
  renderInstructions: (...args) =>
    chromeTemplate
      .renderInstructions(...args)
      .replace(/chrome/g, 'brave')
      .replace(/Chrome/g, 'Brave'),
};

export default template;
