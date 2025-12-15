// Desenvolva um programa que reutilize a função do exercício anterior para verificar se um
// número é capicua (palíndromo).
// Implemente a função capicua(numero) que devolve true se o número for capicua e false
// caso contrário

const prompt = require('prompt-sync')();

const NUM = lerNumerosPositivos("Digite um número inteiro para verificar se é capicua: ");
const ehCapicua = capicua(NUM);

if (ehCapicua) {
	console.log(`O número ${NUM} é capicua.`);
} else {
	console.log(`O número ${NUM} não é capicua.`);
}

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

function capicua(numero) {
	const numeroInvertido = inverteNumero(numero);
	return numero === numeroInvertido;
}
