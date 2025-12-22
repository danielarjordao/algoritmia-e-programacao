import PromptSync from "prompt-sync";
const prompt = PromptSync();

function imprimirArray(arr) {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

function promptMensagem(mensagem) {
	let entrada;
	do {
		entrada = prompt(mensagem);
	} while (entrada === "");
	return entrada;
}

function lerNumero(mensagem) {
	let numero;
	do {
		numero = Number(prompt(mensagem));
		if (isNaN(numero)) {
			console.log("Entrada inválida. Por favor, digite um número válido.");
		}
	} while (isNaN(numero));
	return numero;
}

function lerNumeroPositivo(mensagem) {
	let numero;
	do {
		numero = lerNumero(mensagem);
		if (numero < 0) {
			console.log("Por favor, digite um número positivo.");
		}
	} while (numero < 0);
	return numero;
}

function lerOpcao(mensagem, min, max) {
	let opcao;
	do {
		opcao = lerNumero(mensagem);
		if (opcao < min || opcao > max) {
			console.log(`Opção inválida. Digite um número entre ${min} e ${max}.`);
		}
	} while (opcao < min || opcao > max);
	return opcao;
}

function continuarOperacao(mensagem) {
	let resposta;
	do {
		resposta = prompt(mensagem).toLowerCase();
	} while (resposta !== "s" && resposta !== "n");
	return resposta === "s";
}

function lerData(mensagem) {
	let dataValida = false;
	let data;
	do {
		const entrada = prompt(mensagem);
		const partes = entrada.split("/");
		if (partes.length === 3) {
			const dia = Number(partes[0]);
			const mes = Number(partes[1]);
			const ano = Number(partes[2]);
			if (!isNaN(dia) && !isNaN(mes) && !isNaN(ano) && partes[2].length === 4) {
				// Em JavaScript os meses são baseados em zero (0-11)
				data = new Date(ano, mes - 1, dia);
				// Verifica se a data criada corresponde à data inserida
				// Para evitar datas inválidas, pois o JavaScript ajusta automaticamente datas inválidas
				if (data.getDate() === dia &&
				    data.getMonth() === mes - 1 &&
				    data.getFullYear() === ano) {
					dataValida = true;
				} else {
					console.log("Data inválida. Por favor, digite uma data válida no formato dd/mm/aaaa.");
				}
			} else {
				console.log("Formato inválido. Use números no formato dd/mm/aaaa (ano com 4 dígitos).");
			}
		} else {
			console.log("Formato inválido. Use o formato dd/mm/aaaa.");
		}
	} while (!dataValida);
	return data;
}

function obterDataAtual() {
	return new Date();
}

function calcularAnosEntreDatas(dataInicio, dataFim) {
	let anos = dataFim.getFullYear() - dataInicio.getFullYear();
	const mesDiff = dataFim.getMonth() - dataInicio.getMonth();
	const diaDiff = dataFim.getDate() - dataInicio.getDate();
	if (mesDiff < 0 || (mesDiff === 0 && diaDiff < 0)) {
		anos--;
	}
	return anos;
}

function selecionarDaLista(lista, mensagem, campoExibicao = 'nome') {
	if (lista.length === 0) {
		console.log("Nenhum item disponível para seleção.");
		return null;
	}

	console.log("\n" + mensagem);
	for (let i = 0; i < lista.length; i++) {
		let exibicao;
		if (lista[i].tipo) {
			// Segurado: mostrar tipo e identificação apropriada
			if (lista[i].tipo === "Pessoa") {
				exibicao = lista[i].nome;
			} else {
				exibicao = lista[i].descricao;
			}
			exibicao = `[${lista[i].tipo}] ${exibicao}`;
		} else if (lista[i].tomadorId !== undefined && lista[i].valorSegurado !== undefined) {
			// Apólice: mostrar ID e valor segurado
			exibicao = `Apólice ID ${lista[i].id} - €${lista[i].valorSegurado.toFixed(2)}`;
		} else {
			exibicao = lista[i][campoExibicao];
		}
		console.log(`${i + 1}. ${exibicao}`);
	}

	const opcao = lerOpcao("Escolha uma opção: ", 1, lista.length);
	return lista[opcao - 1].id;
}

function selecionarOuCriar(array, tipo, ClasseConstrutora) {
	console.log("");
	if (array.length > 0) {
		console.log(`${tipo}:`);
		console.log("1. Usar existente");
		console.log("2. Criar novo");
		const opcao = lerOpcao("Escolha uma opcao: ", 1, 2);
		if (opcao === 1) {
			return selecionarDaLista(array, `Selecione o ${tipo.toLowerCase()}:`);
		}
		console.log("");
	}

	// Criar novo
	const novo = new ClasseConstrutora();
	array.push(novo);
	let identificacao;
	if (novo.tipo) {
		if (novo.tipo === "Pessoa") {
			identificacao = novo.nome;
		} else {
			identificacao = novo.descricao;
		}
	} else {
		identificacao = novo.nome;
	}
	console.log(`${tipo} "${identificacao}" criado com sucesso!`);
	return novo.id;
}

export default {
	imprimirArray,
	promptMensagem,
	lerNumero,
	lerNumeroPositivo,
	lerOpcao,
	continuarOperacao,
	obterDataAtual,
	lerData,
	calcularAnosEntreDatas,
	selecionarDaLista,
	selecionarOuCriar
};
