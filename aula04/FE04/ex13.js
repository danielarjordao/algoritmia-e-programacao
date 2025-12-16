// Implemente a função do exercício anterior de forma recursiva

const prompt = require('prompt-sync')();

const BASE = lerNumeros("Digite a base: ");
const EXPOENTE = lerNumerosPositivos("Digite o expoente (número natural): ");
const resultado = potencia(BASE, EXPOENTE);
console.log(`${BASE} elevado a ${EXPOENTE} é: ${resultado}`);

function lerNumeros(mensagem) {
	let num;
	do {
		num = Number(prompt(mensagem));
	} while (isNaN(num));
	return Math.trunc(num);
}

function lerNumerosPositivos(mensagem) {
	let num;
	do {
		num = Number(prompt(mensagem));
	} while (isNaN(num) || num < 0);
	return Math.trunc(num);
}

function potencia(base, expoente) {
	if (expoente === 0) {
		return 1;
	}
	return base * potencia(base, expoente - 1);
}
