// Crie uma aplicação que solicite um número natural ao utilizador e mostre o valor do somatório
// de 1 até esse número.
// Implemente a função calculaSomatorio(numero) que devolve o resultado do somatório

const prompt = require("prompt-sync")();

const numero = lerNumerosPositivos("Digite um número natural: ");
const somatorio = calculaSomatorio(numero);
console.log(`O somatório de 1 até ${numero} é: ${somatorio}`);

function lerNumerosPositivos(mensagem) {
	let num;
	do {
		num = Number(prompt(mensagem));
	} while (isNaN(num) || num <= 0);
	return Math.trunc(num);
}

function calculaSomatorio(numero) {
	if (numero === 0) {
		return 0;
	}
	return numero + calculaSomatorio(numero - 1);
}
