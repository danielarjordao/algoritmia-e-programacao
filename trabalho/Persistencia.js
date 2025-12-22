import fs from 'fs';
import * as Apolice from './Apolice.js';
import * as Seguradora from './Seguradoras.js';
import * as Tomador from './Tomador.js';
import * as Segurado from './Segurados.js';

const ARQUIVO_DADOS = './dados.json';

function salvarDados(dados) {
	// Preparar os dados para salvar
	const dadosParaSalvar = {
		seguradoras: dados.seguradoras,
		tomadores: dados.tomadores,
		segurados: dados.segurados,
		apolices: dados.apolices,
		proximoIdSeguradora: Seguradora.obterProximoId(),
		proximoIdTomador: Tomador.obterProximoId(),
		proximoIdSegurado: Segurado.obterProximoId(),
		proximoIdApolice: Apolice.obterProximoId()
	};

	// Converter para JSON formatado
	// JSON.stringify(objeto a converter, função de replacer (null se não usar), número de espaços para indentação)
	const json = JSON.stringify(dadosParaSalvar, null, 2);

	// Escrever no arquivo
	// fs.writeFile(arquivo em que será salvo, dados a salvar, codificação)
	fs.writeFileSync(ARQUIVO_DADOS, json, 'utf8');

	console.log('Dados salvos com sucesso!');
}

function carregarDados() {
	// Verifica se o arquivo existe
	// fs.existsSync(arquivo a verificar)
	if (!fs.existsSync(ARQUIVO_DADOS)) {
		console.log('Arquivo de dados não encontrado. Iniciando com dados vazios.');
		return null;
	}

	// Ler o arquivo
	// fs.readFileSync(arquivo a ler, codificação)
	const json = fs.readFileSync(ARQUIVO_DADOS, 'utf8');

	// Converter de JSON para objeto JavaScript
	// JSON.parse(string JSON a converter)
	const dadosCarregados = JSON.parse(json);

	console.log('Dados carregados com sucesso!');
	return dadosCarregados;
}

function arquivoExiste() {
	// Verifica se o arquivo existe
	// fs.existsSync(arquivo a verificar)
	return fs.existsSync(ARQUIVO_DADOS);
}

function limparDados() {
	if (fs.existsSync(ARQUIVO_DADOS)) {
		// Remover o arquivo
		// fs.unlinkSync(arquivo a remover)
		fs.unlinkSync(ARQUIVO_DADOS);
		console.log('Arquivo de dados removido com sucesso!');
	} else {
		console.log('Arquivo de dados não existe.');
	}
}

export default {
	salvarDados,
	carregarDados,
	arquivoExiste,
	limparDados
};
