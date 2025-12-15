// Crie a função media(n1,n2,n3) que tenha a capacidade de calcular a media de 3
// valores indicados. Consuma essa função num programa que, perante a inserção dos 3
// valores pelo utilizador, indique a respetiva média.

const prompt = require("prompt-sync")();

let somaNumeros = 0;
const NUM1 = lerNumero("Digite o primeiro número: ");
somaNumeros = soma(somaNumeros, NUM1);
const NUM2 = lerNumero("Digite o segundo número: ");
somaNumeros = soma(somaNumeros, NUM2);
const NUM3 = lerNumero("Digite o terceiro número: ");
somaNumeros = soma(somaNumeros, NUM3);

const DIVISOR = 3;

const resultado = divisao(somaNumeros, DIVISOR);
console.log(`A média de ${NUM1}, ${NUM2} e ${NUM3} é: ${resultado}`);

function lerNumero(mensagem) {
	let num;
	do {
		num = Number(prompt(mensagem));
	} while (isNaN(num));
	return num;
}

function soma(n1, n2) {
	return n1 + n2;
}

function divisao(dividendo, divisor) {
	if (divisor === 0) {
		return 0;
	}
	return dividendo / divisor;
}
