import { solution1 } from './countAndSay';

describe('Count and say correctness testing', () => {
  const testData = [
    [1,'1'],
    [4, '1211'],
  ];

  test.each(testData)('solution 1-- arg1: %p, arg2: %i, exp: %i',(num, expected)=>{
    const result = solution1(num);
    expect(result).toBe(expected);
  });
});