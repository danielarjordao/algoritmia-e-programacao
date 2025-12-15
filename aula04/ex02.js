const prompt = require("prompt-sync")();

function lerNumero(min, max, msg) {
	let nota;
	do {
		nota = Number(prompt(msg));
	} while (nota < min || nota > max);
	return nota;
}

const MIN = 0;
const MAX = 20;
const MSG = "NÚMERO (0, 20): ";

let nota1 = lerNumero(MIN, MAX, MSG);
let nota2 = lerNumero(MIN, MAX, MSG);
let nota3 = lerNumero(MIN, MAX, MSG);

console.log(nota1);
console.log(nota2);
console.log(nota3);
