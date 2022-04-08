let a = 9;
let b = -12;
let c = 1;

// a*x*x + b*x + c = 0
let d = b * b - 4 * a * c;
console.log(d);

if (d < 0) {
  console.log(
    "d < 0 дискриминант отрицательный, данное уравнение не имеет действительных корней"
  );
} else if (d === 0) {
  let x = -b / (2 * a);
  console.log(x);
} else {
  let x = (-b + Math.sqrt(d)) / (2 * a);
  let x2 = (-b - Math.sqrt(d)) / (2 * a);
  console.log(x, x2);
}
