import { solution1 } from './mySqrt';

describe('mySqrt(x) correctness testing', ()=>{
    const testData = [
      [ 4, 2 ],
      [ 8, 2 ],
      [ 0, 0 ],
      [ 1, 1 ],
    ];

    test.each(testData)('solution 1-- arg1: %i, exp: %i', (x, expected)=>{
      const result = solution1(x);
      expect(result).toEqual(expected);
    });
});