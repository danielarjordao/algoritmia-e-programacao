//  A imagem seguinte apresenta um triângulo desenhado numa aplicação do tipo
// consola.

// Implemente um programa que desenhe o triângulo na consola.

const prompt = require("prompt-sync")();

let altura = prompt("Digite a altura do triângulo: ");
let caractere = prompt("Digite o caractere de preenchimento: ");

if (isNaN(altura) || altura <= 0) {
	console.log("Por favor, insira um valor válido para a altura.");
} else {
	altura = Math.trunc(Number(altura));

	for (let i = 0; i < altura; i++) {
		let linha = "";
		for (let k = 0; k <= i; k++) {
			linha += caractere;
		}
		console.log(linha);
	}
}
