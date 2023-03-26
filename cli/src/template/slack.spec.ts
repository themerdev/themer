import test from 'ava';
import themer from '../index.js';

test('slack', async (t) => {
  for await (const file of themer(['default'], ['slack'], {
    wallpaperSizes: [],
  })) {
    if (!file.path.includes('README.md')) {
      t.notRegex(file.content, /\,\,/, 'contains no missing values');
      t.notRegex(file.content, /\s/, 'contains no whitespace');
    }
  }
});
