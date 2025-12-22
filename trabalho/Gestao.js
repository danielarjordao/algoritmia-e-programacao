import dados from './Dados.js';
import auxiliar from './Auxiliar.js';
import Seguradora from './Seguradoras.js';
import Tomador from './Tomador.js';
import Segurado from './Segurados.js';
import Apolice from './Apolice.js';

// FUNÇÕES AUXILIARES DE REMOÇÃO

function buscarIndice(array, id) {
	for (let i = 0; i < array.length; i++) {
		if (array[i].id === id) {
			return i;
		}
	}
	return -1;
}

function temDependencias(id, array, propriedade) {
	for (let i = 0; i < array.length; i++) {
		if (array[i][propriedade] === id) {
			return true;
		}
	}
	return false;
}

function incrementarEstado(estadoId) {
	if (estadoId === 1) {
		dados.estadosDaApolice[0].quantidade++;
	} else {
		dados.estadosDaApolice[1].quantidade++;
	}
}

function decrementarEstado(estadoId) {
	if (estadoId === 1) {
		dados.estadosDaApolice[0].quantidade--;
	} else {
		dados.estadosDaApolice[1].quantidade--;
	}
}

// SEGURADORAS - CRUD

function inserirSeguradora() {
	const seguradora = new Seguradora();
	dados.seguradoras.push(seguradora);
	console.log(`\nSeguradora "${seguradora.nome}" adicionada com sucesso! (ID: ${seguradora.id})`);
}

function listarSeguradoras() {
	if (dados.seguradoras.length === 0) {
		console.log("\nNenhuma seguradora cadastrada.");
		return;
	}

	console.log("\nSEGURADORAS:");
	for (let i = 0; i < dados.seguradoras.length; i++) {
		console.log(`ID: ${dados.seguradoras[i].id} | Nome: ${dados.seguradoras[i].nome}`);
	}
}

function atualizarSeguradora() {
	if (dados.seguradoras.length === 0) {
		console.log("\nNenhuma seguradora cadastrada.");
		return;
	}

	const id = auxiliar.selecionarDaLista(dados.seguradoras, "Selecione a seguradora para atualizar:");
	if (id === null) return;

	const seguradora = dados.seguradoras.find(s => s.id === id);
	console.log(`\nAtualizando: ${seguradora.nome}`);

	seguradora.nome = auxiliar.promptMensagem("Digite o novo nome: ");
	console.log("Seguradora atualizada com sucesso!");
}

function removerSeguradora() {
	if (dados.seguradoras.length === 0) {
		console.log("\nNenhuma seguradora cadastrada.");
		return;
	}

	const id = auxiliar.selecionarDaLista(dados.seguradoras, "Selecione a seguradora para remover:");
	if (id === null) return;

	// VALIDAR INTEGRIDADE: verificar se há apólices com esta seguradora
	if (temDependencias(id, dados.apolices, 'seguradoraId')) {
		console.log("\nERRO: Não é possível remover esta seguradora pois existem apólices associadas a ela.");
		return;
	}

	const index = buscarIndice(dados.seguradoras, id);
	const nome = dados.seguradoras[index].nome;
	dados.seguradoras.splice(index, 1);
	console.log(`Seguradora "${nome}" removida com sucesso!`);
}

// TOMADORES - CRUD

function inserirTomador() {
	const tomador = new Tomador();
	dados.tomadores.push(tomador);
	console.log(`\nTomador "${tomador.nome}" adicionado com sucesso! (ID: ${tomador.id})`);
}

function listarTomadores() {
	if (dados.tomadores.length === 0) {
		console.log("\nNenhum tomador cadastrado.");
		return;
	}

	console.log("\nTOMADORES:");
	for (let i = 0; i < dados.tomadores.length; i++) {
		console.log(`ID: ${dados.tomadores[i].id} | Nome: ${dados.tomadores[i].nome} | Idade: ${dados.tomadores[i].idade} anos | Morada: ${dados.tomadores[i].morada} | Contacto: ${dados.tomadores[i].contacto}`);
	}
}

