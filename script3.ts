const entrada3 = require("readline-sync");

let t: number = parseFloat(entrada3.question("Digite um numero qualquer: "));

for(let i = 0; i <= 10; i++){
    console.log(i*t);
}