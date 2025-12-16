// Numa determinada empresa há a necessidade de criar uma aplicação que
// identifique o tipo de cliente em função do seu volume de compras anual (ver
// quadro seguinte).

// Normal até 5.000 €
// Profissional até 20.000 € €
// Empresarial até 999.999,99 €

// Desenvolva um algoritmo capaz de automatizar esta identificação e, de seguida,
// sugira uma implementação.

const prompt = require('prompt-sync')();

const volumeCompras = Number(prompt("Digite o volume de compras anual (€): "));

if (isNaN(volumeCompras) || volumeCompras < 0) {
	console.log("Erro: Volume de compras inválido.");
} else if (volumeCompras <= 5000) {
	console.log("Tipo de cliente: Normal");
} else if (volumeCompras <= 20000) {
	console.log("Tipo de cliente: Profissional");
} else if (volumeCompras < 1000000) {
	console.log("Tipo de cliente: Empresarial");
} else {
	console.log("Volume de compras fora dos limites estabelecidos.");
}

