// Crie uma aplicação que calcule a potência matemática de um número, a partir da base e do
// expoente introduzidos pelo utilizador.
// Implemente a função potencia(base, expoente) de forma iterativa

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
	return num;
}

function lerNumerosPositivos(mensagem) {
	let num;
	do {
		num = Number(prompt(mensagem));
	} while (isNaN(num) || num < 0);
	return num;
}

function potencia(base, expoente) {
	let resultado = 1;
	for (let i = 0; i < expoente; i++) {
		resultado *= base;
	}
	return resultado;
}

