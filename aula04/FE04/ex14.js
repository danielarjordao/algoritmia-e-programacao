// mplemente a função inverteNumero(numero) que recebe um número inteiro e devolve o
// número invertido.
// Exemplo: 1234 → 4321

const prompt = require('prompt-sync')();

const NUM = lerNumerosPositivos("Digite um número inteiro para inverter: ");
const numeroInvertido = inverteNumero(NUM);
console.log(`O número invertido de ${NUM} é: ${numeroInvertido}`);

function lerNumerosPositivos(mensagem) {
	let num;
	do {
		num = Number(prompt(mensagem));
	} while (isNaN(num) || num < 0);
	num = Math.trunc(num);
	return num;
}

function inverteNumero(numero) {
	let numInvertido = 0;

	while (numero > 0) {
		const digito = numero % 10;
		numInvertido = numInvertido * 10 + digito;
		numero = Math.trunc(numero / 10);
	}
	return numInvertido;
}
