const prompt = require("prompt-sync")();

// Ler os valores de a e b
let a = Number(prompt("Digite o valor de a: "));
let b = Number(prompt("Digite o valor de b: "));

// Apresentar valores antes da troca
console.log("Antes da troca:");
console.log(`a = ${a}`);
console.log(`b = ${b}`);

// Trocar os valores usando variável auxiliar
let temp = a;
a = b;
b = temp;

// Apresentar valores depois da troca
console.log("Depois da troca:");
console.log(`a = ${a}`);
console.log(`b = ${b}`);
