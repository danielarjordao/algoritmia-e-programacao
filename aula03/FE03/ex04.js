// Crie  uma  aplicação  que  solicite  ao  utilizador  um  número  inteiro    e  que
// mostre ao utilizador o resultado do fatorial desse número (5! = 5x4x3x2x1)

const prompt = require("prompt-sync")();

let num = Number(prompt("Digite um número inteiro: "));

if (isNaN(num) || num < 0) {
	console.log("Por favor, insira um número inteiro não negativo.");
} else {
	// Garantir que o número é um inteiro
	num = Math.trunc(num);

	let fatorial = 1;

	for (let i = 1; i <= num; i++) {
		fatorial *= i;
	}
	console.log(`O fatorial de ${num} é ${fatorial}.`);
}
