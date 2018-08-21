const wr = require('./weighted-random');

describe('weighted random', () => {
  it('selects a random key from a map of keys to weights', () => {

    const testData = new Map([
      ['a', 1],
      ['b', 3],
      ['c', 1],
    ]);
    const total = Array.from(testData.values()).reduce((total, weight) => total + weight, 0);
    const samples = 1000;

    let frequency = {
      'a': 0,
      'b': 0,
      'c': 0,
    };

    for (let i = 0; i < total * samples; i++) frequency[wr(testData)]++;

    expect(Math.round(frequency['a'] / samples)).toBe(1);
    expect(Math.round(frequency['b'] / samples)).toBe(3);
    expect(Math.round(frequency['c'] / samples)).toBe(1);

  });
});
