const prompt = require("prompt-sync")();

// Ler base e altura do retângulo
let base = Number(prompt("Digite a base do retângulo: "));
let altura = Number(prompt("Digite a altura do retângulo: "));

// Calcular perímetro e área
let perimetro = 2 * (base + altura);
let area = base * altura;

// Apresentar os resultados
console.log(`Perímetro: ${perimetro}`);
console.log(`Área: ${area.toFixed(2)}`);
