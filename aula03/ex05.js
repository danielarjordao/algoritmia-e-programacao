const prompt = require("prompt-sync")();

let n = 0;
let soma = 0;
let maiorTemperatura = -99999;

let continuar = prompt("Bem vindo! Vamos Lançar temperaturas? S | N ").toLocaleLowerCase === "s";

while (continuar) {
	const temperatura = Number(prompt("Temperatura: "));
	soma += temperatura;
	n++;

	if (maiorTemperatura < temperatura) {
		maiorTemperatura = temperatura;
	}

	continuar = prompt("Continuar? S | N: ").toLowerCase() === "s";
}

if (n === 0) {
	console.log("Não foram lançados dados!");
} else {
	let media = soma / n;
	console.log(`A média de temperaturas é ${media}.`);
	console.log(`A maior temperatura é ${maiorTemperatura}.`)
}
