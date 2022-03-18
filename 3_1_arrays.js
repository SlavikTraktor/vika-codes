// let p1 = 170;
// let p2 = 145;
// let p3 = 178;
// let p4 = 170;
// let p5 = 170;

let arr = [170, 145, 178, 190, 150];
//           0    1    2    3    4

arr[0] = 5;

arr[2] = arr[3];

arr[4] = (arr[0] + arr[1]) / 6;

let c = 3;

arr[c] = 456;

arr[c - 2] = 228;

console.log(arr);

// длина массива - {имя переменной массива}.length
let len = arr.length; // 5

console.log(len, arr.length);
