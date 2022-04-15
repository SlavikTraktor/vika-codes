let arr = [1, 4, 2, 4, 8, 211, -3, 3, 1, 8, 10, 8];

// Созать новый массив, состоящий элементов из массива arr, но без повторяющихся значений
let arr_new = [];
for (let i = 0; i < arr.length; i++) {
  let isCopy = false;
  for (let x = 0; x < i; x++) {
    if (arr[i] == arr[x]) {
      isCopy = true;
    }
  }

  if (!isCopy) {
    arr_new.push(arr[i]);
  }
}

console.log(arr_new);
