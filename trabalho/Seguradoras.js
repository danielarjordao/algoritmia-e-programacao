import auxiliar from "./Auxiliar.js";

let proximoIdSeguradora = 1;

class Seguradora {
	constructor() {
		this.id = proximoIdSeguradora++;
		this.nome = auxiliar.promptMensagem("Digite o nome da seguradora: ");
	}
}

// Funções para gerenciar o contador de IDs
export function obterProximoId() {
	return proximoIdSeguradora;
}

export function definirProximoId(novoId) {
	proximoIdSeguradora = novoId;
}

export default Seguradora;