function atualizarTomador() {
	if (dados.tomadores.length === 0) {
		console.log("\nNenhum tomador cadastrado.");
		return;
	}

	const id = auxiliar.selecionarDaLista(dados.tomadores, "Selecione o tomador para atualizar:");
	if (id === null) return;

	const tomador = dados.tomadores.find(t => t.id === id);
	console.log(`\nAtualizando: ${tomador.nome}`);

	let continuar = true;
	while (continuar) {
		console.log("\nQual campo deseja atualizar?");
		console.log("1. Nome");
		console.log("2. Data de Nascimento");
		console.log("3. Morada");
		console.log("4. Contacto");
		console.log("5. Atualizar todos os campos");
		console.log("0. Concluir atualiza\u00e7\u00e3o");

		const opcao = auxiliar.lerNumero("Escolha uma op\u00e7\u00e3o: ");

		switch (opcao) {
			case 1:
				tomador.nome = auxiliar.promptMensagem("Digite o novo nome: ");
				console.log("Nome atualizado!");
				break;
			case 2:
				tomador.dataDeNascimento = auxiliar.lerData("Digite a nova data de nascimento (DD/MM/AAAA): ");
				tomador.idade = auxiliar.calcularAnosEntreDatas(tomador.dataDeNascimento, auxiliar.obterDataAtual());
				console.log("Data de nascimento atualizada!");
				break;
			case 3:
				tomador.morada = auxiliar.promptMensagem("Digite a nova morada: ");
				console.log("Morada atualizada!");
				break;
			case 4:
				tomador.contacto = auxiliar.promptMensagem("Digite o novo contacto: ");
				console.log("Contacto atualizado!");
				break;
			case 5:
				tomador.nome = auxiliar.promptMensagem("Digite o novo nome: ");
				tomador.dataDeNascimento = auxiliar.lerData("Digite a nova data de nascimento (DD/MM/AAAA): ");
				tomador.idade = auxiliar.calcularAnosEntreDatas(tomador.dataDeNascimento, auxiliar.obterDataAtual());
				tomador.morada = auxiliar.promptMensagem("Digite a nova morada: ");
				tomador.contacto = auxiliar.promptMensagem("Digite o novo contacto: ");
				console.log("Todos os campos atualizados!");
				continuar = false;
				break;
			case 0:
				continuar = false;
				break;
			default:
				console.log("Op\u00e7\u00e3o inv\u00e1lida!");
		}
	}

	console.log("Tomador atualizado com sucesso!");
}

function removerTomador() {
	if (dados.tomadores.length === 0) {
		console.log("\nNenhum tomador cadastrado.");
		return;
	}

	const id = auxiliar.selecionarDaLista(dados.tomadores, "Selecione o tomador para remover:");
	if (id === null) return;

	// Verificar se há apólices com este tomador
	if (temDependencias(id, dados.apolices, 'tomadorId')) {
		console.log("\nERRO: Não é possível remover este tomador pois existem apólices associadas a ele.");
		return;
	}

	const index = buscarIndice(dados.tomadores, id);
	const nome = dados.tomadores[index].nome;
	dados.tomadores.splice(index, 1);
	console.log(`Tomador "${nome}" removido com sucesso!`);
}

// SEGURADOS - CRUD

function inserirSegurado() {
	const segurado = new Segurado();
	dados.segurados.push(segurado);
	let identificacao;
	if (segurado.tipo === "Pessoa") {
		identificacao = segurado.nome;
	} else {
		identificacao = segurado.descricao;
	}
	console.log(`\nSegurado "${identificacao}" adicionado com sucesso! (ID: ${segurado.id})`);
}

function listarSegurados() {
	if (dados.segurados.length === 0) {
		console.log("\nNenhum segurado cadastrado.");
		return;
	}

	console.log("\nSEGURADOS:");
	for (let i = 0; i < dados.segurados.length; i++) {
		const s = dados.segurados[i];
		if (s.tipo === "Pessoa") {
			console.log(`ID: ${s.id} | Tipo: Pessoa | Nome: ${s.nome} | Idade: ${s.idade} anos | Morada: ${s.morada} | Contacto: ${s.contacto}`);
		} else {
			console.log(`ID: ${s.id} | Tipo: Bem | Descrição: ${s.descricao} | Localização: ${s.localizacao}`);
		}
	}
}

