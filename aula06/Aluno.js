class aluno {
	constructor(id, nome, nota) {
		this.id = id;
		this.nome = nome;
		this.nota = nota;
	}

	aprovado() {
		return this.nota >= 10;
	}
};

export default aluno;
