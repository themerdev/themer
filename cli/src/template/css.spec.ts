import test from 'ava';
import themer from '../index.js';
import { toArray } from '../util.js';

test('css', async (t) => {
  const files = await toArray(
    themer(['finger-paint'], ['css'], { wallpaperSizes: [] }),
  );
  t.is(files.length, 4, 'generates one file per format');
  for (const file of files) {
    if (!file.path.includes('README.md')) {
      const content = file.content.toString('utf8');
      t.regex(content, /light-shade0/, 'contains light variant');
      t.regex(content, /dark-shade0/, 'contains dark variant');
    }
  }
});
