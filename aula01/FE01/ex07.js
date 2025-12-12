const prompt = require("prompt-sync")();

// Ler velocidade em m/s
let velocidadeMS = Number(prompt("Digite a velocidade em m/s: "));

// Converter para km/h
let velocidadeKMH = velocidadeMS * 3.6;

// Apresentar o resultado
console.log(`${velocidadeMS} m/s = ${velocidadeKMH.toFixed(1)} km/h`);
