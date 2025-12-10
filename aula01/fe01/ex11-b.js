const prompt = require("prompt-sync")();

// Fahrenheit para Celsius
let fahrenheit = Number(prompt("Digite a temperatura em Fahrenheit: "));

// Converter para Celsius
let celsius = (fahrenheit - 32) * 5/9;

// Apresentar o resultado
console.log(`${fahrenheit.toFixed(1)}°F = ${celsius.toFixed(1)}°C`);