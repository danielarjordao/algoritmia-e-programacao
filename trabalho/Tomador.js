import auxiliar from "./Auxiliar.js";

let proximoIdTomador = 1;

class Tomador {
	constructor() {
		this.id = proximoIdTomador++;
		this.nome = auxiliar.promptMensagem("Digite o nome do tomador: ");
		this.dataDeNascimento = auxiliar.lerData("Digite a data de nascimento do tomador (DD/MM/AAAA): ");
		this.idade = auxiliar.calcularAnosEntreDatas(this.dataDeNascimento, auxiliar.obterDataAtual());
		this.morada = auxiliar.promptMensagem("Digite o local de morada do tomador: ");
		this.contacto = auxiliar.promptMensagem("Digite o contacto do tomador (telefone/email): ");
	}
}

// Funções para gerenciar o contador de IDs
export function obterProximoId() {
	return proximoIdTomador;
}

export function definirProximoId(novoId) {
	proximoIdTomador = novoId;
}

export default Tomador;
