// Uma empresa pretende cifrar uma sequência de 4 dígitos (DigDigDigDig) segundo as seguintes
// regras:
// •inverter os dígitos do número;
// •substituir cada dígito Dig por (Dig + 8) mod 10.
// Implemente:
// •uma função que receba um número de 4 dígitos e devolva o valor cifrado;
// •uma função que receba um número cifrado e o decifre, devolvendo o valor original;
// •um pequeno menu de escolha (por exemplo com prompt e switch) que permita ao
// utilizador cifrar ou decifrar um número.

const prompt = require('prompt-sync')();

let escolha;

do {
	console.log("Escolha uma opção:");
	console.log("1 - Cifrar um número de 4 dígitos");
	console.log("2 - Decifrar um número de 4 dígitos");
	console.log("3 - Sair");
	escolha = Number(prompt("Opção: "));
} while ( escolha < 1 || escolha > 3 );

switch (escolha) {
	case 1:
		const numParaCifrar = lerNumeroDe4Digitos("Digite um número de 4 dígitos para cifrar: ");
		const numeroCifrado = cifrarNumero(numParaCifrar);
		console.log(`Número cifrado: ${numeroCifrado}`);
		break;
	case 2:
		const numParaDecifrar = lerNumeroDe4Digitos("Digite um número de 4 dígitos para decifrar: ");
		const numeroDecifrado = decifrarNumero(numParaDecifrar);
		console.log(`Número decifrado: ${numeroDecifrado}`);
		break;
	case 3:
		console.log("Sair");
		break;
	default:
		console.log("Opção inválida.");
}

function lerNumeroDe4Digitos(mensagem) {
	let num;
	do {
		num = Number(prompt(mensagem));
	} while (isNaN(num) || num < 0 || num > 9999);
	return Math.trunc(num);
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

function cifrarNumero(numero) {
	let numeroInvertido = inverteNumero(numero);
	let numeroCifrado = 0;

	for (let i = 0; i < 4; i++) {
		const digito = numeroInvertido % 10;
		const digitoCifrado = (digito + 8) % 10;
		numeroCifrado = (numeroCifrado * 10) + digitoCifrado;
		numeroInvertido = Math.trunc(numeroInvertido / 10);
	}
	return numeroCifrado;
}

function decifrarNumero(numero) {
	let numeroInvertido = inverteNumero(numero);
	let numeroDecifrado = 0;

	for (let i = 0; i < 4; i++) {
		const digito = numeroInvertido % 10;
		const digitoDecifrado = (digito + 2) % 10;
		numeroDecifrado = (numeroDecifrado * 10) + digitoDecifrado;
		numeroInvertido = Math.trunc(numeroInvertido / 10);
	}
	return numeroDecifrado;
}
