// Compare Objects
// Write a function that returns true if two objects contain the same data, or are equivalent, and false if not.
//
// In order for the function to return true, ALL the properties and values that exist in object 1 must exist and be equal to those in object 2. Similarly, ALL the properties and values in object 2 must exist and be equal to those in object 1.
//
// Note: You can assume that each object will only have one level, meaning there will be no nested objects.
//

/* Write Code Here */
function compareObjects(obj1, obj2) {
  for (var key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  for (var key2 in obj2) {
    if (obj1[key2] !== obj2[key2]) {
      return false;
    }
  }
  return true;
}










//EXAMPLE TESTS

console.log(compareObjects({ name: 'giselle' }, { name: 'zeke' }));
// OUTPUT: false

console.log(compareObjects({ name: 'nick' }, { name: 'nick' }));
// OUTPUT: true
