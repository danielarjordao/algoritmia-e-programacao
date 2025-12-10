const prompt = require("prompt-sync")();

let xStr = prompt("Introduz o primeiro número: ");
let yStr = prompt("Introduz o segundo número: ");

// Converter xStr e yStr para número
let x = Number(xStr);
let y = Number(yStr);

// Calcular a média
let media = (x + y) / 2;

// Mostrar o resultado com console.log
console.log(`A média de ${x} e ${y} é ${media.toFixed(1)}`);
