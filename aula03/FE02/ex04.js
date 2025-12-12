// Implemente um progema que dados dois valores, divide o primeiro pelo segundo.
// Note que não é possível fazer a divisão por zero, neste caso deve ser apresentada a mensagem adequada

const prompt = require("prompt-sync")();

let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));

if (num2 === 0) {
	console.log("Não é possível fazer a divisão por zero.")
} else {
	let res = num1 / num2;
	console.log(`O resultato é ${res.toFixed(2)}`);
}
