const prompt = require("prompt-sync")();

// Ler o montante em cêntimos
let montante = Number(prompt("Digite o montante em cêntimos: "));
let restante = montante;

// Calcular a quantidade de moedas de 200 cêntimos
let moedas200 = Math.trunc(restante / 200);
restante = restante % 200;

// Calcular a quantidade de moedas de 100 cêntimos
let moedas100 = Math.trunc(restante / 100);
restante = restante % 100;

// Calcular a quantidade de moedas de 50 cêntimos
let moedas50 = Math.trunc(restante / 50);
restante = restante % 50;

// Calcular a quantidade de moedas de 20 cêntimos
let moedas20 = Math.trunc(restante / 20);
restante = restante % 20;

// Calcular a quantidade de moedas de 10 cêntimos
let moedas10 = Math.trunc(restante / 10);
restante = restante % 10;

// Calcular a quantidade de moedas de 5 cêntimos
let moedas5 = Math.trunc(restante / 5);
restante = restante % 5;

// Calcular a quantidade de moedas de 2 cêntimos
let moedas2 = Math.trunc(restante / 2);
restante = restante % 2;

// Calcular a quantidade de moedas de 1 cêntimo
let moedas1 = restante;

// Apresentar os resultados
console.log(`Moedas de 200 cêntimos: ${moedas200}`);
console.log(`Moedas de 100 cêntimos: ${moedas100}`);
console.log(`Moedas de 50 cêntimos: ${moedas50}`);
console.log(`Moedas de 20 cêntimos: ${moedas20}`);
console.log(`Moedas de 10 cêntimos: ${moedas10}`);
console.log(`Moedas de 5 cêntimos: ${moedas5}`);
console.log(`Moedas de 2 cêntimos: ${moedas2}`);
console.log(`Moedas de 1 cêntimo: ${moedas1}`);
