// Crie um programa que receba do utilizador dois valores inteiros e que consuma a
// função soma(n1, n2).

const prompt = require("prompt-sync")();

const NUM1 = lerNumero("Digite o primeiro número inteiro: ");
const NUM2 = lerNumero("Digite o segundo número inteiro: ");

const resultado = soma(NUM1, NUM2);
console.log(`A soma de ${NUM1} e ${NUM2} é: ${resultado}`);

function lerNumero(mensagem) {
	let num;
	do {
		num = Number(prompt(mensagem));
	} while (isNaN(num));
	return Math.trunc(num);
}

function soma(n1, n2) {
	return n1 + n2;
}

