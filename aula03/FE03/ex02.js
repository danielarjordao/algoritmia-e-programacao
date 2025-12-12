// Foi efetuado um questionário a um número indeterminado de pessoas num centro
// comercial.  A  todas  as  pessoas  foi  solicitado  o  género,  a  idade  e  quanto
// pretendem  gastar  nas  comprar  de  Natal.  Implemente  uma  aplicação  capaz  de
// calcular e informar:
// ‣Numero de pessoas de género feminino e masculino;
// ‣Quantidade  de  pessoas  de  género  feminino  com  mais  de  40  anos  e  que
// tencionam gastar mais de 200 euros em compras.
// ‣Média do valor em compras que as pessoas estão dispostas a gastar.

let countFeminino = 0;
let countMasculino = 0;
let countFeminino40Mais200 = 0;
let totalGasto = 0;
let totalPessoas = 0;

while (prompt("Deseja inserir os dados de uma pessoa (s/n)? ").toLowerCase() === 's') {
	let genero = prompt("Insira o género da pessoa (f/m): ").toLowerCase();
	let idade = Number(prompt("Insira a idade da pessoa: "));
	let gasto = Number(prompt("Quanto pretende gastar nas compras de Natal (em euros)? "));

	if (genero === 'f') {
		countFeminino++;
		if (idade > 40 && gasto > 200) {
			countFeminino40Mais200++;
		}
	} else if (genero === 'm') {
		countMasculino++;
	}

	totalGasto += gasto;
	totalPessoas++;
}

if (totalPessoas > 0) {
	let mediaGasto = totalGasto / totalPessoas;
	console.log(`Número de pessoas do género feminino: ${countFeminino}`);
	console.log(`Número de pessoas do género masculino: ${countMasculino}`);
	console.log(`Número de mulheres com mais de 40 anos que pretendem gastar mais de 200 euros: ${countFeminino40Mais200}`);
	console.log(`Média do valor em compras que as pessoas estão dispostas a gastar: ${mediaGasto.toFixed(2)} euros`);
} else {
	console.log("Nenhum dado foi inserido.");
}

