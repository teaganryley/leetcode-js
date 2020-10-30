/*
https://leetcode.com/problems/maximum-subarray/
*/

//TODO: find way to merge kadane's approach with divide and conquer

//merge sort-- works but performs poorly, due to redundancy 
function solution1(nums) {
  if (nums.length === 1) {
    return nums[0];
  } else {
    const left = maxSubArray(nums.slice(0,nums.length-1));
    const right = maxSubArray(nums.slice(1,nums.length));
    const numSum = nums.reduce((accumulator, current) => accumulator + current);
    
    return Math.max(left, right, numSum);
  }
}

// kadane's algorithm
function solution2(nums) {
  let localMax = 0;
  let globalMax = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    localMax = Math.max(nums[i], localMax + nums[i]);
    if (localMax > globalMax) {
      globalMax = localMax;
    }
  }
  return globalMax;
}

export { solution1, solution2 };