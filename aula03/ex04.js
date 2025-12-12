// Desenvolva um programa capaz de calcular o fatorial de um dado numero (ver formula seguinte).


const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número para calcular o fatorial: "));

if (isNaN(numero) || numero < 0) {
	console.log("Entrada inválida. Por favor, insira um número inteiro não negativo.");
} else {
	let fatorial = 1;
	for (let i = 1; i <= numero; i++) {
		fatorial *= i;
	}
	console.log(`O fatorial de ${numero} é: ${fatorial}`);
}
