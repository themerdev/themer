export const outputFileName = 'theme.txt';
export const outputFileContents = 'test';
export const render = () => [
  Promise.resolve(
    {
      name: outputFileName,
      contents: Buffer.from(outputFileContents, 'utf8'),
    }
  )
];
