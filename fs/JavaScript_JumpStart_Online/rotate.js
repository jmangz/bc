/*
Rotate Challenge - Fullstack JavaScript JumpStart


Rotate an array to the right by a certain number of "steps".

For example, the array to rotate is: [1,2,3,4,5,6,7] and
will be rotated 3 "steps".  The final array will look like: [5,6,7,1,2,3,4].

Notice the position of each index is shifted to the right by 3 places.

*/






// EXAMPLES

// rotate([22,11,500,92], 3);
// --> returns [ 500, 92, 22, 11 ];

// rotate([11,15,28,9,10], 0)
// --> returns [11,15,28,9,10]

function rotate(arr, num) {
  var rotated = [];

  for (var i = 0; i < arr.length; i++) {
    var el = arr[i];
    var moveTo = (i + num) % arr.length;
    rotated[moveTo] = el;
  }

  return rotated;
}

console.log(rotate([1,2,3,4,5], 6));// 2 = [4,5,1,2,3]; length = 5
