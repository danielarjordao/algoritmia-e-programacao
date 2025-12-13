// Aproveitando o facto de um programa conseguir gerar números aleatórios, é
// possível criar um jogo para adivinhar um desses números. Não esqueça de dar
// dicas ao utilizador para saber se o número é maior ou menor.
// Faça o desenvolvimento no sentido de ter os seguintes 3 níveis de
// dificuldade:

// Nivel Iniciante: Intervalo 1:10, 3 tentativas
// Nivel Intermédio: Intervalo 1:30, 10 tentativas
// Nivel Avançado: Intervalo 1:50, 15 tentativas

const prompt = require("prompt-sync")();

console.log("Bem-vindo ao jogo de adivinhação!");
console.log("Escolha um nível de dificuldade:");
console.log("1 - Iniciante");
console.log("2 - Intermédio");
console.log("3 - Avançado");

let nivel = Number(prompt("Digite o número do nível escolhido: "));

let maxNumero = 0;
let tentativas = 0;

switch (nivel) {
	case 1:
		maxNumero = 10;
		tentativas = 3;
		break;
	case 2:
		maxNumero = 30;
		tentativas = 10;
		break;
	case 3:
		maxNumero = 50;
		tentativas = 15;
		break;
	default:
		console.log("Nível inválido. Encerrando o jogo.");
}

if (maxNumero > 0) {
	// Math.random() gera um número entre 0 (inclusivo) e 1 (exclusivo)
	// Multiplicando por maxNumero e truncando, obtemos um número entre 0 e maxNumero-1
	// Adicionando 1, obtemos um número entre 1 e maxNumero
	const numero = Math.trunc(Math.random() * maxNumero) + 1;
	let acertou = false;

	console.log(`Tente adivinhar o número entre 1 e ${maxNumero}. Você tem ${tentativas} tentativas.`);

	for (let i = 0; i < tentativas; i++) {
		let palpite = Number(prompt(`Tentativa ${i + 1}: `));

		if (palpite === numero) {
			console.log("Parabéns! Você acertou o número!");
			acertou = true;
			break;
		} else if (palpite < numero) {
			console.log("O número é maior.");
		} else {
			console.log("O número é menor.");
		}
	}

	if (!acertou) {
		console.log(`Suas tentativas acabaram. O número era ${numero}.`);
	}
}
