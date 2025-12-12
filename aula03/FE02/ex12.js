// 12.Implemente um programa permita ler três lados de um triângulo. Faça uma
// algoritmo que leia três valores que representam os três lados de um
// triângulo e verifique:
// • Se o triângulo é válido
// • Se é um triângulo equilátero, isósceles ou escaleno.
// Propriedades de um triângulo:
// ✓Um triângulo só é válido se a medida de cada um dos seus lados é menor que
// a soma dos lados restantes;
// ✓Um triângulo equilátero tem três lados iguais
// ✓Um triângulo isósceles tem dois lados iguais
// ✓Um triângulo escaleno tem três lados diferentes.

const prompt = require("prompt-sync")();

let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let num3 = Number(prompt("Digite o terceiro número: "));

if (isNaN(num1) || isNaN(num2) || isNaN(num3)
	|| num1 <= 0 || num2 <= 0 || num3 <= 0) {
	console.log("Valor inválido");
} else if ((num1 >= num2 + num3) || (num2 >= num1 + num3)
	|| (num3 >= num1 + num2)) {
	console.log("Triângulo inválido");
} else if (num1 === num2 && num2 === num3) {
	console.log("Triângulo equilátero");
} else if (num1 === num2 || num2 === num3) {
	console.log("Triângulo isósceles");
} else if (num1 !== num2 && num2 !== num3 && num1 !== num3) {
	console.log("Triângulo escaleno");
}


