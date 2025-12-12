// Altere o programa anterior para a escrever também se o número é igual a zero
// (use ‘se’ encadeados)

const prompt = require("prompt-sync")();

let num = Number(prompt("Digite um número: "));

if (num === 0) {
	console.log("O número é zero.");
} else if (num < 0) {
	console.log("O número é negativo.");
} else if (num > 0) {
	console.log("O número é positivo.");
} else {
	console.log("Valor inválido.");
}
