// Implemente um programa em de acordo com dois lados de um quadrado/retângulo
// e no final indique ao utilizador a área e se a figura geométrica é um quadrado ou um retângulo

const prompt = require("prompt-sync")();

let num1 = Number(prompt("Digite o primeiro lado: "));
let num2 = Number(prompt("Digite o segundo lado: "));

if (num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)) {
	console.log("Valor inválido.");
} else if (num1 === num2) {
	console.log("A figura é um quadrado.");
} else if (num1 !== num2) {
	console.log("A figura é um retângulo.");
}
