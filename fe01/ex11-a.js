const prompt = require("prompt-sync")();

// Celsius para Fahrenheit
let celsius = Number(prompt("Digite a temperatura em Celsius: "));

// Converter para Fahrenheit
let fahrenheit = (celsius * 9/5) + 32;

// Apresentar o resultado
console.log(`${celsius.toFixed(1)}°C = ${fahrenheit.toFixed(1)}°F`);
