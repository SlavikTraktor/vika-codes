function sum1() {
    let a = 5;
    let b = 8;
    
    let c = a + b;
    console.log(c);
}

// sum1();
// sum1();


function sum2(a, b) {
    let c = a + b;
    console.log(c);
}

// sum2(2, 5);
// sum2(4, -5);

function sum3(a, b) {
    if(a === 4) {
        return 0;
    }

    let c = a + b;
    return c;
    console.log(c);
}

let kek = 5;

let c = sum3(kek, 6); // 10
let c1 = sum3(3, 2); // 10
console.log(c);