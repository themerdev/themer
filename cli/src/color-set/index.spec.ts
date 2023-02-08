import test from 'ava';
import { colorSetToVariants, prepareColorSet } from './index.js';

const testColorSet = {
  name: 'Test',
  variants: {
    dark: {
      shade0: '#000000',
      shade7: '#ffffff',
      accent0: '#ffffff',
      accent1: '#ffffff',
      accent2: '#ffffff',
      accent3: '#ffffff',
      accent4: '#ffffff',
      accent5: '#ffffff',
      accent6: '#ffffff',
      accent7: '#ffffff',
    },
  },
};

const testColorSetPrepared = {
  name: 'Test',
  title: {
    human: 'Themer Test',
    kebab: 'themer-test',
    snake: 'themer_test',
    upperCamel: 'ThemerTest',
  },
  variants: {
    dark: {
      shade0: '#000000',
      shade1: '#242424',
      shade2: '#494949',
      shade3: '#6D6D6D',
      shade4: '#929292',
      shade5: '#B6B6B6',
      shade6: '#DBDBDB',
      shade7: '#ffffff',
      accent0: '#ffffff',
      accent1: '#ffffff',
      accent2: '#ffffff',
      accent3: '#ffffff',
      accent4: '#ffffff',
      accent5: '#ffffff',
      accent6: '#ffffff',
      accent7: '#ffffff',
    },
  },
};

const testColorSet2 = {
  name: 'Test of Words',
  variants: {
    dark: {
      shade0: '#000000',
      shade7: '#ffffff',
      accent0: '#ffffff',
      accent1: '#ffffff',
      accent2: '#ffffff',
      accent3: '#ffffff',
      accent4: '#ffffff',
      accent5: '#ffffff',
      accent6: '#ffffff',
      accent7: '#ffffff',
    },
  },
};

const testColorSetPrepared2 = {
  name: 'Test of Words',
  title: {
    human: 'Themer Test of Words',
    kebab: 'themer-test-of-words',
    snake: 'themer_test_of_words',
    upperCamel: 'ThemerTestOfWords',
  },
  variants: {
    dark: {
      shade0: '#000000',
      shade1: '#242424',
      shade2: '#494949',
      shade3: '#6D6D6D',
      shade4: '#929292',
      shade5: '#B6B6B6',
      shade6: '#DBDBDB',
      shade7: '#ffffff',
      accent0: '#ffffff',
      accent1: '#ffffff',
      accent2: '#ffffff',
      accent3: '#ffffff',
      accent4: '#ffffff',
      accent5: '#ffffff',
      accent6: '#ffffff',
      accent7: '#ffffff',
    },
  },
};

test('prepareColorSet', (t) => {
  t.deepEqual(prepareColorSet(testColorSet), testColorSetPrepared);
  t.deepEqual(prepareColorSet(testColorSet2), testColorSetPrepared2);
});

test('colorSetToVariants', (t) => {
  t.deepEqual(colorSetToVariants(testColorSetPrepared), [
    {
      name: 'dark',
      colors: testColorSetPrepared.variants.dark,
      isDark: true,
      title: {
        human: 'Themer Test Dark',
        kebab: 'themer-test-dark',
        snake: 'themer_test_dark',
        upperCamel: 'ThemerTestDark',
      },
    },
  ]);
  t.deepEqual(colorSetToVariants(testColorSetPrepared2), [
    {
      name: 'dark',
      colors: testColorSetPrepared2.variants.dark,
      isDark: true,
      title: {
        human: 'Themer Test of Words Dark',
        kebab: 'themer-test-of-words-dark',
        snake: 'themer_test_of_words_dark',
        upperCamel: 'ThemerTestOfWordsDark',
      },
    },
  ]);
});
