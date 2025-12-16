// Para facilitar o controlo no consumo de energia, é necessário criar uma
// pequena aplicação que estime o valor da fatura mensal de um cliente, com
// base nos Kw estimados de consumir num mês (estimativa de consumo num mês).
// Tenha em atenção que, o custo por Kw varia em função do tipo de cliente:
// • Particulares (continente) – 0,1865 €
// • Particulares (ilhas) – 0,1875 €
// • Pequenas empresas – 0,1754 €
// • Médias e grandes empresas – 0,1592 €
// • Estado e organismos públicos – 0,1311 €
// Note que aos valores indicados é necessário acrescer IVA à taxa de 23%.
// Desenvolva um algoritmo que retorne resolução deste cálculo.

const prompt = require('prompt-sync')();

const consumoKw = Number(prompt("Digite a estimativa de consumo em Kw por mês: "));
console.log("Tipos de cliente:");
console.log("1 - Particulares (continente)");
console.log("2 - Particulares (ilhas)");
console.log("3 - Pequenas empresas");
console.log("4 - Médias e grandes empresas");
console.log("5 - Estado e organismos públicos");
const tipoCliente = prompt("Digite o número correspondente ao tipo de cliente: ");

let custoPorKw;

switch (tipoCliente) {
	case '1':
		custoPorKw = 0.1865;
		break;
	case '2':
		custoPorKw = 0.1875;
		break;
	case '3':
		custoPorKw = 0.1754;
		break;
	case '4':
		custoPorKw = 0.1592;
		break;
	case '5':
		custoPorKw = 0.1311;
		break;
	default:
		console.log("Tipo de cliente inválido.");
		custoPorKw = 0;
		break;
}

if (custoPorKw > 0 && consumoKw > 0) {
	const valorSemIva = consumoKw * custoPorKw;
	const iva = valorSemIva * 0.23;
	const valorTotal = valorSemIva + iva;

	console.log(`Valor da fatura mensal: €${valorTotal.toFixed(2)}`);
}
