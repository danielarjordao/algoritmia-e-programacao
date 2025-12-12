// Escreva um algoritmo capaz de ler um número inteiro de 1 a 7, e apresentar na consola o dia da semana correspondente.

const prompt = require("prompt-sync")();

// Ler um número
let numero = Number(prompt("Digite um número: "));

// Condições do dia da semana
if (numero === 1) {
	console.log("Domingo");
} else if (numero === 2) {
	console.log("Segunda-feira");
} else if (numero === 3) {
	console.log("Terça-feira");
} else if (numero === 4) {
	console.log("Quarta-feira");
} else if (numero === 5) {
	console.log("Quinta-feira");
} else if (numero === 6) {
	console.log("Sexta-feira");
} else if (numero === 7) {
	console.log("Sábado");
} else {
	console.log("Dia inválido");
}
