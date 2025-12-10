const prompt = require("prompt-sync")();

// Ler capital, taxa anual e tempo
let capital = Number(prompt("Digite o capital: "));
let taxaAnual = Number(prompt("Digite a taxa anual (%): "));
let tempo = Number(prompt("Digite o tempo em anos: "));

// Calcular o juro simples e o montante
let juro = capital * (taxaAnual / 100) * tempo;
let montante = capital + juro;

// Apresentar os resultados
console.log(`Capital: ${capital.toFixed(2)}`);
console.log(`Juro: ${juro.toFixed(2)}`);
console.log(`Montante: ${montante.toFixed(2)}`);
