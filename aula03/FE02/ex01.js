// Implemente um programa capaz de ler a idade de uma pessoa e que incremente
// 10 anos a essa idade no caso de ser maior que 30 anos.

const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite a sua idade: "));
let novaIdade = idade;

if (isNaN(idade) || idade < 0) {
	console.log("Valor inválido.");
} else if (idade > 30) {
	novaIdade = idade + 10;
	console.log(`Sua nova idade, após o incremento de 10 anos, é ${novaIdade}.`);
} else if (idade <= 30) {
	console.log(`Sua idade permanece ${idade}.`);
}
