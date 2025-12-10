const prompt = require("prompt-sync")();

// Ler o valor em segundos
let totalSegundos = Number(prompt("Digite o valor em segundos: "));
let restante = totalSegundos;

// Calcular dias (1 dia = 86400 segundos)
let dias = Math.trunc(restante / 86400);
restante = restante % 86400;

// Calcular horas (1 hora = 3600 segundos)
let horas = Math.trunc(restante / 3600);
restante = restante % 3600;

// Calcular minutos (1 minuto = 60 segundos)
let minutos = Math.trunc(restante / 60);
restante = restante % 60;

// Segundos restantes
let segundos = restante;

// Apresentar no formato d h m s
console.log(`${dias}d ${horas}h ${minutos}m ${segundos}s`);
