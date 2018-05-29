// My Map
// Write a function myMap that accepts an array and a callback function that is used to create a mapped array.
// Try to mirror the functionality of the native .map() array method as closely as possible.
//
// Just like the native .map(), our myMap function should not change the array passed in as an argument, but should rather return a mapped copy of that array.

/* Write Code Here */
function myMap(arr, cb) {
  var results = [];

  for (var i = 0; i < arr.length; i++) {
    results.push(cb(arr[i], i, arr));
  }

  return results;
}











//EXAMPLE TESTS

var arr = [1,2,3];

function double(num) {
  return num * 2;
}

console.log(myMap(arr, double));
//OUTPUT: [2,4,6]

console.log(myMap(arr, function(num) {
  return num.toString();
}));
//OUTPUT: ['1','2','3'];
