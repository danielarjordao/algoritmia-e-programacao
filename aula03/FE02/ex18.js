// Devido à crise, o governo decidiu criar uma sobretaxa de IRS extraordinária
// de 3,5% sobre os salários cujo valor seja superior ao salário mínimo
// nacional. Esta nova taxa, apenas deve incidir sobre o valor que remanesce
// depois de subtraído o salário mínimo ao salário do funcionário. Implemente
// um programa para resolver o problema, acautelando a exceção prevista para os
// funcionários que apenas aufiram o salário mínimo nacional. No final deve ser
// mostrado no ecrã o recibo de salário do funcionário após a aplicação da
// sobretaxa.

const prompt = require("prompt-sync")();

const SALARIO_MINIMO = 870;
const salarioFuncionario = Number(prompt("Digite o salário do funcionário: "));

if (salarioFuncionario <= SALARIO_MINIMO) {
	console.log("O funcionário aufere o salário mínimo nacional. Não há sobretaxa a aplicar.");
	console.log(`Recibo de salário: €${salarioFuncionario.toFixed(2)}`);
} else {
	const valorSobretaxa = (salarioFuncionario - SALARIO_MINIMO) * 0.035;
	const salarioFinal = salarioFuncionario - valorSobretaxa;

	console.log(`Recibo de salário após aplicação da sobretaxa: €${salarioFinal.toFixed(2)}`);
}
