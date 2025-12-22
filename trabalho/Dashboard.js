import dados from './Dados.js';

function mostrarDashboard() {
	console.log("\nDASHBOARD\n");

	// Buscar ID do estado "Ativa"
	let idAtiva = null;
	let ativas = 0;
	let inativas = 0;

	for (let i = 0; i < dados.estadosDaApolice.length; i++) {
		if (dados.estadosDaApolice[i].nome === "Ativa") {
			idAtiva = dados.estadosDaApolice[i].id;
			ativas = dados.estadosDaApolice[i].quantidade;
		} else if (dados.estadosDaApolice[i].nome === "Inativa") {
			inativas = dados.estadosDaApolice[i].quantidade;
		}
	}

	console.log("RESUMO GERAL");
	console.log(`Total de Apolices: ${dados.apolices.length}`);
	console.log(`Apolices Ativas: ${ativas}`);
	console.log(`Apolices Inativas: ${inativas}`);

	// 2. Quantidade de apólices e valor médio segurado por seguradora (apenas ativas)
	console.log("\nPOR SEGURADORA (Apolices Ativas)");

	for (let i = 0; i < dados.seguradoras.length; i++) {
		const seguradoraId = dados.seguradoras[i].id;
		let quantidade = 0;
		let totalValor = 0;

		for (let j = 0; j < dados.apolices.length; j++) {
			if (dados.apolices[j].seguradoraId === seguradoraId && dados.apolices[j].estadoDaApoliceId === idAtiva) {
				quantidade++;
				totalValor += dados.apolices[j].valorSegurado;
			}
		}

		if (quantidade > 0) {
			const media = totalValor / quantidade;
			console.log(`${dados.seguradoras[i].nome}:`);
			console.log(`  Quantidade: ${quantidade}`);
			console.log(`  Valor Medio Segurado: €${media.toFixed(2)}`);
		}
	}

	// 3. Quantidade de apólices e valor médio segurado por tipo de seguro (apenas ativas)
	console.log("\nPOR TIPO DE SEGURO (Apolices Ativas)");

	for (let i = 0; i < dados.tiposDeSeguro.length; i++) {
		const tipoId = dados.tiposDeSeguro[i].id;
		let quantidade = 0;
		let totalValor = 0;

		for (let j = 0; j < dados.apolices.length; j++) {
			if (dados.apolices[j].tipoDeSeguroId === tipoId && dados.apolices[j].estadoDaApoliceId === idAtiva) {
				quantidade++;
				totalValor += dados.apolices[j].valorSegurado;
			}
		}

		if (quantidade > 0) {
			const media = totalValor / quantidade;
			console.log(`${dados.tiposDeSeguro[i].nome}:`);
			console.log(`  Quantidade: ${quantidade}`);
			console.log(`  Valor Medio Segurado: €${media.toFixed(2)}`);
		}
	}

	console.log("");
}

export default {
	mostrarDashboard
};
