import { naiveSquare, newtonSquare, binarySquare } from '../src/mySqrt';

describe('mySqrt(x) correctness testing', () => {
  const testData = [
    [4, 2],
    [8, 2],
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 1],
    [16, 4],
  ];

  test.each(testData)('Naive-- arg1: %i, exp: %i', (x, expected) => {
    const result = naiveSquare(x);
    expect(result).toEqual(expected);
  });

  test.each(testData)('Newton-- arg1: %i, exp: %i', (x, expected) => {
    const result = newtonSquare(x);
    expect(result).toEqual(expected);
  });

  test.each(testData)('Binary-- arg1: %i, exp: %i', (x, expected) => {
    const result = binarySquare(x);
    expect(result).toEqual(expected);
  });
});
