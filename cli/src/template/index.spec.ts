import test from 'ava';
import { weightedRandom } from './index.js';

test('weightedRandom', (t) => {
  const testData = new Map([
    ['a', 1],
    ['b', 3],
    ['c', 1],
  ]);
  const total = [...testData.values()].reduce(
    (total, weight) => total + weight,
    0,
  );
  const samples = 1000;

  let aFrequency = 0,
    bFrequency = 0,
    cFrequency = 0;

  for (let i = 0; i < total * samples; i++) {
    switch (weightedRandom(testData)) {
      case 'a':
        aFrequency++;
        break;
      case 'b':
        bFrequency++;
        break;
      case 'c':
        cFrequency++;
        break;
    }
  }

  t.is(Math.round(aFrequency / samples), 1);
  t.is(Math.round(bFrequency / samples), 3);
  t.is(Math.round(cFrequency / samples), 1);
});
