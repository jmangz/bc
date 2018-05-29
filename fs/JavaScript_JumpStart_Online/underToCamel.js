// Underscore To Camel Case
//
// CHALLENGE:
//
// Write a function to convert a variable name from under_score format to camelCase.
//
// Make sure you support an unlimited number of underscores in the input!
//
//
//
// EXAMPLES:
//
// - INPUT: underToCamel("first_name");
// - OUTPUT: "firstName"
//
//
// - INPUT: underToCamel("my_income_tax_from_2015");
// - OUTPUT: "myIncomeTaxFrom2015"

function underToCamel(str) {
  var result = '';

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (char === '_') {
      result += str[i + 1].toUpperCase();
      i++;
    } else {
      result += char;
    }
  }

  return result;
}
