const prompt = require("prompt-sync")();

// Ler o salário
let salario = Number(prompt("Digite o salário: "));

// Calcular o aumento e o salário final
let aumento = salario * 0.25;
let salarioFinal = salario + aumento;

// Apresentar os resultados
console.log(`Salário inicial: ${salario.toFixed(2)}`);
console.log(`Valor do aumento: ${aumento.toFixed(2)}`);
console.log(`Salário final: ${salarioFinal.toFixed(2)}`);
