// First Factorial
//
// CHALLENGE
//
// Create the function factorial(num) that returns the factorial of the parameter.
//
// Not sure what a factorial is? Check this link for a refresher!
//
//
// EXAMPLE:
//
// - INPUT: factorial(4);
// - OUTPUT: 24
//
//
// -INPUT: factorial(5);
// -OUTPUT: 120

function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
