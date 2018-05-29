// Sum of Digits
//
// CHALLENGE
//
// Create the function sumOfDigits that adds individual digits of a number, and returns the sum.
//
//
//
// EXAMPLES:
//
// - INPUT: sumOfDigits(414);
// - OUTPUT: 9
//
//
// - INPUT: sumOfDigits(2913);
// - OUTPUT: 15

function sumOfDigits(num) {
  var sum = 0;
  var numArray = num.toString().split('');

  for (var i = 0; i < numArray.length; i++) {
    var number = Number(numArray[i]);
    sum += number;
  }

  return sum;
}
