// Implemente um programa que faça a leitura de três números e calcule o maior
// deles.

const prompt = require("prompt-sync")();

let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let num3 = Number(prompt("Digite o terceiro número: "));

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
	console.log("Valor inválido.");
} else if (num1 >= num2 && num1 >= num3) {
	console.log(`O maior número é ${num1}.`);
} else if (num2 >= num1 && num2 >= num3) {
	console.log(`O maior número é ${num2}.`);
} else if (num3 >= num1 && num3 >= num2) {
	console.log(`O maior número é ${num3}.`);
}
