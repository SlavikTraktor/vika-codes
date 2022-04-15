let arr = [1, 4, 2, 4, 8, 5, -3, 3, 1, 8, 10, 8];

// К каждому числу больше 5 прибавить 8

for (let i = 0; i < arr.length; i++) {
  //   let x = arr[i] > 5;
  //   if (x == true) {
  //     arr[i] = arr[i] + 8;
  if (arr[i] > 5) {
    arr[i] = arr[i] + 8;
    // }
  }
}
console.log(arr);
