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

// Ler hora, minutos e segundos
let horas = Number(prompt("Digite as horas: "));
let minutos = Number(prompt("Digite os minutos: "));
let segundos = Number(prompt("Digite os segundos: "));

// Calcular o total de segundos desde 00:00:00
let totalSegundos = (horas * 3600) + (minutos * 60) + segundos;

// Apresentar o resultado
console.log(`Total de segundos = ${totalSegundos}`);
