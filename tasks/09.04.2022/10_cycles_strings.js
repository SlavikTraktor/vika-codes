"use strict";
// 1 202 3
// 4 54 6
// 7 8 97...
// и так далее
// console.log("1 202 3");
// console.log("4 54 6");

let str = "7 202 3 4 54 6 7 8 97 10 11 12 13 14 15 16 17 18";
str = str.split(" ");
for (let i = 0; i < str.length; i += 3) {
  if (i == str.length - 1) {
    console.log(str[i]);
  } else {
    if (i == str.length - 2) {
      console.log(str[i] + " " + str[i + 1]);
    } else {
      let str1 = str[i] + " " + str[i + 1] + " " + str[i + 2];
      console.log(str1);
    }
  }
}
