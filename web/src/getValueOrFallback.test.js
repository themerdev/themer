import getValueOrFallback from './getValueOrFallback';

const state = {
  foo: 1,
  bar: 2,
  baz: 3,
};

const fallbackState = {
  foo: 'one',
  bar: 'two',
  baz: 'three',
  qux: 'four',
};

describe('getValueOrFallback', () => {
  test('get existing value', () => {
    expect(getValueOrFallback(state, fallbackState, [['foo']])).toBe(1);
  });
  test('get fallback value', () => {
    expect(getValueOrFallback(state, fallbackState, [['qux']])).toBe('four');
  });
  test('get existing secondary value', () => {
    expect(getValueOrFallback(state, fallbackState, [['xxx'], ['bar']])).toBe(2);
  });
  test('get fallback secondary value', () => {
    expect(getValueOrFallback(state, fallbackState, [['xxx'], ['qux']])).toBe('four');
  });
  test('get existing value with parser', () => {
    expect(getValueOrFallback(state, fallbackState, [['foo']], v => v.toString())).toBe('1');
  });
  test('get secondary value with parser', () => {
    expect(getValueOrFallback(state, fallbackState, [['xxx'], ['baz']], v => v.toString())).toBe('3');
  });
  test('get valid value with parser', () => {
    expect(getValueOrFallback(state, fallbackState, [['foo'], ['bar']], v => {
      if (v % 2 === 0) { return v; }
      else { throw new Error(); }
    })).toBe(2);
  })
});
