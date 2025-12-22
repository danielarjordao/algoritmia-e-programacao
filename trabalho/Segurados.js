import auxiliar from "./Auxiliar.js";

let proximoIdSegurado = 1;

class Segurados {
	constructor() {
		this.id = proximoIdSegurado++;

		console.log("\nO segurado é:");
		console.log("1 - Pessoa");
		console.log("2 - Bem (propriedade)");
		const tipo = auxiliar.lerOpcao("Escolha uma opção: ", 1, 2);

		if (tipo === 1) {
			this.tipo = "Pessoa";
			this.nome = auxiliar.promptMensagem("Digite o nome do segurado: ");
			this.dataDeNascimento = auxiliar.lerData("Digite a data de nascimento do segurado (DD/MM/AAAA): ");
			this.idade = auxiliar.calcularAnosEntreDatas(this.dataDeNascimento, auxiliar.obterDataAtual());
			this.morada = auxiliar.promptMensagem("Digite o local de morada do segurado: ");
			this.contacto = auxiliar.promptMensagem("Digite o contacto do segurado (telefone/email): ");
		} else {
			this.tipo = "Bem";
			this.descricao = auxiliar.promptMensagem("Digite a descrição do bem segurado: ");
			this.localizacao = auxiliar.promptMensagem("Digite a localização do bem: ");
		}
	}
}

// Funções para gerenciar o contador de IDs
export function obterProximoId() {
	return proximoIdSegurado;
}

export function definirProximoId(novoId) {
	proximoIdSegurado = novoId;
}

export default Segurados;
