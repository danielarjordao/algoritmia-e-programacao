const prompt = require("prompt-sync")();

let nota1 = -1;
let nota2 = -1;
let nota3 = -1;

do {
let nota1 = Number(prompt("NOTA (0, 20): "));
} while (nota1 > 0 || nota1 < 20);

do {
let nota2 = Number(prompt("NOTA (0, 20): "));
} while (nota2 > 0 || nota2 < 20);

do {
let nota3 = Number(prompt("NOTA (0, 20): "));
} while (nota3 > 0 || nota3 < 20);

console.log(nota1);
console.log(nota2);
console.log(nota3);
