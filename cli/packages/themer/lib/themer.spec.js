const themer = require('./themer');

describe('themer core', () => {
  it('should produce a list of files from colors + templates', async () => {
    const outputs = await themer(
      {
        shade0: '#000000',
        shade1: '#FFFFFF',
        shade2: '#FFFFFF',
        shade3: '#FFFFFF',
        shade4: '#FFFFFF',
        shade5: '#FFFFFF',
        shade6: '#FFFFFF',
        shade7: '#FFFFFF',
        accent0: '#FF0000',
        accent1: '#FF0000',
        accent2: '#FF0000',
        accent3: '#FF0000',
        accent4: '#FF0000',
        accent5: '#FF0000',
        accent6: '#FF0000',
        accent7: '#FF0000',
      },
      [
        {
          name: 'test',
          render: () => [
            Promise.resolve({
              name: 'test.txt',
              contents: Buffer.from('test', 'utf8'),
            }),
          ],
          renderInstructions: () => 'test',
        },
      ],
      {},
    );
    expect(outputs.length).toBe(2);
  });
});
