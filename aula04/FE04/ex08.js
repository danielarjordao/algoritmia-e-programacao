// Crie uma aplicação que receba do utilizador um intervalo de números inteiros [inicio,fim]
// e indique, para cada número desse intervalo, se é ou não primo.
// Reutilize:
// •a função verificaPrimo(numero) do exercício anterior;
// •a função mostra(numero, primo) para escrever o resultado na consola.
// 9 — Somatório de 1 até N
// Crie uma aplicação que solicite um número natural ao utilizador e mostre o valor do somatório
// de 1 até esse número.
// Implemente a função calculaSomatorio(numero) que devolve o resultado do somatório.
// 2/3

const prompt = require("prompt-sync")();

const inicio = lerNumerosPositivos("Digite o número inicial do intervalo: ");
const fim = lerNumerosPositivos("Digite o número final do intervalo: ");

for (let num = inicio; num <= fim; num++) {
	mostra(num, verificaPrimo(num));
}

function lerNumerosPositivos(mensagem) {
	let num;
	do {
		num = Number(prompt(mensagem));
	} while (isNaN(num) || num <= 0);
	return Math.trunc(num);
}

function verificaPrimo(numero) {
	if (numero < 2) {
		return false;
	}
	for (let i = 2; i <= numero / 2; i++) {
		if (numero % i === 0) {
			return false;
		}
	}
	return true;
}

function mostra(numero, primo) {
	if (primo) {
		console.log(`O número ${numero} é primo.`);
	} else {
		console.log(`O número ${numero} não é primo.`);
	}
}
