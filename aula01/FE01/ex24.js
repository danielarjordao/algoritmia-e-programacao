const prompt = require("prompt-sync")();

// Ler anos, meses e dias
let anos = Number(prompt("Digite o número de anos: "));
let meses = Number(prompt("Digite o número de meses: "));
let dias = Number(prompt("Digite o número de dias: "));

// Calcular o total de dias (ano = 365 dias, mês = 30 dias)
let totalDias = (anos * 365) + (meses * 30) + dias;

// Apresentar o resultado
console.log(`Total de dias: ${totalDias}`);
