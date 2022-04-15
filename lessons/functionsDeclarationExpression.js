function getAge1(bithYear, yaerNow) {
  // const age = yaerNow-bithYear;
  // return age
  return yaerNow - bithYear;
}
const myAge = getAge1(1998, 2022);
console.log(myAge);

const getAge2 = function (bithYear, yaerNow) {
  return yaerNow - bithYear;
};
const myAge2 = getAge2(1998, 2022);
console.log(myAge2);
