import auxiliar from "./Auxiliar.js";

class Segurados {
	constructor() {
		this.nome = auxiliar.promptMensagem("Digite o nome do segurado: ");
		this.morada = auxiliar.promptMensagem("Digite o local de morada do segurado: ");
	}
}

export default Segurados;
