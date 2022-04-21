let arr = [1, 4, 2, 4, 8, 7, -3, 3, 1, 8, 10, 8];

// Создать новый массив, каждое число которого - сумма соседних чисел с соответствующим индексом из массива arr.
// Пример: массив arr будет [1, 2, 3, 2] => тогда итоговый массив будет [3, 6, 7, 5]
let arrNew = [];
let x;
let y;
for (let i = 0; i < arr.length; i++) {
  if (i == 0) {
    x = arr[i] + arr[i + 1];
    arrNew.push(x);
  }
  if (i > 0 && i < arr.length - 1) {
    x = arr[i] + arr[i + 1];
    y = x + arr[i - 1];
    arrNew.push(y);
  }
  if (i == arr.length - 1) {
    x = arr[i] + arr[i - 1];

    arrNew.push(x);
  }
}

console.log(arrNew);
