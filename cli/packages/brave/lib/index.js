const {
  render,
  renderInstructions: renderChromeInstructions,
} = require('@themerdev/chrome');

const renderInstructions = (paths) =>
  renderChromeInstructions(paths)
    .replace(/chrome/g, 'brave')
    .replace(/Chrome/g, 'Brave');

module.exports = {
  render,
  renderInstructions,
};
