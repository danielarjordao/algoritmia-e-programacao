import auxiliar from './Auxiliar.js';
import definicoes from './Definicoes.js';
import Seguradora from './Seguradoras.js';
import Tomador from './Tomador.js';
import Segurado from './Segurados.js';

let proximoIdApolice = 1;

class Apolice {
	constructor(seguradoras = [], tomadores = [], segurados = []) {
		this.id = proximoIdApolice++;
		this.seguradoraId = auxiliar.selecionarOuCriar(seguradoras, "Seguradora", Seguradora);
		this.tomadorId = auxiliar.selecionarOuCriar(tomadores, "Tomador", Tomador);
		this.seguradoId = auxiliar.selecionarOuCriar(segurados, "Segurado", Segurado);
		this.tipoDeSeguroId = auxiliar.selecionarDaLista(definicoes.tiposDeSeguro, "Selecione o tipo de seguro:");
		this.valorSegurado = auxiliar.lerNumeroPositivo("Digite o valor segurado (em €): ");
		this.periodicidadePremioId = auxiliar.selecionarDaLista(definicoes.periodicidadesPremio, "Selecione a periodicidade do prêmio:");
		this.valorPremio = auxiliar.lerNumeroPositivo("Digite o valor do prêmio (mensal ou anual conforme escolha acima, em €): ");
		this.estadoDaApoliceId = auxiliar.selecionarDaLista(definicoes.estadosDaApolice, "Selecione o estado da apólice:");
	}
}

// Funções para gerenciar o contador de IDs
export function obterProximoId() {
	return proximoIdApolice;
}

export function definirProximoId(novoId) {
	proximoIdApolice = novoId;
}

export default Apolice;
