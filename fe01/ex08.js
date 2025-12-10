const prompt = require("prompt-sync")();

// Ler o preço
let preco = Number(prompt("Digite o preço: "));

// Calcular o desconto e o preço final
let desconto = preco * 0.30;
let precoFinal = preco - desconto;

// Apresentar os resultados
console.log(`Preço inicial: ${preco.toFixed(2)}`);
console.log(`Valor do desconto: ${desconto.toFixed(2)}`);
console.log(`Preço final: ${precoFinal.toFixed(2)}`);
