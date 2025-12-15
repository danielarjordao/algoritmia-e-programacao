const prompt = require("prompt-sync")();

const NUM = Number(prompt("Digite um número: "));
const POT = Number(prompt("Digite a potência: "));

const resultado = potencia(NUM, POT);
console.log(`${NUM}^${POT} = ${resultado}`);

function potencia(num, pot) {
	if (pot === 0) {
		return 1;
	}
	return num * potencia(num, pot - 1);
}
