// Factorial
// Create the function factorial(num) that returns the factorial of its argument. The argument, num, will be a positive whole number.
//
// A factorial is the product of a number times all the numbers below it and is denoted by a '!'. For example, 5! would be 5*4*3*2*1 or 120.
//
// If you'd like additional information about factorials, check out for a refresher!
//
// Example:
//
// INPUT: factorial(4);
// OUTPUT: 24
// INPUT: factorial(5);
// OUTPUT: 120

function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
