const prompt = require("prompt-sync")();

let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));

// Divisão real entre num1 e num2
let div = num1 / num2;

// o toFixed(3) limita a quantidade de casas decimais a 3
console.log(num1 + " / " + num2 + " = " + div.toFixed(3));
