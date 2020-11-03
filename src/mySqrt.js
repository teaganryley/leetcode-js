/*
https://leetcode.com/problems/sqrtx/
*/

// simple/brute force
const solution1 = (x) => {
  if (x <= 1) {
    return x;
  }
  
  let searching = true; 
  let n = 2;

  while (searching) {
    let square = n * n;
    
    if (square === x) {
      return n;
    } else if (square > x ) {
      return n-1;
    } else {
      n++;
    }
  }
};

export { solution1 };
