/*
Fluxograma

Converter horas, minutos e segundos em segundos.

Início

ler horas
	|
ler minutos
	|
ler segundos
	|
totalSegundos ← (horas * 3600) + (minutos * 60) + segundos
	|
escrever totalSegundos

Fim

*/

const prompt = require("prompt-sync")();

console.clear();

let horas = Number(prompt("Digite as horas: "));
let minutos = Number(prompt("Digite os minutos: "));
let segundos = Number(prompt("Digite os segundos: "));

let totalSegundos = (horas * 3600) + (minutos * 60) + segundos;

console.log(`O total em segundos é: ${totalSegundos}`);

prompt("");
