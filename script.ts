const entrada = require("readline-sync");

let n: number = entrada.question("Digite um numero inteiro positivo qualquer: ");

for(let i = 0; i <= n; i=i+2){
    console.log(i);
}