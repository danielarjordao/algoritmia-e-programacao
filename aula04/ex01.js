const prompt = require("prompt-sync")();

let nota1 = -1;
let nota2 = -1;
let nota3 = -1;

do {
	nota1 = Number(prompt("NOTA 1 (0-20): "));
} while (nota1 < 0 || nota1 > 20);

do {
	nota2 = Number(prompt("NOTA 2 (0-20): "));
} while (nota2 < 0 || nota2 > 20);

do {
	nota3 = Number(prompt("NOTA 3 (0-20): "));
} while (nota3 < 0 || nota3 > 20);

console.log(`Nota 1: ${nota1}`);
console.log(`Nota 2: ${nota2}`);
console.log(`Nota 3: ${nota3}`);
