const prompt = require('prompt-sync')();

let numeros = [];

// Ler até 10 números ou até digitar "sair"
do {
	let entrada = prompt("Digite um número (ou digite 'sair' para encerrar): ");
	
	// Verificar se o usuário quer sair
	if (entrada.toLowerCase() === "sair") {
		break;
	}
	
	let num = Number(entrada);
	
	if (isNaN(num)) {
		console.log("Entrada inválida. Por favor, digite um número ou 'sair'.");
		continue;
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

function pesquisaNumero(numeros, numero) {
	let i = 0;

	while (i < numeros.length && numeros[i] !== numero) {
		i++;
	}

	if (i === numeros.length) {
		return -1;
	}

	return i;
}

const numeroParaPesquisar = lerNumeros("Digite o número que deseja pesquisar: ");
const indice = pesquisaNumero(numeros, numeroParaPesquisar);

if (indice === -1) {
	console.log(`O número ${numeroParaPesquisar} não foi encontrado na lista.`);
} else {
	console.log(`O número ${numeroParaPesquisar} foi encontrado no índice ${indice}.`);
}
