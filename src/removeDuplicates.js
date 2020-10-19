/*
Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

*/

export default function removeDuplicates(nums) {
  let pointer = 0;

  nums.forEach(element => {
    if (nums[pointer] != element) {
      pointer++;
      nums[pointer] = element;
    }
  });

  // trim array for finicky testers
  nums = nums.slice(0, pointer+1);

  return ([pointer, nums]);
};