// Crie a função media(n1,n2,n3) que tenha a capacidade de calcular a media de 3
// valores indicados. Consuma essa função num programa que, perante a inserção dos 3
// valores pelo utilizador, indique a respetiva média.

const prompt = require("prompt-sync")();

const NUM1 = lerNumero("Digite o primeiro número: ");
const NUM2 = lerNumero("Digite o segundo número: ");
const NUM3 = lerNumero("Digite o terceiro número: ");

const resultado = media(NUM1, NUM2, NUM3);
console.log(`A média de ${NUM1}, ${NUM2} e ${NUM3} é: ${resultado}`);

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

function divisao(dividendo, divisor) {
	if (divisor === 0) {
		return 0;
	}
	return dividendo / divisor;
}

function media(n1, n2, n3) {
	const somaTotal = soma(soma(n1, n2), n3);
	return divisao(somaTotal, 3);
}
