// Implemente um programa que leia um número inteiro diferente de zero e diga
// se este é positivo ou negativo.

const prompt = require("prompt-sync")();

let num = Number(prompt("Digite um número: "));

if (num < 0) {
	console.log("O número é negativo.");
} else if (num > 0) {
	console.log("O número é positivo.");
} else {
	console.log("Valor inválido.");
}
