const prompt = require("prompt-sync")();

// Ler a primeira nota e seu peso
let nota1 = Number(prompt("Digite a primeira nota: "));
let peso1 = Number(prompt("Digite o peso da primeira nota: "));

// Ler a segunda nota e seu peso
let nota2 = Number(prompt("Digite a segunda nota: "));
let peso2 = Number(prompt("Digite o peso da segunda nota: "));

// Ler a terceira nota e seu peso
let nota3 = Number(prompt("Digite a terceira nota: "));
let peso3 = Number(prompt("Digite o peso da terceira nota: "));

// Calcular a média ponderada
let mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

// Apresentar o resultado
console.log(`Média ponderada: ${mediaPonderada.toFixed(1)}`);
