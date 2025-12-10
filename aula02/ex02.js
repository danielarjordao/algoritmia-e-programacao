// Implemente um algoritmo que leia o salário mensal de um trabalhador
// e determine se ele tem direito a receber o apoio estatal para compensar o aumento dos preços.

const prompt = require("prompt-sync")();

// Ler o salário mensal
let salarioMensal = Number(prompt("Digite o salário mensal do trabalhador: "));

// Determinar se tem direito ao apoio estatal
const limite = 1000;

// Utilize um operador relacional (<=) para comparar o salário mensal com o limite
let temDireitoApoio = salarioMensal <= limite;

// Apresentar o resultado
console.log(`Tem direito ao apoio estatal: ${temDireitoApoio}`);
