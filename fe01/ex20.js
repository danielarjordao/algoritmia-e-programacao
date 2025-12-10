const prompt = require("prompt-sync")();

// Ler o total a pagar
let total = Number(prompt("Digite o total a pagar: "));

// Calcular a parte inteira do quociente (valor base)
let valorBase = Math.trunc(total / 3);

// Calcular o resto da divisão usando o operador %
let resto = total % 3;

// Atribuir valores: duas pessoas pagam o valor base, a terceira paga o valor base + resto
let pessoa1 = valorBase;
let pessoa2 = valorBase;
let pessoa3 = valorBase + resto;

// Apresentar os resultados
console.log(`Pessoa 1 paga: ${pessoa1.toFixed(2)}`);
console.log(`Pessoa 2 paga: ${pessoa2.toFixed(2)}`);
console.log(`Pessoa 3 paga: ${pessoa3.toFixed(2)}`);
console.log(`Total: ${(pessoa1 + pessoa2 + pessoa3).toFixed(2)}`);
