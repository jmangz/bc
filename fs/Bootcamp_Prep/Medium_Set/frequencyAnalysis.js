/* Write Code Here */
function frequencyAnalysis(str) {
  var result = {};
  var letters = str.split('');

  for (var i = 0; i < letters.length; i++) {
     if (result[letters[i]] === undefined) {
       result[letters[i]] = 1;
     } else {
     	 result[letters[i]] += 1;
     }
  }

  return result;
}










console.log(frequencyAnalysis('abca'));
// OUTPUT: {a: 2, b: 1, c: 1}

console.log(frequencyAnalysis(''));
// OUTPUT: { }
