// • Implementa a função:
// function classificacao(média)
//
// que devolve:
// • "Aprovado" se média ≥ 9.5
// • "Reprovado" caso contrário
// Regra:
// • a função não pode ler dados nem escrever na consola
// • apenas recebe valores e devolve um resultado

const prompt = require("prompt-sync")();

function classificacao(media) {
	if (media >= 9.5) {
		return "Aprovado";
	} else {
		return "Reprovado";
	}
}

const nota = Number(prompt("Digite a uma nota: "));
const resultado = classificacao(nota);
console.log(`Classificação: ${resultado}`);

