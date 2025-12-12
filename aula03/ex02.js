const prompt = require("prompt-sync")();

let contador = 0;
let contadorPares = 0;

do {
	const num = Number(prompt("Digite um número: "));
	if ((num % 2) === 0) {
		contadorPares++;
	}
	contador++;
} while (contador < 10);

console.log(`Você digitou ${contadorPares} números pares.`);
