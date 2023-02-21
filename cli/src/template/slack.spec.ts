import test from 'ava';
import themer from '../index.js';

test('slack', async (t) => {
  for await (const file of themer(['default'], ['slack'], {
    wallpaperSizes: [],
  })) {
    if (!file.path.includes('README.md')) {
      const content = file.content.toString('utf8');
      t.notRegex(content, /\,\,/, 'contains no missing values');
      t.notRegex(content, /\s/, 'contains no whitespace');
    }
  }
});
