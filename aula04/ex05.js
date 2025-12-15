const prompt = require("prompt-sync")();

/*
let total = 0;

function adicionar(valor) {
	total += valor;
}

function media(qtd) {
	return total / qtd;
}
*/

function adicionar(valor, total) {
	total += valor;
	return total;
}

function media(qtd, total) {
	return total / qtd;
}
