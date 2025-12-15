// Crie um programa que calcule a média de um número indeterminado de idades
// introduzidas pelo utilizador e calcule a média dessas idades. Este programa deve
// reutilizar a função soma(n1, n2) implementado no ponto 1 e consumir a função
// divisão(dividendo, divisor) para calcular a média de idades.

const prompt = require("prompt-sync")();

let somaIdades = 0;
let contadorIdades = 0;
let idade = 0;

while (idade !== -1) {
	idade = lerIdade();
	if (idade !== -1) {
		somaIdades = soma(somaIdades, idade);
		contadorIdades++;
	}
}

const mediaIdades = divisao(somaIdades, contadorIdades);
console.log(`Média das idades: ${mediaIdades.toFixed(2)}`);


function lerNumero(mensagem) {
	let num;
	do {
		num = Number(prompt(mensagem));
	} while (isNaN(num));
	return num;
}

function soma(n1, n2) {
	return n1 + n2;
}

function divisao(dividendo, divisor) {
	if (divisor === 0) {
		return 0;
	}
	return dividendo / divisor;
}

function lerIdade() {
	let idade;
	do {
		idade = Number(prompt("Digite uma idade (-1 para sair): "));
	} while (isNaN(idade) || (idade !== -1 && (idade < 0 || idade > 120)));
	return idade;
}
