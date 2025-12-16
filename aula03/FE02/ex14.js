// Considere uma máquina que permite apenas três operações, ligar, desligar e
// furar. Aquando da digitação das letras: ’L’, ’D’ e ’F’, são apresentadas,
// respectivamente, as mensagens: Ligar, Desligar e Furar. No caso da letra
// digitada ser outra é apresentada uma mensagem de erro.

const prompt = require('prompt-sync')();

const operacao = prompt("Digite a operação (L para Ligar, D para Desligar, F para Furar): ").toUpperCase();

switch (operacao) {
	case 'L':
		console.log("Ligar");
		break;
	case 'D':
		console.log("Desligar");
		break;
	case 'F':
		console.log("Furar");
		break;
	default:
		console.log("Erro: Operação inválida.");
}
