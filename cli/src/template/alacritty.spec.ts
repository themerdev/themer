import test from 'ava';
import themer from '../index.js';

test('alacritty', async (t) => {
  const files = [];
  for await (const file of themer(['finger-paint'], ['alacritty'], {
    wallpaperSizes: [],
  })) {
    files.push(file);
  }
  t.is(files.length, 2, 'produces only one theme file');
  const theme = files.find(({ path }) =>
    path.endsWith('Themer Finger Paint.yml'),
  );
  t.regex(
    theme?.content || '',
    /themer-finger-paint-dark: &dark/,
    'contains valid reference to dark theme',
  );
  t.regex(
    theme?.content || '',
    /themer-finger-paint-light: &light/,
    'contains valid reference to light theme',
  );
});
