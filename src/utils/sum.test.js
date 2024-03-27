import sum from './sum.js';

describe('sum of two number', () => {
  test('2 + 2', () => {
    expect(sum(2, 2)).toEqual(4);
  });
});
