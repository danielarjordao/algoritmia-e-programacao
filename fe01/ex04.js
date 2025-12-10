const prompt = require("prompt-sync")();

// Ler os valores inteiros
let a = Number(prompt("Digite o valor de a: "));
let b = Number(prompt("Digite o valor de b: "));

// Calcular as operações
let soma = a + b;
let diferenca = a - b;
let produto = a * b;
let quocienteInteiro = Math.trunc(a / b);
let resto = a % b;

// Apresentar os resultados
console.log(`Soma: ${soma}`);
console.log(`Diferença: ${diferenca}`);
console.log(`Produto: ${produto}`);
console.log(`Quociente Inteiro: ${quocienteInteiro}`);
console.log(`Resto da Divisão: ${resto}`);
