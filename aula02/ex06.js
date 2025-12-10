// Escreva um algoritmo capaz de ler um número inteiro de 1 a 7, e apresentar na consola o dia da semana correspondente.

const prompt = require("prompt-sync")();

// Ler um número
let numero = Number(prompt("Digite um número: "));

// Condições do dia da semana usando switch-case
switch (numero) {
	case 1:
		console.log("Domingo");
		break;
	case 2:
		console.log("Segunda-feira");
		break;
	case 3:
		console.log("Terça-feira");
		break;
	case 4:
		console.log("Quarta-feira");
		break;
	case 5:
		console.log("Quinta-feira");
		break;
	case 6:
		console.log("Sexta-feira");
		break;
	case 7:
		console.log("Sábado");
		break;
	default:
		console.log("Dia inválido");
		break;
}
