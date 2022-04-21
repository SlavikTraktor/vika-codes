let arr = [1, 4, -2, 4, 8, -21, 0, -3, 3, 1, 8, 16, 8, 625];

// Создать новый массив, состоящий только из тех элементов массива arr, из которых можно извлечь целый квадратный корень
// К примеру квадратный корень из 4 будет 2, она нам подходит
// А вот квадратный корень из 2 будет 1,4.. , он нам не подходит

let arrNew = [];
for (let i = 0; i <= arr.length - 1; i++) {
  let x = Math.sqrt(arr[i]);

  if (Number.isInteger(x)) {
    arrNew.push(arr[i]);
  }
}
console.log(arrNew);
