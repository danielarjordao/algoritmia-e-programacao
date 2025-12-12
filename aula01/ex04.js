// Escreve um programa que determine o
// resto da divisão inteira entre dois
// números inteiros introduzidos no
// código.
// • Mostra o resultado no ecrã indicando a
// operação realizada.

const prompt = require("prompt-sync")();

let num1 = Number(prompt("Digite o primeiro número inteiro: "));
let num2 = Number(prompt("Digite o segundo número inteiro: "));

let resto = num1 % num2;

console.log(`O resto da divisão inteira entre ${num1} e ${num2} é: ${resto}`);
