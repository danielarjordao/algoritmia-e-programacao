const aluno = {
	nome: "Ana",
	numero: 12345,
	nota: 14,
	aprovado() {
		return this.nota >= 10;
	}
};

console.log(aluno.nome);
console.log(aluno.numero);
console.log(aluno.nota);
console.log(`Aprovado? ${aluno.aprovado()}`);
console.log(aluno);

const alunos = [
	{nome: "Bruno",
	nota: 8,},
	{nome: "Carla",
	nota: 16,},
];

console.log(alunos[0].nome);
console.log(`Aprovado? ${alunos[0].nota >= 10}`);
console.log(alunos[1].nome);
console.log(`Aprovado? ${alunos[1].nota >= 10}`);

console.log("Iterando sobre a lista de alunos:");
for (const aluno of alunos) {
	if (aluno.nota >= 10) {
		console.log(`${aluno.nome} aprovado.`);
	}
}
