const prompt = require('prompt-sync')();

let numeros = [];

do {
	let num = Number(prompt("Digite um número (ou digite sair para encerrar): "));
	if (isNaN(num)) {
		if (num.toLowerCase() === "sair") {
			break;
		} else {
			console.log("Entrada inválida. Por favor, digite um número ou 'sair'.");
			continue;
		}
	}
	numeros.push(num);
} while (numeros.length < 10);

function lerNumeros(mensagem) {
	let num;
	do {
		num = Number(prompt(mensagem));
	} while (isNaN(num));
	return Math.trunc(num);
}

function contadorNumero(numeros, numero) {
	let i = 0;
	let contador = 0;

	while (i < numeros.length) {
		if (numeros[i] === numero) {
			contador++;
		}
		i++;
	}

	if (contador === 0) {
		return -1;
	}

	return contador;
}

const numeroParaPesquisar = lerNumeros("Digite o número que deseja pesquisar: ");
const contador = contadorNumero(numeros, numeroParaPesquisar);
if (contador === -1) {
	console.log(`O número ${numeroParaPesquisar} não foi encontrado na lista.`);
} else {
	console.log(`O número ${numeroParaPesquisar} foi encontrado ${contador} vezes na lista.`);
}
