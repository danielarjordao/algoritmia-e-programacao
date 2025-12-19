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

function continuarOperacao(mensagem) {
	let resposta;
	do {
		resposta = prompt(mensagem).toLowerCase();
	} while (resposta !== "s" && resposta !== "n");
	return resposta === "s";
}

function solicitarMenu(array, mensagem) {
	let opcao;
	do {
		printMenu(mensagem, array);
		opcao = lerNumero("Escolha uma opção: ");
		if (opcao < 1 || opcao > array.length) {
			console.log(`Opção inválida. Digite um número entre 1 e ${array.length}.`);
		}
	} while (opcao < 1 || opcao > array.length);
	return array[opcao - 1];
}

function printMenu(titulo, opcoes) {
	console.log("\n" + titulo);
	for (let i = 0; i < opcoes.length; i++) {
		console.log(`${i + 1}. ${opcoes[i]}`);
	}
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
			if (!isNaN(dia) && !isNaN(mes) && !isNaN(ano)) {
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
				console.log("Formato inválido. Use números no formato dd/mm/aaaa.");
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

export default {
	imprimirArray,
	promptMensagem,
	lerNumero,
	lerNumeroPositivo,
	continuarOperacao,
	solicitarMenu,
	printMenu,
	obterDataAtual,
	lerData,
	calcularAnosEntreDatas
};
