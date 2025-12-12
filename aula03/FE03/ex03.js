//  Escrever um programa que receba várias temperaturas em graus Celsius e que
// as  converta  em  graus  Kelvin.  No  final  deve  ser  mostrada  uma  listagem  com
// todas as temperaturas inseridas em graus Celsius e a respetiva conversão em
// graus  Kelvin.  Deverá  ainda  informar  o  utilizador  acerca  da  média  das
// temperaturas, assim como a maior e a menor delas em graus Kelvin.
// Considere as seguintes fórmulas:

// tempC = tempK - 273
// tempK = tempC + 273

const prompt = require("prompt-sync")();

let listagem = "Listagem de temperaturas (°C para K):\n";
let totalKelvin = 0;
let count = 0;
let minTempK = 99999;
let maxTempK = -99999;

while (prompt("Deseja inserir uma temperatura em graus Celsius (s/n)? ").toLowerCase() === 's') {
	let tempC = Number(prompt("Insira a temperatura em graus Celsius: "));
	let tempK = tempC + 273;
	listagem += `${tempC} °C = ${tempK} K\n`;
	totalKelvin += tempK;
	if (tempK < minTempK)
		minTempK = tempK;
	if (tempK > maxTempK)
		maxTempK = tempK;
	count++;
}

if (count > 0) {
	let mediaKelvin = totalKelvin / count;

	console.log(listagem);
	console.log(`Média das temperaturas em Kelvin: ${mediaKelvin.toFixed(2)} K`);
	console.log(`Maior temperatura em Kelvin: ${maxTempK} K`);
	console.log(`Menor temperatura em Kelvin: ${minTempK} K`);
} else {
	console.log("Nenhuma temperatura foi inserida.");
}

