// Faça um programa que leia dois números e mostre qual é o maior e qual é o
// menor.

const prompt = require("prompt-sync")();

let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));

if (isNaN(num1) || isNaN(num2)) {
	console.log("Valor inválido.");
} else if (num1 > num2) {
	console.log(`O maior número é ${num1} e o menor é ${num2}.`);
} else if (num2 > num1) {
	console.log(`O maior número é ${num2} e o menor é ${num1}.`);
} else if (num1 === num2) {
	console.log("Os dois números são iguais.");
}
