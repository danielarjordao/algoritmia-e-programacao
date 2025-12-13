// Um número palíndromo é um número que pode ser lido tanto da esquerda para a
// direita,  como  da  direita  para  a  esquerda.  Desenvolva  um  algoritmo  que
// verifique,  a  partir  de  um  determinados  conjunto  de  números  inserido  pelo
// utilizador, quais são os números que são e não são palíndromos.

const prompt = require("prompt-sync")();

let num = Number(prompt("Digite um número inteiro: "));

// Verificar se a entrada é um número válido
if (isNaN(num)) {
	console.log("Por favor, insira um número inteiro válido.");
} else {
	// Verificar se o número é negativo
	let sinal = 1;
	if (num < 0) {
		sinal = -1;
		num = -num;
	}
	// Garantir que o número é um inteiro
	num = Math.trunc(num);

	let invertido = 0;
	let original = num; // Armazenar o número original para comparação

	// Inverter o número
	while (num > 0) {
		// Pega o último dígito
		let digito = num % 10;
		// Adiciona ao número invertido
		invertido = invertido * 10 + digito;
		// Remove o último dígito do número original
		num = Math.trunc(num / 10);
	}
	// Recuperar o sinal original
	invertido = invertido * sinal;

	// Verificar se é palíndromo
	if (original * sinal === invertido) {
		console.log(`O número ${original * sinal} é um palíndromo.`);
	} else {
		console.log(`O número ${original * sinal} não é um palíndromo.`);
	}
}
