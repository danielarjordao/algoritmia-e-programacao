const prompt = require("prompt-sync")();

// Ler litros consumidos, quilómetros percorridos e custo por litro
let litros = Number(prompt("Digite os litros consumidos: "));
let quilometros = Number(prompt("Digite os quilómetros percorridos: "));
let custoPorLitro = Number(prompt("Digite o custo do combustível por litro: "));

// Calcular o consumo em L/100 km e o custo total
let consumo = (litros / quilometros) * 100;
let custoTotal = litros * custoPorLitro;

// Apresentar os resultados
console.log(`Consumo: ${consumo.toFixed(1)} L/100km`);
console.log(`Custo total da viagem: ${custoTotal.toFixed(2)}`);
