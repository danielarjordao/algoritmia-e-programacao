// Implemente um programa que
// recolha a idade de 10 pessoas
// e, no fim da execução, mostre a
// soma das idades superiores a
// 20 anos.

const prompt = require("prompt-sync")();

let somaIdades = 0;

for (let i = 1; i <= 10; i++) {
	let idade = Number(prompt(`Digite a idade da pessoa ${i}: `));
	if (idade > 20) {
		somaIdades += idade;
	}
}

console.log(`A soma das idades superiores a 20 anos é: ${somaIdades}`);


