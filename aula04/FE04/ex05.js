// Crie uma aplicação que permita converter temperaturas entre as escalas Celsius e Kelvin.
// A aplicação recebe:
// •a temperatura;
// •a escala de conversão pretendida (’C’ ou ’K’).
// Exemplo: as entradas 38 e ’K’ significam converter 38 ◦C para Kelvin.
// Implemente as funções:
// •kelvinToCelsius(temp)
// •celsiusToKelvin(temp)
// Considere as fórmulas:
// tempC = tempK - 273
// tempK = tempC + 273

const prompt = require("prompt-sync")();

const opcao = esperarOpcaoValida("Escolha a escala de conversão ('C' para Celsius, 'K' para Kelvin): ");
const temperatura = lerNumero("Digite a temperatura a converter: ");

switch (opcao) {
	case 'C':
		const tempCelsius = kelvinToCelsius(temperatura);
		console.log(`${temperatura} K é igual a ${tempCelsius.toFixed(2)} °C`);
		break;
	case 'K':
		const tempKelvin = celsiusToKelvin(temperatura);
		console.log(`${temperatura} °C é igual a ${tempKelvin.toFixed(2)} K`);
		break;
	default:
		console.log("Opção inválida. Por favor, escolha 'C' ou 'K'.");
		break;
}

function esperarOpcaoValida(mensagem) {
	let opcao;
	do {
		opcao = prompt(mensagem).toUpperCase();
	} while (opcao !== 'C' && opcao !== 'K');
	return opcao;
}

function lerNumero(mensagem) {
	let num;
	do {
		num = Number(prompt(mensagem));
	} while (isNaN(num));
	return Math.trunc(num);
}

function kelvinToCelsius(tempK) {
	return tempK - 273.15;
}

function celsiusToKelvin(tempC) {
	return tempC + 273.15;
}

