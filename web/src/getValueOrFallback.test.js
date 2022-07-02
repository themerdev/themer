import getValueOrFallback from './getValueOrFallback';

const state = {
  foo: 1,
  bar: 2,
  baz: 3,
};

const calculatedState = Object.entries(state).reduce(
  (calc, [key, value]) => ({
    ...calc,
    [`${key}2`]: value * 2,
  }),
  {},
);

const fallbackState = {
  foo: 'one',
  bar: 'two',
  baz: 'three',
  qux: 'four',
};

describe('getValueOrFallback', () => {
  test('get existing value', () => {
    expect(
      getValueOrFallback(state, calculatedState, fallbackState, [['foo']]),
    ).toBe(1);
  });
  test('get calculated value', () => {
    expect(
      getValueOrFallback(state, calculatedState, fallbackState, [['foo2']]),
    ).toBe(2);
  });
  test('get fallback value', () => {
    expect(
      getValueOrFallback(state, calculatedState, fallbackState, [['qux']]),
    ).toBe('four');
  });
  test('get existing secondary value', () => {
    expect(
      getValueOrFallback(state, calculatedState, fallbackState, [
        ['xxx'],
        ['bar'],
      ]),
    ).toBe(2);
  });
  test('get existing calculated value', () => {
    expect(
      getValueOrFallback(state, calculatedState, fallbackState, [
        ['xxx'],
        ['bar2'],
      ]),
    ).toBe(4);
  });
  test('get fallback secondary value', () => {
    expect(
      getValueOrFallback(state, calculatedState, fallbackState, [
        ['xxx'],
        ['qux'],
      ]),
    ).toBe('four');
  });
  test('get existing value with parser', () => {
    expect(
      getValueOrFallback(
        state,
        calculatedState,
        fallbackState,
        [['foo']],
        (v) => v.toString(),
      ),
    ).toBe('1');
  });
  test('get secondary value with parser', () => {
    expect(
      getValueOrFallback(
        state,
        calculatedState,
        fallbackState,
        [['xxx'], ['baz']],
        (v) => v.toString(),
      ),
    ).toBe('3');
  });
  test('get valid value with parser', () => {
    expect(
      getValueOrFallback(
        state,
        calculatedState,
        fallbackState,
        [['foo'], ['bar']],
        (v) => {
          if (v % 2 === 0) {
            return v;
          } else {
            throw new Error();
          }
        },
      ),
    ).toBe(2);
  });
});
