// Implemente a função do exercício anterior de forma recursiva

const prompt = require('prompt-sync')();

const NUM = lerNumerosPositivos("Digite um número natural para calcular o fatorial: ");
const fatorial = calculaFatorial(NUM);
console.log(`O fatorial de ${NUM} é: ${fatorial}`);

function lerNumerosPositivos(mensagem) {
	let num;
	do {
		num = Number(prompt(mensagem));
	} while (isNaN(num) || num <= 0);
	return num;
}

function calculaFatorial(numero) {
	if (numero === 0) {
		return 1;
	}
	return numero * calculaFatorial(numero - 1);
}
