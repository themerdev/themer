import test from 'ava';
import themer from '../index.js';

test('slack', async (t) => {
  for await (const file of themer(['default'], ['warp'], {
    wallpaperSizes: [],
  })) {
    if (!file.path.includes('README.md')) {
      const content = file.content.toString('utf8');
      t.regex(content, /(?:darker|lighter)/, 'contains valid details value');
    }
  }
});
