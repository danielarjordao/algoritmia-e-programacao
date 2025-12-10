const prompt = require("prompt-sync")();

// Ler o salário-base
let salarioBase = Number(prompt("Digite o salário-base: "));

// Calcular gratificação (5%) e imposto (7%)
let gratificacao = salarioBase * 0.05;
let imposto = salarioBase * 0.07;

// Calcular salário a receber
let salarioFinal = salarioBase + gratificacao - imposto;

// Apresentar os resultados
console.log(`Salário-base: ${salarioBase.toFixed(2)}`);
console.log(`Gratificação (5%): ${gratificacao.toFixed(2)}`);
console.log(`Imposto (7%): ${imposto.toFixed(2)}`);
console.log(`Salário a receber: ${salarioFinal.toFixed(2)}`);
