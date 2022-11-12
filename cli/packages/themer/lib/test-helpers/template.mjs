import { join } from 'node:path';

export const outputFileDirectory = 'foo',
  outputFileName = 'theme.txt',
  outputFileContents = 'test',
  readmeInstructions = 'instructions';

export const render = () => [
  Promise.resolve({
    name: join(outputFileDirectory, outputFileName),
    contents: Buffer.from(outputFileContents, 'utf8'),
  }),
];

export const renderInstructions = (paths) =>
  [readmeInstructions, ...paths].join('\n');
