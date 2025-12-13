//  Analise a forma geométrica apresentada na imagem seguinte, desenhada por uma
// aplicação do tipo consola.

// ‣Crie um programa que desenhe um quadrado, em que o tamanho do lado e o
// caracter de preenchimento são dados inseridos pelo utilizador.
// ‣Evolua o programa anterior de forma a permitir também desenhar
// retângulos (dois lados indicados pelo utilizador).
// ‣Evolua ainda o mesmo programa, para que apenas as arestas sejam
// desenhadas, ou seja, a forma não tenha preenchimento.

const prompt = require("prompt-sync")();

let forma = prompt("Digite a largura da forma: ");
let altura = prompt("Digite a altura da forma: ");
let caractere = prompt("Digite o caractere de preenchimento: ");

if (isNaN(forma) || isNaN(altura) || forma <= 0 || altura <= 0) {
	console.log("Por favor, insira valores válidos para largura e altura.");
	process.exit(1);
} else {
	forma = Math.trunc(Number(forma));
	altura = Math.trunc(Number(altura));

	for (let i = 0; i < altura; i++) {
		let linha = "";
		for (let j = 0; j < forma; j++) {
			// Verifica se está na borda
			if (i === 0 || i === altura - 1 || j === 0 || j === forma - 1) {
				linha += caractere;
			} else {
				// Espaço interno
				linha += " ";
			}
		}
		console.log(linha);
	}
}
