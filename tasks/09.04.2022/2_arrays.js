"use strict";
let arr = [50000, 8, 3, 6, -5, 228, 1488];

// 1) поменять местами значения под индексами 1 и 3
// 2) сравнить первый элемент массива с последним и добавить в конец массива большее из них
let c = arr[1];
arr[1] = arr[3];
arr[3] = c;
console.log(arr);

let i = arr.length - 1;

if (arr[0] > arr[i]) {
  arr.push(arr[0]);
} else if (arr[i] > arr[0]) {
  arr.push(arr[i]);
}

console.log(arr);
