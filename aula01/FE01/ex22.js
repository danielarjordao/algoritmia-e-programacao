const prompt = require("prompt-sync")();

// Ler o número de dias
let dias = Number(prompt("Digite o número de dias: "));

// Calcular o número de semanas inteiras e dias restantes
let semanas = Math.trunc(dias / 7);
let diasRestantes = dias % 7;

// Apresentar os resultados
console.log(`Número de semanas inteiras: ${semanas}`);
console.log(`Dias restantes: ${diasRestantes}`);
