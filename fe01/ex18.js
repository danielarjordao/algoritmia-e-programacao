const prompt = require("prompt-sync")();

// Ler valor em dólares e taxa de conversão
let dolares = Number(prompt("Digite o valor em dólares: "));
let taxaConversao = Number(prompt("Digite a taxa de conversão (1 USD em EUR): "));

// Calcular o valor em euros
let euros = dolares * taxaConversao;

// Apresentar o resultado
console.log(`Valor em euros: ${euros.toFixed(2)} EUR`);
