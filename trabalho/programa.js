import gestao from './Gestao.js';
import dados from './Dados.js';
import relatorios from './Relatorios.js';
import dashboard from './Dashboard.js';
import auxiliar from './Auxiliar.js';

console.log("\nSISTEMA DE GESTAO DE APOLICES DE SEGUROS\n");

// Carregar dados do arquivo JSON
dados.carregar();

function menuPrincipal() {
	let continuar = true;

	while (continuar) {
		dashboard.mostrarDashboard();

		console.log("\n--- MENU PRINCIPAL ---");
		console.log("1. Gestao de Seguradoras");
		console.log("2. Gestao de Tomadores");
		console.log("3. Gestao de Segurados");
		console.log("4. Gestao de Apolices");
		console.log("5. Relatorios");
		console.log("0. Sair");

		const opcao = auxiliar.lerNumero("Escolha uma opcao: ");

		switch (opcao) {
			case 1:
				menuSeguradoras();
				break;
			case 2:
				menuTomadores();
				break;
			case 3:
				menuSegurados();
				break;
			case 4:
				menuApolices();
				break;
			case 5:
				menuRelatorios();
				break;
			case 0:
				dados.salvar();
				console.log("\nDados salvos. Encerrando o programa...");
				continuar = false;
				break;
			default:
				console.log("\nOpcao invalida!");
		}
	}
}

function menuSeguradoras() {
	let continuar = true;

	while (continuar) {
		console.log("\n--- GESTAO DE SEGURADORAS ---");
		console.log("1. Inserir Seguradora");
		console.log("2. Listar Seguradoras");
		console.log("3. Atualizar Seguradora");
		console.log("4. Remover Seguradora");
		console.log("0. Voltar");

		const opcao = auxiliar.lerNumero("Escolha uma opcao: ");

		switch (opcao) {
			case 1:
				gestao.inserirSeguradora();
				break;
			case 2:
				gestao.listarSeguradoras();
				break;
			case 3:
				gestao.atualizarSeguradora();
				break;
			case 4:
				gestao.removerSeguradora();
				break;
			case 0:
				continuar = false;
				break;
			default:
				console.log("\nOpcao invalida!");
		}
	}
}

function menuTomadores() {
	let continuar = true;

	while (continuar) {
		console.log("\n--- GESTAO DE TOMADORES ---");
		console.log("1. Inserir Tomador");
		console.log("2. Listar Tomadores");
		console.log("3. Atualizar Tomador");
		console.log("4. Remover Tomador");
		console.log("0. Voltar");

		const opcao = auxiliar.lerNumero("Escolha uma opcao: ");

		switch (opcao) {
			case 1:
				gestao.inserirTomador();
				break;
			case 2:
				gestao.listarTomadores();
				break;
			case 3:
				gestao.atualizarTomador();
				break;
			case 4:
				gestao.removerTomador();
				break;
			case 0:
				continuar = false;
				break;
			default:
				console.log("\nOpcao invalida!");
		}
	}
}

function menuSegurados() {
	let continuar = true;

	while (continuar) {
		console.log("\n--- GESTAO DE SEGURADOS ---");
		console.log("1. Inserir Segurado");
		console.log("2. Listar Segurados");
		console.log("3. Atualizar Segurado");
		console.log("4. Remover Segurado");
		console.log("0. Voltar");

		const opcao = auxiliar.lerNumero("Escolha uma opcao: ");

		switch (opcao) {
			case 1:
				gestao.inserirSegurado();
				break;
			case 2:
				gestao.listarSegurados();
				break;
			case 3:
				gestao.atualizarSegurado();
				break;
			case 4:
				gestao.removerSegurado();
				break;
			case 0:
				continuar = false;
				break;
			default:
				console.log("\nOpcao invalida!");
		}
	}
}

function menuApolices() {
	let continuar = true;

	while (continuar) {
		console.log("\n--- GESTAO DE APOLICES ---");
		console.log("1. Inserir Apolice");
		console.log("2. Listar Apolices");
		console.log("3. Atualizar Apolice");
		console.log("4. Remover Apolice");
		console.log("0. Voltar");

		const opcao = auxiliar.lerNumero("Escolha uma opcao: ");

		switch (opcao) {
			case 1:
				gestao.inserirApolice();
				break;
			case 2:
				gestao.listarApolices();
				break;
			case 3:
				gestao.atualizarApolice();
				break;
			case 4:
				gestao.removerApolice();
				break;
			case 0:
				continuar = false;
				break;
			default:
				console.log("\nOpcao invalida!");
		}
	}
}

function menuRelatorios() {
	let continuar = true;

	while (continuar) {
		console.log("\n--- RELATORIOS ---");
		console.log("1. Apolices por Segurado");
		console.log("2. Apolices por Tomador");
		console.log("3. Apolices Ativas");
		console.log("4. Buscar Apolice por ID");
		console.log("0. Voltar");

		const opcao = auxiliar.lerNumero("Escolha uma opcao: ");

		switch (opcao) {
			case 1:
				const seguradoId = auxiliar.selecionarDaLista(dados.segurados, "Selecione o segurado:");
				if (seguradoId !== null) {
					const apolices = relatorios.apolicesPorSegurado(seguradoId, dados.apolices);
					console.log(`\nTotal de apolices: ${apolices.length}`);
					for (let i = 0; i < apolices.length; i++) {
						console.log(`- Apolice ID: ${apolices[i].id}`);
					}
				}
				break;
			case 2:
				const tomadorId = auxiliar.selecionarDaLista(dados.tomadores, "Selecione o tomador:");
				if (tomadorId !== null) {
					const apolices = relatorios.apolicesPorTomador(tomadorId, dados.apolices);
					console.log(`\nTotal de apolices: ${apolices.length}`);
					for (let i = 0; i < apolices.length; i++) {
						console.log(`- Apolice ID: ${apolices[i].id}`);
					}
				}
				break;
			case 3:
				const apolices = relatorios.apolicesAtivas(dados.apolices);
				console.log(`\nTotal de apolices ativas: ${apolices.length}`);
				for (let i = 0; i < apolices.length; i++) {
					console.log(`- Apolice ID: ${apolices[i].id}`);
				}
				break;
			case 4:
				const id = auxiliar.lerNumero("Digite o ID da apolice: ");
				const apolice = relatorios.buscarPorId(id, dados.apolices);
				if (apolice) {
					console.log(`\nApolice encontrada: ID ${apolice.id}`);
				} else {
					console.log("\nApolice nao encontrada.");
				}
				break;
			case 0:
				continuar = false;
				break;
			default:
				console.log("\nOpcao invalida!");
		}
	}
}

// Iniciar o programa
menuPrincipal();
