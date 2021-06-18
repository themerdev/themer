const path = require('path');

const outputFileDirectory = 'foo',
  outputFileName = 'theme.txt',
  outputFileContents = 'test',
  readmeInstructions = 'instructions';

module.exports = {
  outputFileDirectory,
  outputFileName,
  outputFileContents,
  readmeInstructions,
  render: () => [
    Promise.resolve({
      name: path.join(outputFileDirectory, outputFileName),
      contents: Buffer.from(outputFileContents, 'utf8'),
    }),
  ],
  renderInstructions: (paths) => [readmeInstructions, ...paths].join('\n'),
};
