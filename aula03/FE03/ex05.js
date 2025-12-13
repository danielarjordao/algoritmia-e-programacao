// Crie  um  programa  que  leia  um  numero  inteiro  e  que  o  mostre  na  consola
// invertido (e.g. 1234 => 4321)

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

	console.log(`Número invertido: ${invertido}`);
}
