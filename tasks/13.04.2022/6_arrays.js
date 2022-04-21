// создать массив с числами от x до y включительно. Пример x = 5, y = 9, тогда массив будет [5, 6, 7, 8, 9]

let x = -8;
let y = 54;

let arr = [];
for (let i = 0; i <= y - x; i++) {
  // for (let i = x; i <= y; i++) {
  let bleat = x + i;
  arr.push(bleat);
}

console.log(arr);
