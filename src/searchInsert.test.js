import { solution1 } from './searchInsert';

describe('searchInsert correctness testing', () => {
  const testData = [
    [[1,3,5,6],5,2],
    [[1,3,5,6],2,1],
    [[1,3,5,6],7,4],
    [[1,3,5,6],0,0],
    [[1],0,0],
  ];

  //solution 1
  test.each(testData)('solution 1-- arg1: %p, arg2: %i, exp: %i',
  (nums, target, expected) => {
    const result = solution1(nums, target);
    expect(result).toBe(expected);
  });
});