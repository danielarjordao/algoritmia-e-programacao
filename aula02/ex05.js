// Condições para conseguir conduzir:
// • Tem carta de condução;
// • Idade mínima de 22 anos;
// • Altura mínima de 1,5 m (para chegar
// aos pedais).

const prompt = require("prompt-sync")();

let nome = prompt("Digite o seu nome: ");
let idade = Number(prompt("Digite sua idade: "));
let altura = Number(prompt("Digite sua altura em metros: "));

let cartaConducao = prompt("Você tem carta de condução? (s/n): ").toLowerCase() === 's';

const consegueConduzir = altura >= 1.5 && (idade >= 22 || cartaConducao);

console.log(`${nome}, consegue conduzir? ${consegueConduzir}`);
