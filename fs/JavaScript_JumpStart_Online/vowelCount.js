/*

Vowel Count

Fullstack Academy - JavaScript JumpStart

- Description:

Create the function "vowelCount(str)" that takes a str parameter and returns the number of vowels
the string contains (ie. "Fullstack Academy" would return 5).

**Do not count 'y' as a vowel for this challenge.**

**Example**

- INPUT: `vowelCount("Good Job");`
- Return Value: `3`

*** Write the vowelCount Function below *** */



function vowelCount(str) {
  var count = 0;
  var vowels = 'aeiouAEIOU';

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(vowelCount('Good Job'));
