const prompt = require("prompt-sync")();

// Ler depósito mensal, número de meses e taxa mensal
let depositoMensal = Number(prompt("Digite o valor do depósito mensal: "));
let numeroMeses = Number(prompt("Digite o número de meses: "));
let taxaMensal = Number(prompt("Digite a taxa mensal (%): "));

// Calcular o fator de crescimento
let fator = 1 + (taxaMensal / 100);

// Calcular o montante acumulado
let montante = 0;

// Utilizar o método Math.pow para calcular o montante acumulado sem loop
// Fórmula do montante acumulado com depósitos mensais e capitalização composta:
// M = P * [((1 + r)^n - 1) / r]
// Onde:
// M = montante acumulado
// P = depósito mensal
// r = taxa mensal (em decimal)
// n = número de meses
montante = depositoMensal * (fator ** numeroMeses - 1) / (fator - 1);

// Apresentar o resultado
console.log(`Montante acumulado: ${montante.toFixed(2)}`);
