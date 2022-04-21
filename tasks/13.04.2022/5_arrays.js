let arr = [1, 4, -2, 4, 8, -21, 0, -3, 3, 1, 8, 10, 8, 9];

// Найти самую длинную последовательность чисел, упорядоченную по возрастанию. Записать её в новый массив
let arrNew = [];
let p = [];
arrNew.push(arr[0]);
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > arr[i - 1]) {
    arrNew.push(arr[i]);
  } else {
    p.push(arrNew);
    arrNew = [];
    arrNew.push(arr[i]);
  }
  if (i == arr.length - 1) {
    p.push(arrNew);
  }
}
console.log(p);

//[[ 1, 4 ],[ -2, 4, 8 ],[ -21, 0 ],[ -3, 3 ],[ 1, 8, 10 ],[ 8, 9 ]]
let maxLenght = p[0];
for (let ii = 0; ii < p.length; ii++) {
  if (maxLenght.length < p[ii].length) {
    maxLenght = p[ii]
  }
}
console.log(maxLenght)
// arrNew = [1, 4, [-2, 4, 8]];
// arrNew = [
//   [1, 4],
//   [-2, 4, 8],
// ];
