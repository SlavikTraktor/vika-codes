// принимает в аргумент массив и возвращает длину
// let arr = [1, 2, 3, 4, 5];

// let arr2 = [1, 2];

// function arraySum(arrIn) {
//   return arrIn[0] + arrIn[1];
// }

// let kek = arraySum(arr);

// console.log(kek);

// console.log(arraySum(arr2));
// console.log(arraySum([3, 5, 6]));

// Если длина массива больше 2, то возвращается третий элемент, умноженный сам на себя, если же длина массива 2, то вернуть сумму первых двух элементов

let arr = [1, 2, 3, 4, 5];

let arr2 = [1, 2];

function arraySum(arr) {
  if (arr.length > 2) {
    return arr[2] * arr[2];
  }
  if (arr.length == 2) {
    return arr[0] + arr[1];
  }
  return 0;
}

let kek = arraySum(arr);

console.log(kek);

console.log(arraySum(arr2));
console.log(arraySum([3, 5, 6]));
console.log(arraySum([]));
console.log(arraySum([6]));
