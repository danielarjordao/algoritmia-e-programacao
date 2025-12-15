const prompt = require("prompt-sync")();

const NOME = prompt("Digite o seu nome: ");

cumprimentar(NOME, despedir);

function cumprimentar(nome, callback) {
	console.log(`Olá, ${nome}!`);
	callback(nome);
}

function despedir(nome) {
	console.log(`Até já, ${nome}!`);
}
