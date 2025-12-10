// Escreva um algorítmo capaz de ler um número inteiro e verificar se este é par ou impar.

const prompt = require("prompt-sync")();

// Ler um número
let numero = Number(prompt("Digite um número: "));

// Verificar se este número é par ou impar e imprimir
if ((numero % 2) === 0) {
	console.log(`O número ${numero} é par`);
} else {
	console.log(`O número ${numero} é impar`);
}
