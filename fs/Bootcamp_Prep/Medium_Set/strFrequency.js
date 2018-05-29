// Reduce Frequency
// Write a function that will use the .reduce() method to find the frequency of strings in an array.
// our function, strFrequency, takes an array of strings, some strings occurring multiple times,
// and returns an object that specifies how many times each string occurred in the array.
//

/* Write Code Here */
function strFrequency(arr) {

  var count = arr.reduce(function(result, str) {
    if (str in result) {
      result[str]++;
    } else {
      result[str] = 1;
    }
    return result;
  }, {});

  return count;
}

















//EXAMPLE TEST

var names = ["Bob", "Bill", "Bo", "Ben", "Bob", "Brett", "Ben", "Bill", "Bo", "Ben", "Bob", "Ben"];

console.log(strFrequency(names));
//OUTPUT: {Bob: 3, Bill: 2, Bo: 2, Ben: 4, Brett: 1}
