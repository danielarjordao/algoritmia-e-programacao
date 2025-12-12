// Desenvolva  um  programa  que  receba  uma  quantidade  indefinida  de  informação
// sobre o peso de pessoas e que mostre na consola a média de peso das pessoas
// entre  os  50  e  os  80  quilogramas.  Reflita  acerca  da  melhor  condição  de
// paragem para este caso.

let totalPeso = 0;
let count = 0;

while (prompt("Deseja inserir o peso de uma pessoa (s/n)? ").toLowerCase() === 's') {
	let peso = Number(prompt("Insira o peso da pessoa em kg: "));
	if (peso >= 50 && peso <= 80) {
		totalPeso += peso;
		count++;
	}
}

if (count > 0) {
	let mediaPeso = totalPeso / count;
	console.log(`A média de peso das pessoas entre 50 e 80 kg é: ${mediaPeso.toFixed(2)} kg`);
} else {
	console.log("Nenhum peso entre 50 e 80 kg foi inserido.");
}

