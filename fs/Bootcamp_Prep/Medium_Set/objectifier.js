/* Write Code Here */
function objectifier(data) {
  var result = {};

  for (var i = 0; i < data.length; i++) {
    var element = data[i];
    var category = element[0]; // animals
    var typesInCategory = element[1];
    var categoryObj = {};
    for (var j = 0; j < typesInCategory.length - 1; j += 2) {
      var type = typesInCategory[j]; // dogs
      var names = typesInCategory[j + 1]; // ['Corgi', 'Sheltie']
      categoryObj[type] = names;
    }

    result[category] = categoryObj;
  }

  return result;
}

//EXAMPLE TEST

var data = [
  [ 'animals',
    [
      'dogs', ['Corgi', 'Sheltie'],
      'cats', ['Tabby','Black'],
      'pigs', ['Teacup']
    ]
  ],
  [ 'guitars',
    [
      'Fender', ['Telecaster', 'Stratocaster','Jazzmaster'],
      'Gibson', ["Gibson Flying-V", 'Firebird', 'Les Paul']
    ]
  ]
]

console.log(objectifier(data));
//OUTPUT:
//
// {
// animals : {
//     dogs : ['Corgi', 'Sheltie'],
//     cats : ['Tabby','Black'],
//     pigs : ['Teacup']
// },
// guitars : {
//     Fender : ['Telecaster', 'Stratocaster','Jazzmaster'],
//     Gibson : ["Gibson Flying-V", 'Firebird', 'Les Paul']
// }
// }
