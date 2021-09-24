var someArray = [[2], [5, 6, 7], [8, 9]];
var someArray2 = [[2.5, 2], [0.5, 0.2], [8]];
var someArray3 = [
  [1, 2],
  [3, 4, 5, 6],
  [7, 8, 9],
];

function multiplyArrayFunction(myArray) {
  var product = 1;
  var sum = 0;
  arr = [];
  for (i = 0; i < myArray.length; i++) {
    for (j = 0; j < myArray[i].length; j++) {
      sum += myArray[i][j];
      product *= myArray[i][j];
    }
  }
  arr.push(product, sum);
  return arr;
}
