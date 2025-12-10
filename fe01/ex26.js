const prompt = require("prompt-sync")();

// Ler capital, taxa anual e número de períodos
let capital = Number(prompt("Digite o capital: "));
let taxaAnual = Number(prompt("Digite a taxa anual (%): "));
let periodos = Number(prompt("Digite o número de períodos: "));

// Calcular o fator de crescimento
let fator = 1 + (taxaAnual / 100);

// Calcular o montante por capitalização composta (multiplicação sucessiva)
let montante = capital;
for (let i = 0; i < periodos; i++) {
    montante = montante * fator;
}

// Apresentar o resultado
console.log(`Montante: ${montante.toFixed(2)}`);
