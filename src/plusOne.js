/*
https://leetcode.com/problems/plus-one/

Constraints:
  1 <= digits.length <= 100
  0 <= digits[i] <= 9
*/

function solution1(digits) {
  for (let i = digits.length - 1; i > -1; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      break;
    } else if (i === 0) {
      digits[i] = 0;
      digits.unshift(1);
    } else {
      digits[i] = 0;
    }
  }
  return digits;
}

export { solution1 };
