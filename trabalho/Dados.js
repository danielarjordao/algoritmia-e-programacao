import definicoes from './Definicoes.js';
import persistencia from './Persistencia.js';
import * as Apolice from './Apolice.js';
import * as Seguradora from './Seguradoras.js';
import * as Tomador from './Tomador.js';
import * as Segurado from './Segurados.js';

const seguradoras = [];
const tomadores = [];
const segurados = [];
const apolices = [];

const tiposDeSeguro = definicoes.tiposDeSeguro;
const estadosDaApolice = definicoes.estadosDaApolice;
const periodicidadesPremio = definicoes.periodicidadesPremio;

function salvar() {
	return persistencia.salvarDados({
		seguradoras,
		tomadores,
		segurados,
		apolices
	});
}

function carregar() {
	// Carregar dados do arquivo
	const dadosCarregados = persistencia.carregarDados();

	// Se houver dados carregados, popular os arrays e restaurar os contadores de IDs
	if (dadosCarregados) {
		// Limpar arrays atuais
		seguradoras.length = 0;
		tomadores.length = 0;
		segurados.length = 0;
		apolices.length = 0;

		// Carregar dados do arquivo
		// Usar push com spread operator para adicionar múltiplos itens
		seguradoras.push(...dadosCarregados.seguradoras);
		tomadores.push(...dadosCarregados.tomadores);
		segurados.push(...dadosCarregados.segurados);
		apolices.push(...dadosCarregados.apolices);

		// Restaurar contadores de IDs
		Seguradora.definirProximoId(dadosCarregados.proximoIdSeguradora);
		Tomador.definirProximoId(dadosCarregados.proximoIdTomador);
		Segurado.definirProximoId(dadosCarregados.proximoIdSegurado);
		Apolice.definirProximoId(dadosCarregados.proximoIdApolice);

		// Recalcular quantidades dos estados
		recalcularQuantidadesEstados();

		return dadosCarregados;
	}

	return null;
}

function recalcularQuantidadesEstados() {
	// Zerar quantidades
	estadosDaApolice[0].quantidade = 0; // Ativa
	estadosDaApolice[1].quantidade = 0; // Inativa

	// Contar apólices por estado
	for (let i = 0; i < apolices.length; i++) {
		if (apolices[i].estadoDaApoliceId === 1) {
			estadosDaApolice[0].quantidade++;
		} else {
			estadosDaApolice[1].quantidade++;
		}
	}
}

export default {
	seguradoras,
	tomadores,
	segurados,
	apolices,
	tiposDeSeguro,
	estadosDaApolice,
	periodicidadesPremio,
	salvar,
	carregar,
	recalcularQuantidadesEstados
};
