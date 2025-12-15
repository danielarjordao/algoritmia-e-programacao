// Crie um programa que solicite um número ao utilizador e indique se esse número é par ou
// ímpar.
// Implemente a função verificaPar(numero) que devolve true se o número for par e false
// caso contrário.

const prompt = require("prompt-sync")();

const numero = lerNumero("Digite um número: ");

if (verificaPar(numero)) {
	console.log(`O número ${numero} é par.`);
} else {
	console.log(`O número ${numero} é ímpar.`);
}

function lerNumero(mensagem) {
	let num;
	do {
		num = Number(prompt(mensagem));
	} while (isNaN(num));
	return num;
}

function verificaPar(numero) {
	if (numero % 2 === 0) {
		return true;
	} else {
		return false;
	}
}
