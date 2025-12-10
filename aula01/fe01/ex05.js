const prompt = require("prompt-sync")();

// Ler três números reais
let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let num3 = Number(prompt("Digite o terceiro número: "));

// Calcular a média simples
let media = (num1 + num2 + num3) / 3;

// Apresentar a média com duas casas decimais
console.log(`A média é: ${media.toFixed(2)}`);
