import { getSizes, getVariances } from './opts.mjs';
import test from 'ava';

test('options shoult return proper defaults if none provided', (t) => {
  t.snapshot(getSizes());
  t.snapshot(getVariances());
});
test('options should parse a single resolution option', (t) => {
  t.deepEqual(getSizes('200x200'), [{ h: 200, w: 200 }]);
});
test('options should parse multiple resolution options', (t) => {
  t.deepEqual(getSizes(['100x200', '300x400']), [
    { w: 100, h: 200 },
    { w: 300, h: 400 },
  ]);
});
test('options should throw when a malformed resolution option is given', (t) => {
  t.throws(() => getSizes('100xFoo'));
});
test('options should parse a single variance option', (t) => {
  t.deepEqual(getVariances('0.61'), [0.61]);
});
test('options should parse multiple variance options', (t) => {
  t.deepEqual(getVariances(['0.333', '0.1', '1']), [0.333, 0.1, 1]);
});
test('options should throw when an invalid variance option is given', (t) => {
  t.throws(() => getVariances('1.1'));
  t.throws(() => getVariances('-1'));
  t.throws(() => getVariances('foo'));
});
