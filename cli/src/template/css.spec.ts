import test from 'ava';
import themer from '../index.js';

test('css', async (t) => {
  const files = [];
  for await (const file of themer(['finger-paint'], ['css'], {
    wallpaperSizes: [],
  })) {
    files.push(file);
  }
  t.is(files.length, 4, 'generates one file per format');
  for (const file of files) {
    if (!file.path.includes('README.md')) {
      t.regex(file.content, /light-shade0/, 'contains light variant');
      t.regex(file.content, /dark-shade0/, 'contains dark variant');
    }
  }
});
