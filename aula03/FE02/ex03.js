// Implemente um programa que receba a nota de um aluno e se a nota for maior
// que 9,5 escreva no ecrã que o aluno ficou aprovado.

const prompt = require("prompt-sync")();

let nota = Number(prompt("Digite a nota do aluno: "));

if (isNaN(nota) || nota < 0 || nota > 20) {
	console.log("Valor inválido.");
} else if (nota > 9.5) {
	console.log("O aluno ficou aprovado.");
} else if (nota <= 9.5) {
	console.log("O aluno ficou reprovado.");
}
