import auxiliar from './Auxiliar.js';
import definicoes from './Definicoes.js';

class Apolice {
	constructor() {
		this.seguradora = auxiliar.promptMensagem("Digite o nome da seguradora: ");
		this.tomador = auxiliar.promptMensagem("Digite o nome do tomador do seguro: ");
		this.segurado = auxiliar.promptMensagem("Digite o nome do segurado: ");
		this.tipoDeSeguro = auxiliar.solicitarMenu(definicoes.tiposDeSeguro, "Selecione o tipo de seguro:");
		this.valorSegurado = auxiliar.lerNumeroPositivo("Digite o valor segurado (em €): ");
		this.premioAPagarAnual = auxiliar.lerNumeroPositivo("Digite o prêmio a pagar anual (em €): ");
		this.estadoDaApolice = auxiliar.solicitarMenu(definicoes.estadosDaApolice, "Selecione o estado da apólice:");
	}
}

export default Apolice;
