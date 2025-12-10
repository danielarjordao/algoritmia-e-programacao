const prompt = require("prompt-sync")();

// Ler litros consumidos e quilómetros percorridos
let litros = Number(prompt("Digite os litros consumidos: "));
let quilometros = Number(prompt("Digite os quilómetros percorridos: "));

// Calcular o consumo em L/100 km
let consumo = (litros / quilometros) * 100;

// Apresentar o resultado
console.log(`Consumo: ${consumo.toFixed(1)} L/100km`);