function atualizarSegurado() {
	if (dados.segurados.length === 0) {
		console.log("\nNenhum segurado cadastrado.");
		return;
	}

	const id = auxiliar.selecionarDaLista(dados.segurados, "Selecione o segurado para atualizar:");
	if (id === null) return;

	const segurado = dados.segurados.find(s => s.id === id);
	let identificacao;
	if (segurado.tipo === "Pessoa") {
		identificacao = segurado.nome;
	} else {
		identificacao = segurado.descricao;
	}
	console.log(`\nAtualizando: ${identificacao}`);

	let continuar = true;
	while (continuar) {
		console.log("\nQual campo deseja atualizar?");

		if (segurado.tipo === "Pessoa") {
			console.log("1. Nome");
			console.log("2. Data de Nascimento");
			console.log("3. Morada");
			console.log("4. Contacto");
			console.log("5. Atualizar todos os campos");
		} else {
			console.log("1. Descrição");
			console.log("2. Localização");
			console.log("3. Atualizar todos os campos");
		}
		console.log("0. Concluir atualiza\u00e7\u00e3o");

		const opcao = auxiliar.lerNumero("Escolha uma op\u00e7\u00e3o: ");

		if (segurado.tipo === "Pessoa") {
			switch (opcao) {
				case 1:
					segurado.nome = auxiliar.promptMensagem("Digite o novo nome: ");
				console.log("Nome atualizado!");
				break;
				case 2:
					segurado.dataDeNascimento = auxiliar.lerData("Digite a nova data de nascimento (DD/MM/AAAA): ");
					segurado.idade = auxiliar.calcularAnosEntreDatas(segurado.dataDeNascimento, auxiliar.obterDataAtual());
					console.log("Data de nascimento atualizada!");
					break;
				case 3:
					segurado.morada = auxiliar.promptMensagem("Digite a nova morada: ");
					console.log("Morada atualizada!");
					break;
				case 4:
					segurado.contacto = auxiliar.promptMensagem("Digite o novo contacto: ");
					console.log("Contacto atualizado!");
					break;
				case 5:
					segurado.nome = auxiliar.promptMensagem("Digite o novo nome: ");
					segurado.dataDeNascimento = auxiliar.lerData("Digite a nova data de nascimento (DD/MM/AAAA): ");
					segurado.idade = auxiliar.calcularAnosEntreDatas(segurado.dataDeNascimento, auxiliar.obterDataAtual());
					segurado.morada = auxiliar.promptMensagem("Digite a nova morada: ");
					segurado.contacto = auxiliar.promptMensagem("Digite o novo contacto: ");
					console.log("Todos os campos atualizados!");
					continuar = false;
					break;
				case 0:
					continuar = false;
					break;
				default:
					console.log("Op\u00e7\u00e3o inv\u00e1lida!");
			}
		} else {
			switch (opcao) {
				case 1:
					segurado.descricao = auxiliar.promptMensagem("Digite a nova descrição: ");
					console.log("Descrição atualizada!");
					break;
				case 2:
					segurado.localizacao = auxiliar.promptMensagem("Digite a nova localização: ");
					console.log("Localização atualizada!");
					break;
				case 3:
					segurado.descricao = auxiliar.promptMensagem("Digite a nova descrição: ");
					segurado.localizacao = auxiliar.promptMensagem("Digite a nova localização: ");
					console.log("Todos os campos atualizados!");
					continuar = false;
					break;
				case 0:
					continuar = false;
					break;
				default:
					console.log("Op\u00e7\u00e3o inv\u00e1lida!");
			}
		}
	}

	console.log("Segurado atualizado com sucesso!");
}

