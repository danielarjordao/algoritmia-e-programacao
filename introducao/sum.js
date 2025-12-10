// Importa o módulo prompt-sync para entrada de dados
const prompt = require("prompt-sync")();

// prompt para o usuário digitar dois números
// por default, o prompt retorna uma string, então convertemos para Number
let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));

let sum = num1 + num2;

console.log(num1 + " + " + num2 + " = " + sum);
