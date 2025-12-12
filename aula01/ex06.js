// • Elabora um programa que peça ao
// utilizador três números inteiros, calcule
// a média e apresente o resultado
// formatado com duas casas decimais.
// • Deve ainda incluir uma mensagem
// inicial no ecrã e aguardar que o
// utilizador pressione ENTER para
// terminar o programa.

/*
Pseudocódigo

Variáveis:
  num1, num2, num3: inteiro
  media: real

Início

escrever("Digite o número 1: ")
ler(num1)
escrever("Digite o número 2: ")
ler(num2)
escrever("Digite o número 3: ")
ler(num3)

media ← (num1 + num2 + num3) / 3

escrever(media)

Fim

*/

const prompt = require("prompt-sync")();

// Limpa o console antes de iniciar o programa
console.clear();

let num1 = Number(prompt("Digite o número 1: "));
let num2 = Number(prompt("Digite o número 2: "));
let num3 = Number(prompt("Digite o número 3: "));

let media = (num1 + num2 + num3) / 3;

console.log("A média é: " + media.toFixed(2));

prompt("");
