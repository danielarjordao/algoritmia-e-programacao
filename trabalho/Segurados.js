import auxiliar from "./Auxiliar.js";

class Segurados {
	constructor() {
		this.nome = auxiliar.promptMensagem("Digite o nome do segurado: ");
		this.dataDeNascimento = auxiliar.lerData("Digite a data de nascimento do segurado (DD/MM/AAAA): ");
		this.idade = auxiliar.calcularAnosEntreDatas(this.dataDeNascimento, auxiliar.obterDataAtual());
		this.morada = auxiliar.promptMensagem("Digite o local de morada do segurado: ");
	}
}

export default Segurados;
