// Implemente um programa que leia o preço de um determinado produto e que
// inflacione esse preço em 10% se ele for menor que 100 e em 20% se ele for
// maior ou igual a 100.

const prompt = require("prompt-sync")();

let preco = Number(prompt("Digite o preço do produto: "));
let novoPreco = 0;

if (isNaN(preco) || preco <= 0) {
	console.log("Valor inválido.");
} else if (preco < 100) {
	novoPreco = preco * 1.1;
} else if (preco >= 100) {
	novoPreco = preco * 1.2;
}

if (novoPreco > 0) {
	console.log(`O novo preço do produto é R$ ${novoPreco.toFixed(2)}.`);
}
