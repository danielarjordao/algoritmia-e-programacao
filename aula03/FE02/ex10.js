// Para dar sangue é necessário ter entre 18 e 67 anos. Faça um programa que
// pergunte a idade de uma pessoa e diga se ela pode dar sangue ou não.

const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite a sua idade: "));

if (isNaN(idade) || idade < 0) {
	console.log("Valor inválido.");
} else if (idade >= 18 && idade <= 67) {
	console.log("Você pode dar sangue.");
} else if (idade < 18 || idade > 67) {
	console.log("Você não pode dar sangue.");
}
