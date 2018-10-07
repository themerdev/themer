const path = require('path');

const outputFileDirectory = 'foo',
  outputFileName = 'theme.txt',
  outputFileContents = 'test';

module.exports = {
  outputFileDirectory,
  outputFileName,
  outputFileContents,
  render: () => [
    Promise.resolve(
      {
        name: path.join(outputFileDirectory, outputFileName),
        contents: Buffer.from(outputFileContents, 'utf8'),
      }
    )
  ],
};
