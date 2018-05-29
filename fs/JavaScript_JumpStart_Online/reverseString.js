// Reverse A String
//
// CHALLENGE
//
// Create the function "reverseString" that reverses a string, and returns the value of the reversed string.
//
// NOTE: Do not use the .reverse() method
//
//
//
// EXAMPLES
//
// - INPUT: reverseString("hello");
// - OUTPUT: 'olleh'

function reverseString(str) {
  var reversed = '';

  for (var i = str.length - 1; i >= 0; i--) {
    var char = str[i];
    reversed += char;
  }

  return reversed;
}
