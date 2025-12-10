// Escreva um algoritmo capaz de ler um número inteiro, que lhe incremente 1 no caso deste ser devisível por 3.

const prompt = require("prompt-sync")();

// Ler o número
let numero = Number(prompt("Digite um número: "));

// Verificar se é divisível por 3
if ((numero % 3) === 0) {
	numero++;
}

// Escrever o resultado
console.log(`O resultado é ${numero}`);
