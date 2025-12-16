// Implemente a função calculaFatorial(numero) que calcula e devolve o fatorial de um
// número inteiro positivo.
// Exemplo:
// 5! = 5 ×4 ×3 ×2 ×1 = 120

const prompt = require('prompt-sync')();

const NUM = lerNumerosPositivos("Digite um número natural para calcular o fatorial: ");
const fatorial = calculaFatorial(NUM);
console.log(`O fatorial de ${NUM} é: ${fatorial}`);

function lerNumerosPositivos(mensagem) {
	let num;
	do {
		num = Number(prompt(mensagem));
	} while (isNaN(num) || num <= 0);
	return Math.trunc(num);
}

function calculaFatorial(numero) {
	if (numero === 0) {
		return 1;
	}
	let fatorial = 1;
	for (let i = 1; i <= numero; i++) {
		fatorial *= i;
	}
	return fatorial;
}
