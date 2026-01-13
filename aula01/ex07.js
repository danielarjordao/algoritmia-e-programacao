/*
Pseudocódigo

Variáveis:
	num1, num2, sum, sub, mult, div, rest: inteiro

Início

	escrever("Digite o primeiro número: ")
	ler(num1)
	escrever("Digite o segundo número: ")
	ler(num2)

	sum ← num1 + num2
	escrever(num1 + " + " + num2 + " = " + sum)

	sub ← num1 - num2
	escrever(num1 + " - " + num2 + " = " + sub)

	mult ← num1 * num2
	escrever(num1 + " * " + num2 + " = " + mult)

	div ← num1 / num2
	escrever(num1 + " / " + num2 + " = " + div)

	rest ← num1 % num2
	escrever(num1 + " % " + num2 + " = " + rest)

Fim

*/

const prompt = require("prompt-sync")();

console.clear();

let num1 = Number(prompt("Digite o número 1: "));
let num2 = Number(prompt("Digite o número 2: "));

let sum = num1 + num2;
console.log(`${num1} + ${num2} = ${sum.toFixed(2)}`);

let sub = num1 - num2;
console.log(`${num1} - ${num2} = ${sub.toFixed(2)}`);

let mult = num1 * num2;
console.log(`${num1} * ${num2} = ${mult.toFixed(2)}`);

let div = num1 / num2;
console.log(`${num1} / ${num2} = ${div.toFixed(2)}`);

let rest = num1 % num2;
console.log(`${num1} % ${num2} = ${rest.toFixed(2)}`);
prompt("");

