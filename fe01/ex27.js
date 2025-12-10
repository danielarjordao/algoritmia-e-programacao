const prompt = require("prompt-sync")();

// Ler depósito mensal, número de meses e taxa mensal
let depositoMensal = Number(prompt("Digite o valor do depósito mensal: "));
let numeroMeses = Number(prompt("Digite o número de meses: "));
let taxaMensal = Number(prompt("Digite a taxa mensal (%): "));

// Calcular o fator de crescimento
let fator = 1 + (taxaMensal / 100);

// Calcular o montante acumulado
let montante = 0;

for (let mes = 1; mes <= numeroMeses; mes++) {
    // Depositar no início do mês
    montante = montante + depositoMensal;
    // Aplicar juros ao final do mês
    montante = montante * fator;
}

// Apresentar o resultado
console.log(`Montante acumulado: ${montante.toFixed(2)}`);
