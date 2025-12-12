// Implemente um programa que leia um numero inteiro e que se não for igual a
// 33, escrever no ecrã: "O número é diferente de 33”.

const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número inteiro: "));

if (isNaN(numero) || !Number.isInteger(numero)) {
	console.log("Valor inválido.");
} else if (numero !== 33) {
	console.log("O número é diferente de 33.");
}
