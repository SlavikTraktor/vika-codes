//AND и, OR или, NOT не.AND

//AND &&
// console.log(true&& true);
// console.log(true&& false);
// console.log(false&& false);
// true
// false
// false
// //OR ||
// console.log(true|| true);
// console.log(true|| false);
// console.log(false||false);
// true
// true
// false
//NOT!
// console.log(!true);
// console.log(!false);
// false
// true

// const hasMoney = false;
// const isAdult = false;
// if (hasMoney && isAdult) {
//   console.log("You can buy the drink.");
// } else {
//   console.log("You can not buy the drink.");
// }

// const hasMoney = false;
// const isWithParent = false;

// if (hasMoney || isWithParent) {
//   console.log("You can buy the orange.");
// } else {
//   console.log("You can not buy the orange.");
// }

const hasMoney = true;
const isAdult = true;
const isCompletelyDrunk = true; 
// console.log(!hasMoney);

const canBuy = hasMoney && isAdult;
if (canBuy && !isCompletelyDrunk) {
  console.log("You can buy the drink.");
} else {
  console.log("You can not buy the drink.");
}