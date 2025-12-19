import auxiliar from "./Auxiliar.js";

class Tomador {
	constructor() {
		this.nome = auxiliar.promptMensagem("Digite o nome do tomador: ");
		this.dataDeNascimento = auxiliar.lerData("Digite a data de nascimento do tomador (DD/MM/AAAA): ");
		this.idade = auxiliar.calcularAnosEntreDatas(this.dataDeNascimento, auxiliar.obterDataAtual());
		this.morada = auxiliar.promptMensagem("Digite o local de morada do tomador: ");
	}
}

export default Tomador;
