// • Desenvolve um programa que:
// • peça temperaturas até o utilizador escrever -1;
// • valide cada valor;
// • converta todas para Kelvin;
// • calcule a média;
// • indique quantas estavam acima da média

// • Criar pelo menos estas funções:
// • lerTemperatura()
// • celsiusToKelvin(temp)
// • media(total, quantidade)
// • acimaDaMedia(valor, media)

const prompt = require("prompt-sync")();

let sumTemperaturas = 0;
let countTemperaturas = 0;
let temperaturaCelsius = 0;
let temperaturasKelvin = [];

 while (temperaturaCelsius !== -1) {
	temperaturaCelsius = lerTemperatura();
	if (temperaturaCelsius === -1) {
		continue;
	}
	const temperaturaKelvin = celsiusToKelvin(temperaturaCelsius);
	sumTemperaturas += temperaturaKelvin;
	countTemperaturas++;
	temperaturasKelvin.push(temperaturaKelvin);
}

if (countTemperaturas === 0) {
	console.log("Nenhuma temperatura válida foi inserida.");
} else {
	const mediaTemperaturas = media(sumTemperaturas, countTemperaturas);
	console.log(`Média das temperaturas em Kelvin: ${mediaTemperaturas.toFixed(2)}`);

	let countAcimaMedia = 0;
	for (let i = 0; i < temperaturasKelvin.length; i++) {
		if (acimaDaMedia(temperaturasKelvin[i], mediaTemperaturas)) {
			countAcimaMedia++;
		}
	}
	console.log(`Número de temperaturas acima da média: ${countAcimaMedia}`);
}


function lerTemperatura() {
	let temp;
	do {
		temp = Number(prompt("Digite a temperatura em Celsius (-1 para sair): "));
	} while (isNaN(temp) || (temp !== -1 && (temp < -273.15 || temp > 1000)));
	return temp;
}

function celsiusToKelvin(temp) {
	return temp + 273.15;
}

function media(total, quantidade) {
	return total / quantidade;
}

function acimaDaMedia(valor, media) {
	return valor > media;
}


