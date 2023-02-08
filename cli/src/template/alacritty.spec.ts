import test from 'ava';
import themer from '../index.js';
import { toArray } from '../util.js';

test('alacritty', async (t) => {
  const files = await toArray(themer(['finger-paint'], ['alacritty']));
  t.is(files.length, 2, 'produces only one theme file');
  const theme = files.find(({ path }) =>
    path.endsWith('Themer Finger Paint.yml'),
  );
  t.regex(
    theme?.content.toString('utf8') || '',
    /themer-finger-paint-dark: &dark/,
    'contains valid reference to dark theme',
  );
  t.regex(
    theme?.content.toString('utf8') || '',
    /themer-finger-paint-light: &light/,
    'contains valid reference to light theme',
  );
});
