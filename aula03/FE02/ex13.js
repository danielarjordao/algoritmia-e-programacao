// Na Unidade Curricular de português foi definida a nota mínima de 8,5 valores
// para o primeiro teste e de 9 valores para o segundo. Foi também decidido que
// a nota final à unidade seria a média aritmética entre as notas desses dois
// testes. A aprovação de um aluno é apenas possível se a nota final (média
// entre os dois testes) for igual ou superior a 10 valores. Se o aluno tiver
// uma nota final igual ou superior a 17 valores terá que fazer defesa oral.
// Nestes casos, a nota final do aluno será sempre inserida diretamente pelo
// professor. Caso não compareça à defesa, o professor atribuirá a nota final
// de 17 valores. Desenvolva um algoritmo para resolver o problema e sugira uma
// implementação.

const prompt = require("prompt-sync")();

let num1 = Number(prompt("Digite a nota do primeiro teste: "));
let num2 = Number(prompt("Digite a nota do segundo teste: "));
let media = (num1 + num2) / 2;

if (isNaN(num1) || isNaN(num2)) {
  console.log("Entrada inválida. Por favor, insira números válidos.");
} else if (num1 < 8.5 || num2 < 9) {
	if (num1 < 8.5)
		console.log("Nota do primeiro teste inválida.");
	if (num2 < 9)
		console.log("Nota do segundo teste inválida.");
} else if (media < 10) {
  console.log(`Aluno reprovado. Nota final: ${media.toFixed(2)}`);
} else if (media < 17) {
  console.log(`Aluno aprovado. Nota final: ${media.toFixed(2)}`);
} else if (media >= 17) {
	let defesa = prompt("O aluno compareceu à defesa oral? (s/n): ");
	if (defesa === 's' || defesa === 'S') {
		let notaFinal = Number(prompt("Digite a nota final atribuída pelo professor: "));
		if (isNaN(notaFinal) || notaFinal < 0 || notaFinal > 20) {
			console.log("Entrada inválida. Por favor, insira uma nota válida entre 0 e 20.");
		} else {
			console.log(`Nota final atribuída: ${notaFinal}`);
		}
	} else if (defesa === 'n' || defesa === 'N') {
		console.log(`Aluno não compareceu à defesa oral. Nota final atribuída: 17`);
	} else {
		console.log("Entrada inválida. Por favor, responda com 's' ou 'n'.");
	}
}
