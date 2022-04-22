"use strict";
let arr = [1, 4, 2, 8, 6, -3];
//сложить все элементы массива
// let x = arr[0];
// for (let i = 1; i <= arr.length - 1; i++) {
//   x = x + arr[i];
// }
// console.log(x);

// НАписать функцию, которая суммирует все элементы массива и возвращает эту сумму
let arr2 = [0, 1, 1, 1, 1, 2];
function sum(anyArr) {
  let x = anyArr[0];
  for (let i = 1; i <= anyArr.length - 1; i++) {
    x = x + anyArr[i];
  }
  return x;
}

console.log(sum(arr2));
console.log(sum([4,6,7]));
