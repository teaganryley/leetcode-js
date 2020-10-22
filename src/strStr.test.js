import { solution1, solution2 } from './strStr';

describe('strStr correctness testing', () => {
  const testData = [
    ["hello", "ll", 2],
    ["aaaaa", "bba", -1],
    ["hotep pep pep", "ep", 3],
    ["", "", 0],
    ["abbbd", "", 0],
    ["", "catbacktack", -1],
    ["a", "a", 0],
    ["abc", "c", 2],
    ["aaaa", "baaa", -1]
  ];
  //solution 1- brute force
  test.each(testData)('solution 1-- arg1: %s, arg2: %s, exp: %i',
  (haystack, needle, expected) => {
    const result = solution1(haystack, needle);

    expect(result).toEqual(expected);
  });

  //solution 2- ez javascript
  test.each(testData)('solution 2-- arg1: %s, arg2: %s, exp: %i',
  (haystack, needle, expected) => {
    const result = solution2(haystack, needle);

    expect(result).toEqual(expected);
  });
});