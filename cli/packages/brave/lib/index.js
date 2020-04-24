const { render, renderInstructions: renderChromeInstructions } = require('@themer/chrome');

const renderInstructions = paths =>
  renderChromeInstructions(paths)
    .replace(/chrome/g, 'brave')
    .replace(/Chrome/g, 'Brave');

module.exports = {
  render,
  renderInstructions
};
