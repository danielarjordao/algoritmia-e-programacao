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

function maiorIndice(numeros) {
	if (numeros.length === 0) {
		return -1;
	}
	let index = 0;
	for (let i = 1; i < numeros.length; i++) {
		if (numeros[i] > numeros[index]) {
			index = i;
		}
	}
	return index;
}

console.log(`O maior número do numeros é ${numeros[maiorIndice(numeros)]}.`);

function menorIndice(numeros) {
	if (numeros.length === 0) {
		return -1;
	}
	let index = 0;
	for (let i = 1; i < numeros.length; i++) {
		if (numeros[i] < numeros[index]) {
			index = i;
		}
	}
	return index;
}

console.log(`O menor número do numeros é ${numeros[menorIndice(numeros)]}.`);

function somaArray(numeros) {
	let soma = 0;
	for (let n of numeros) {
		soma += n;
	}
	return soma;
}

console.log(`A soma dos elementos do numeros é: ${somaArray(numeros)}`);

function mediaArray(numeros) {
	if (numeros.length === 0) {
		return 0;
	}
	return somaArray(numeros) / numeros.length;
}

console.log(`A média dos elementos do numeros é: ${mediaArray(numeros)}`);
