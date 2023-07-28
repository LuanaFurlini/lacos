const entrada2 = require('readline-sync');

let x:number = 0;

for(let i = 0; i < 5; i++){
    let m:number = parseFloat(entrada2.question('Digite a nota: '));
    x = m + x;
}
console.log('Média: ' + x / 5);