// Um clube de futebol pretende um programa que lhe facilite o processo de
// classificação de atletas em categorias. A tabela apresentada abaixo, define
// as categorias existentes e também os intervalos de idade que especificam a
// categoria para cada atleta. Com o objetivo de promover as inscrições na
// categoria Juvenil, o clube oferece a taxa de inscrição aos atletas com 11 e
// 12 anos. Certifique-se que o utilizador é lembrado desse facto na sua
// implementação.

// De 11 até 15 anos: Juvenil
// De 16 até 20 anos: Junior
// De 21 até 25 anos: Profissional

// Apresente uma solução para o problema.

const prompt = require('prompt-sync')();

const idade = Number(prompt("Digite a idade do atleta: "));

if (isNaN(idade) || idade <= 0) {
	console.log("Erro: Idade inválida.");
} else if (idade >= 11 && idade <= 15) {
	console.log("Categoria: Juvenil");
	if (idade === 11 || idade === 12) {
		console.log("Parabéns! A taxa de inscrição é gratuita para você.");
	}
} else if (idade >= 16 && idade <= 20) {
	console.log("Categoria: Junior");
} else if (idade >= 21 && idade <= 25) {
	console.log("Categoria: Profissional");
} else {
	console.log("Idade fora das categorias disponíveis.");
}
