const prompt = require("prompt-sync")();

// Ler valor em euros e taxa de conversão
let euros = Number(prompt("Digite o valor em euros: "));
let taxaConversao = Number(prompt("Digite a taxa de conversão (1 EUR em USD): "));

// Calcular o valor em dólares
let dolares = euros * taxaConversao;

// Apresentar o resultado
console.log(`Valor em dólares: ${dolares.toFixed(2)} USD`);
