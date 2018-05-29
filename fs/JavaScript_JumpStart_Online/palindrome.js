// Palindrome
//
// CHALLENGE:
//
// Have the function palindrome(str) accept a string argument, and return the boolean true if the argument is a palindrome (meaning that the string is the same forward as it is backward). Otherwise, return the boolean false.
//
//
//
// EXAMPLES:
//
// - INPUT: palindrome("racecar");
// - OUTPUT: true
//
//
// - INPUT: palindrome("animal");
// - OUTPUT: false

function palindrome(str) {
  for (var i = 0; i < str.length / 2; i++) {
    var char = str[i];
    var endChar = str[str.length - 1 - i];
    if (char !== endChar) {
      return false;
    }
  }

  return true;
}
