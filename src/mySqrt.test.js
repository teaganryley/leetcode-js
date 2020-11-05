import { solution1, solution2 } from './mySqrt';

describe('mySqrt(x) correctness testing', ()=>{
    const testData = [
      [ 4, 2 ],
      [ 8, 2 ],
      [ 0, 0 ],
      [ 1, 1 ],
    ];

    test.each(testData)('solution1: naive-- arg1: %i, exp: %i', (x, expected)=>{
      const result = solution1(x);
      expect(result).toEqual(expected);
    });

    test.each(testData)('solution2: Newton-- arg1: %i, exp: %i', (x, expected)=>{
      const result = solution2(x);
      expect(result).toEqual(expected);
    });
});