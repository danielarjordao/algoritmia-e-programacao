const prompt = require("prompt-sync")();

// Ler o raio do círculo
let raio = Number(prompt("Digite o raio do círculo: "));

// Definir o valor de π
const PI = 3.14159265;

// Calcular o comprimento da circunferência e a área
let comprimento = 2 * PI * raio;
let area = PI * raio * raio;

// Apresentar os resultados
console.log(`Comprimento da circunferência: ${comprimento.toFixed(2)}`);
console.log(`Área do círculo: ${area.toFixed(2)}`);
