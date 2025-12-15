//  A Associação de estudantes de Escola Secundária “Só Crânios” está a organizar um concurso de matemática com o objetivo
// de encontrar os 3 melhores alunos à disciplina. A equipa organizadora do concurso necessita de uma aplicação que faça as
// inscrições de alunos, através da recolha do nome e da nota de 11º ano a matemática. O número de alunos inscritos no
// concurso nunca poderá ser inferior a 5 e superior a 10. No entanto, as inscrições terminam se a média das notas dos alunos
// inscritos atingir os 18 valores, desde que cumprido o preceito do mínimo de 5 alunos inscritos. Caso um candidato tenha nota
// inferior a 14 valores, a sua inscrição é automaticamente recusada.

const prompt = require("prompt-sync")();

const MAX = 10;
const MIN = 5;
let nAlunos = 0;
let media = 0;
let somaNotas = 0;
let primeiroLugar = "";
let segundoLugar = "";
let terceiroLugar = "";
let notaPrimeiro = -1;
let notaSegundo = -1;
let notaTerceiro = -1;

while (nAlunos < MAX) {
	let nome = prompt("Digite o nome: ");
	let nota = Number(prompt("Digite a nota: "));
	if ((nota < 0 && nota > 20) || isNaN(nota)) {
		console.log("Nota inválida.");
		continue;
	} else if (nota < 14) {
		console.log("Inscrição recusada.");
		continue;
	}
	if (nota > notaPrimeiro) {
		notaTerceiro = notaSegundo;
		terceiroLugar = segundoLugar;
		notaSegundo = notaPrimeiro;
		segundoLugar = primeiroLugar;
		notaPrimeiro = nota;
		primeiroLugar = `Aluno: ${nome} | Nota: ${nota}`;
	} else if (nota > notaSegundo) {
		notaTerceiro = notaSegundo;
		terceiroLugar = segundoLugar;
		notaSegundo = nota;
		segundoLugar = `Aluno: ${nome} | Nota: ${nota}`;
	} else if (nota > terceiroLugar) {
		notaTerceiro = nota;
		terceiroLugar = `Aluno: ${nome} | Nota: ${nota}`;
	}
	nAlunos++;
	somaNotas += nota;
	media = somaNotas / nAlunos;
	if (nAlunos >= MIN && media >= 18) {
		console.log("Média atingida, inscrições finalizadas.");
		break;
	}
}

if (nAlunos > 0) {
	console.log("MELHORES ALUNOS");
	console.log(`Primeiro lugar: ${primeiroLugar}.`);
	console.log(`Segundo lugar: ${segundoLugar}.`);
	console.log(`Terceiro lugar: ${terceiroLugar}.`);
}
