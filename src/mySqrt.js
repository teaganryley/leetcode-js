/*
https://leetcode.com/problems/sqrtx/

formulation: x^2 = answer
  f(x) = x^2 - a
  f'(x) = 2x
*/

// naive solution
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

// newton's method
const solution2 = (x) => {
  if (x === 0) {
    return x;
  }
  
  let guess = x;
  let newGuess;
  let difference = 10; // "large" initial value. replace?

  while (difference >= 1) {
    // x_n+1 = x_n - f(x)/f'(x)
    newGuess = (guess - (guess**2 - x)/ (2 * guess));
    difference = Math.abs(newGuess - guess);
    guess = newGuess;
  }
  return Math.floor(guess);
};

// binary search
const solution3 = (x) => {

};

export { solution1, solution2, solution3 };
