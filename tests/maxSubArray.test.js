import { solution2 } from '../src/maxSubArray';

describe('Max subarray correctness testing', () => {
  const testData = [
    [[-2,1,-3,4,-1,2,1,-5,4], 6],
    [[1],1],
    [[0], 0],
    [[-1],-1],
    [[-2147483647],-2147483647],
  ];

  test.each(testData)('solution 2-- arg1: %p, exp: %i',(nums, expected)=>{
    const result = solution2(nums);
    expect(result).toBe(expected);
  });
});