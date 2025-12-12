// Algorítimo "Maior de idade"

const prompt = require("prompt-sync")();

// Lê o nome e idade de uma pessoa
let nome = prompt("Digite o nome: ");
let idade = Number(prompt("Digite a idade: "));

// Considera a maioridade aos 18 anos
const maioridade = 18;

// Determina se a pessoa é maior de idade
let maiorDeIdade = idade >= maioridade;

// Apresenta o resultado
console.log(`${nome} é maior de idade? ${maiorDeIdade}`);

// Prima enter para terminar
prompt("Prima Enter para terminar...");
