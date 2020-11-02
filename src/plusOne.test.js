import { solution1 } from './plusOne';

describe('plus one problem correctness testing', ()=>{
  const testData = [
    [ [1,2,3],[1,2,4] ],
    [ [4,3,2,1], [4,3,2,2] ],
    [ [0], [1] ],
    [ [1,9], [2,0] ],
    [ [9], [1,0] ],
    //[ [], [] ],
  ];

  test.each(testData)('solution 2-- arg1: %p, exp: %p', (nums, expected) => {
    const result = solution1(nums);
    expect(result).toEqual(expected);
  });
});