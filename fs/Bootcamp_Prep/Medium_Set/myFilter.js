// My Filter
// Write a function myFilter that accepts an array and a callback function that is used to create a filtered array.
// Try to mirror the functionality of the native .filter() array method as closely as possible.
//
// Just like the native .filter(), our myFilter function should not change the array passed in as an argument,
// but should rather return a filtered copy of that array.

/* Write Code Here */
function myFilter(arr, cb) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }

  return result;
}









//EXAMPLE TESTS

var arr = [1,2,3,4,5];

function isEven(num) {
  return num % 2 === 0;
}

console.log(myFilter(arr, isEven));
//OUTPUT: [2,4]

console.log(myFilter(arr, function(num) {
  return !isEven(num);
}));
//OUTPUT: [1,3,5];
