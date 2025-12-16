// Um número primo é apenas divisível por 1 e por ele próprio. Os números 0 e 1 não são
// considerados primos.
// Crie um programa que solicite um número ao utilizador e indique se é primo ou não, utilizando
// a função verificaPrimo(numero).

const prompt = require("prompt-sync")();

const numero = lerNumerosPositivos("Digite um número: ");

if (verificaPrimo(numero)) {
	console.log(`O número ${numero} é primo.`);
} else {
	console.log(`O número ${numero} não é primo.`);
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
