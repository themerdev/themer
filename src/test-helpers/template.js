import path from 'path';

export const outputFileDirectory = 'foo';
export const outputFileName = 'theme.txt';
export const outputFileContents = 'test';
export const render = () => [
  Promise.resolve(
    {
      name: path.join(outputFileDirectory, outputFileName),
      contents: Buffer.from(outputFileContents, 'utf8'),
    }
  )
];
