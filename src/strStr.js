/*
Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
Return 0 when needle is an empty string.
https://leetcode.com/problems/implement-strstr/
*/

function solution1(haystack, needle) {
  if (needle.length === 0) { return 0 }
  
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        if (needle[j] !== haystack[i + j]) {
          break;
        } else if (j === needle.length - 1) {
          return i;
        }
      }
    }
  }
  return -1;
}

function solution2(haystack, needle) {
  return haystack.indexOf(needle);
}

export { solution1, solution2 };