// Reduce the Sum
// Write a function that uses the native Array .reduce method to sum up an array of numbers, but starting at 50.
/* Write Code Here */
function sumReduce(arr) {
  var sum = 50;

  if (arr.length === 0) {
    return sum;
  }

  sum += arr.reduce((a, b) => a + b);

  return sum;
}










//EXAMPLE TESTS

console.log(sumReduce([1,2,3,4]));
// OUTPUT: 60

console.log(sumReduce([]));
// OUTPUT: 50
