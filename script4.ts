const entrada4 = require("readline-sync");

let a = 1;
let p = 0;

for(let i = 0; i <= 10; i++){

    let f = a + p;
    console.log(f);

    p = a
    a = f
}