function removerSegurado() {
	if (dados.segurados.length === 0) {
		console.log("\nNenhum segurado cadastrado.");
		return;
	}

	const id = auxiliar.selecionarDaLista(dados.segurados, "Selecione o segurado para remover:");
	if (id === null) return;

	// Verificar se há apólices com este segurado
	if (temDependencias(id, dados.apolices, 'seguradoId')) {
		console.log("\nERRO: Não é possível remover este segurado pois existem apólices associadas a ele.");
		return;
	}

	const index = buscarIndice(dados.segurados, id);
	const segurado = dados.segurados[index];
	let identificacao;
	if (segurado.tipo === "Pessoa") {
		identificacao = segurado.nome;
	} else {
		identificacao = segurado.descricao;
	}
	dados.segurados.splice(index, 1);
	console.log(`Segurado "${identificacao}" removido com sucesso!`);
}

// APÓLICES - CRUD

function inserirApolice() {
	const apolice = new Apolice(dados.seguradoras, dados.tomadores, dados.segurados);
	dados.apolices.push(apolice);
	incrementarEstado(apolice.estadoDaApoliceId);
	console.log(`\nApólice adicionada com sucesso! (ID: ${apolice.id})`);
}

function listarApolices() {
	if (dados.apolices.length === 0) {
		console.log("\nNenhuma apólice cadastrada.");
		return;
	}

	console.log("\nAPÓLICES:");
	for (let i = 0; i < dados.apolices.length; i++) {
		const a = dados.apolices[i];
		const seguradora = dados.seguradoras.find(s => s.id === a.seguradoraId);
		const tomador = dados.tomadores.find(t => t.id === a.tomadorId);
		const segurado = dados.segurados.find(s => s.id === a.seguradoId);
		const tipo = dados.tiposDeSeguro.find(t => t.id === a.tipoDeSeguroId);
		const estado = dados.estadosDaApolice.find(e => e.id === a.estadoDaApoliceId);
		const periodicidade = dados.periodicidadesPremio.find(p => p.id === a.periodicidadePremioId);

		let nomeSegurado;
		if (segurado) {
			if (segurado.tipo === "Pessoa") {
				nomeSegurado = segurado.nome;
			} else {
				nomeSegurado = segurado.descricao;
			}
		} else {
			nomeSegurado = 'N/A';
		}

		console.log(`\n--- Apólice ID: ${a.id} ---`);
		console.log(`Seguradora: ${seguradora?.nome || 'N/A'}`);
		console.log(`Tomador: ${tomador?.nome || 'N/A'}`);
		console.log(`Segurado: ${nomeSegurado}`);
		console.log(`Tipo: ${tipo?.nome || 'N/A'}`);
		console.log(`Valor Segurado: €${a.valorSegurado.toFixed(2)}`);
		console.log(`Prémio: €${a.valorPremio.toFixed(2)} (${periodicidade?.nome || 'N/A'})`);
		console.log(`Estado: ${estado?.nome || 'N/A'}`);
	}
}

