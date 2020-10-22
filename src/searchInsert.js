/*
Given a sorted array of distinct integers and a target value, return the index if the target is found.
If not, return the index where it would be if it were inserted in order.
https://leetcode.com/problems/search-insert-position/
*/

function solution1(nums, target) {
  if (target < nums[0]) { 
    return 0; 
  } else if (target > nums[nums.length-1]) {
    return nums.length;
  }
  
  for (let i = 0; i < nums.length; i++) {
    if (target <= nums[i]) { 
      return i; 
    }
  }
}

export { solution1 };