let arr = [1, -4, 2, -8, 6, -3, 5, 7];
// создать новый массив, в котором будут только те значения из массива arr, которые больше 0. В том же порядке, что и в arr
let arrNew = [];
for (let i = 0; i <= arr.length - 1; i++) {
  if (arr[i] > 0) {
    let x = arr[i];
    arrNew.push(x);
  }
}
console.log(arrNew);