function atualizarApolice() {
	if (dados.apolices.length === 0) {
		console.log("\nNenhuma apólice cadastrada.");
		return;
	}

	const id = auxiliar.selecionarDaLista(dados.apolices, "Selecione a apólice para atualizar:");
	if (id === null) return;

	const apolice = dados.apolices.find(a => a.id === id);
	console.log(`\nAtualizando Apólice ID: ${apolice.id}`);

	let continuar = true;
	while (continuar) {
		console.log("\nQual campo deseja atualizar?");
		console.log("1. Seguradora");
		console.log("2. Tomador");
		console.log("3. Segurado");
		console.log("4. Tipo de Seguro");
		console.log("5. Valor Segurado");
		console.log("6. Periodicidade e Valor do Prémio");
		console.log("7. Estado da Apólice");
		console.log("8. Atualizar todos os campos");
		console.log("0. Concluir atualização");

		const opcao = auxiliar.lerNumero("Escolha uma opção: ");

		switch (opcao) {
			case 1:
				apolice.seguradoraId = auxiliar.selecionarOuCriar(dados.seguradoras, "Seguradora", Seguradora);
				console.log("Seguradora atualizada!");
				break;
			case 2:
				apolice.tomadorId = auxiliar.selecionarOuCriar(dados.tomadores, "Tomador", Tomador);
				console.log("Tomador atualizado!");
				break;
			case 3:
				apolice.seguradoId = auxiliar.selecionarOuCriar(dados.segurados, "Segurado", Segurado);
				console.log("Segurado atualizado!");
				break;
			case 4:
				apolice.tipoDeSeguroId = auxiliar.selecionarDaLista(dados.tiposDeSeguro, "Selecione o novo tipo de seguro:");
				console.log("Tipo de seguro atualizado!");
				break;
			case 5:
				apolice.valorSegurado = auxiliar.lerNumeroPositivo("Digite o novo valor segurado (em €): ");
				console.log("Valor segurado atualizado!");
				break;
			case 6:
				apolice.periodicidadePremioId = auxiliar.selecionarDaLista(dados.periodicidadesPremio, "Selecione a nova periodicidade:");
				apolice.valorPremio = auxiliar.lerNumeroPositivo("Digite o novo valor do prémio (em €): ");
				console.log("Periodicidade e valor do prémio atualizados!");
				break;
			case 7:
				const estadoAnterior = apolice.estadoDaApoliceId;
				const novoEstado = auxiliar.selecionarDaLista(dados.estadosDaApolice, "Selecione o novo estado:");
				if (novoEstado !== null && novoEstado !== estadoAnterior) {
					decrementarEstado(estadoAnterior);
					apolice.estadoDaApoliceId = novoEstado;
					incrementarEstado(novoEstado);
				}
				console.log("Estado atualizado!");
				break;
			case 8:
				const estadoAntigo = apolice.estadoDaApoliceId;
				apolice.seguradoraId = auxiliar.selecionarDaLista(dados.seguradoras, "Selecione a nova seguradora:");
				apolice.tomadorId = auxiliar.selecionarDaLista(dados.tomadores, "Selecione o novo tomador:");
				apolice.seguradoId = auxiliar.selecionarDaLista(dados.segurados, "Selecione o novo segurado:");
				apolice.tipoDeSeguroId = auxiliar.selecionarDaLista(dados.tiposDeSeguro, "Selecione o novo tipo de seguro:");
				apolice.valorSegurado = auxiliar.lerNumeroPositivo("Digite o novo valor segurado (em €): ");
				apolice.periodicidadePremioId = auxiliar.selecionarDaLista(dados.periodicidadesPremio, "Selecione a nova periodicidade:");
				apolice.valorPremio = auxiliar.lerNumeroPositivo("Digite o novo valor do prémio (em €): ");
				const estadoNovo = auxiliar.selecionarDaLista(dados.estadosDaApolice, "Selecione o novo estado:");
				if (estadoNovo !== estadoAntigo) {
					decrementarEstado(estadoAntigo);
					apolice.estadoDaApoliceId = estadoNovo;
					incrementarEstado(estadoNovo);
				} else {
					apolice.estadoDaApoliceId = estadoNovo;
				}
				console.log("Todos os campos atualizados!");
				continuar = false;
				break;
			case 0:
				continuar = false;
				break;
			default:
				console.log("Opção inválida!");
		}
	}

	console.log("Apólice atualizada com sucesso!");
}

function removerApolice() {
	if (dados.apolices.length === 0) {
		console.log("\nNenhuma apólice cadastrada.");
		return;
	}

	const id = auxiliar.selecionarDaLista(dados.apolices, "Selecione a apólice para remover:", 'id');
	if (id === null) return;

	const index = buscarIndice(dados.apolices, id);
	const estadoId = dados.apolices[index].estadoDaApoliceId;
	dados.apolices.splice(index, 1);
	decrementarEstado(estadoId);
	console.log(`Apólice ID ${id} removida com sucesso!`);
}

// EXPORTAR FUNÇÕES

export default {
	// Seguradoras
	inserirSeguradora,
	listarSeguradoras,
	atualizarSeguradora,
	removerSeguradora,

	// Tomadores
	inserirTomador,
	listarTomadores,
	atualizarTomador,
	removerTomador,

	// Segurados
	inserirSegurado,
	listarSegurados,
	atualizarSegurado,
	removerSegurado,

	// Apólices
	inserirApolice,
	listarApolices,
	atualizarApolice,
	removerApolice
};
