import strStr from './strStr';

describe('strStr correctness testing', ()=>{
  const testData = [
    [],
  ];

  test.each(testData)('',(desc, arg1, expected)=>{
    const result = strStr(arg1);
    expected(result).toBe(expected);
  });
});