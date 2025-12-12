// Escreva um algoritmo capaz de ler
// um número inteiro de 1 a 7, e
// apresentar na consola o dia da
// semana correspondente.

const prompt = require("prompt-sync")();

let diaNumero = Number(prompt("Digite um número de 1 a 7: "));
let diaNome;

switch (diaNumero) {
	case 1:
		diaNome = "Segunda-feira";
		break;
	case 2:
		diaNome = "Terça-feira";
		break;
	case 3:
		diaNome = "Quarta-feira";
		break;
	case 4:
		diaNome = "Quinta-feira";
		break;
	case 5:
		diaNome = "Sexta-feira";
		break;
	case 6:
		diaNome = "Sábado";
		break;
	case 7:
		diaNome = "Domingo";
		break;
	default:
		diaNome = "Número inválido. Por favor, insira um número entre 1 e 7.";
}

console.log(diaNome);
