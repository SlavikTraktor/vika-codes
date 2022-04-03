let arr = [1, 4, 2, 8, 6, -3];
//сложить все элементы массива
let x = arr[0];
for (let i = 1; i <= arr.length - 1; i++) {
  x = x + arr[i];
}
console.log(x);
