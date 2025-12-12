// Exercício
// Implemente um programa que determine se é possível realizar um piquenique com base em três condições introduzidas pelo
// utilizador.
// Dados de entrada:
// Está a chover?
// (Introduza ’s’ se chove, ou ’n’ se não
// chove)
// Dia da semana:
// (Número inteiro de 1 a 7, onde 1 representa segunda-
// feira e 7 representa domingo)
// Distância de deslocação (km):
// (Número real positivo)
// Exemplo de output:
// O custo do combustível é 0,50 € por km.
// O limite máximo de despesa em combustível é 5 €.
// Considerações adicionais:
// Condições para ser possível fazer o piquenique:
// Não pode estar a chover (chove == “n”)
// Tem que ser sábado ou domingo
// O custo da deslocação tem que ser ≤ 5 €

const prompt = require("prompt-sync")();

let chuva = prompt("Está a chover? (s/n): ").toLowerCase() === 's' ? 's' : 'n';
let diaSemana = Number(prompt("Digite o dia da semana (1-7): "));
let distancia = Number(prompt("Digite a distância de deslocação em km: "));

const custoPorKm = 0.50;
const limiteDespesa = 5.00;
const custoTotal = distancia * custoPorKm;

const podeFazerPiquenique = chuva && (diaSemana === 6 || diaSemana === 7) && (custoTotal <= limiteDespesa);

console.log(`É possível fazer o piquenique? ${podeFazerPiquenique}`);
