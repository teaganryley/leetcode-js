import removeDuplicates from '../src/removeDuplicates';

describe('removeDuplicate correctness testing', ()=>{
  const testData = [
    ['example 1', [1,1,2],[1,[1,2]]],
    ['example 2',[0,0,1,1,1,2,2,3,3,4],[4,[0,1,2,3,4]]],
    ['no dupes',[3,4,5,6,7,8],[5,[3,4,5,6,7,8]]]
  ];

  test.each(testData)('description: %s | input: %p | expected: %p', (desc, testInput, expected)=>{
    const result = removeDuplicates(testInput);
    console.log(expected);
    expect(result).toEqual(expected);
  });

});