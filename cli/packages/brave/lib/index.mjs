import {
  render,
  renderInstructions as renderChromeInstructions,
} from '@themerdev/chrome';

export const renderInstructions = (paths) =>
  renderChromeInstructions(paths)
    .replace(/chrome/g, 'brave')
    .replace(/Chrome/g, 'Brave');

export { render };
