function myBouncer(arr) {
  return arr.filter(Boolean);
}

console.log(myBouncer([7, "ate", false, 9])); // Change this line
console.log(myBouncer(["a", "b", "c"])); // Change this line
console.log(myBouncer([false, null, 0, NaN, undefined, ""])); // Change this line
console.log(myBouncer([null, NaN, 1, 2, undefined])); // Change this line
module.exports = myBouncer;
