import promptSync from "prompt-sync";
const prompt = promptSync();
import aluno from "./Aluno.js";

let alunos = [];
let id = 1;

do {
	let nome = prompt("Digite o nome do aluno: ");
	let nota = Number(prompt("Digite a nota do aluno: "));

	let novoAluno = new aluno(id, nome, nota);
	alunos.push(novoAluno);

	id++;
} while (prompt("Deseja adicionar outro aluno? (s/n): ").toLowerCase() === "s");

console.log("\nLista de Alunos:");
for (let i = 0; i < alunos.length; i++) {
	console.log(alunos[i]);
	console.log(`Aprovado? ${alunos[i].aprovado()}\n`);
}
