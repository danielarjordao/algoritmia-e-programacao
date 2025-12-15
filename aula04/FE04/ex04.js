// Crie uma aplicação que receba do utilizador um numero e que escreva na consola os
// números de 1 até ao mesmo usando o procedimento imprimeNumeros(numero).

const prompt = require("prompt-sync")();

function imprimeNumeros(numero) {
	for (let i = 1; i <= numero; i++) {
		console.log(i);
	}
}

function lerNumeroPositivos(mensagem) {
	let num;
	do {
		num = Number(prompt(mensagem));
	} while (isNaN(num) || num <= 0);
	return num;
}

const num = lerNumeroPositivos("Digite um número inteiro positivo: ");
imprimeNumeros(num);
