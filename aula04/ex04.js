// • Implementa duas versões da média:
// • média simples
// • média ponderada (pesos 0.3, 0.3, 0.4)
// • Aqui entram:
// • function expressions
// • passar funções como argumento
// • funções como valores

const prompt = require("prompt-sync")();

// Function expressions - funções declaradas como expressões (const nome = function)
// Funções como valores - as funções são armazenadas em variáveis
const mediaSimples = function(n1, n2, n3) {
	return (n1 + n2 + n3) / 3;  // ✓ Média simples
};

const mediaPonderada = function(n1, n2, n3) {
	return n1 * 0.3 + n2 * 0.3 + n3 * 0.4;  // ✓ Média ponderada com pesos 0.3, 0.3, 0.4
};

// Passar funções como argumento - funcMedia é uma função recebida como parâmetro
function calcularMedia(n1, n2, n3, funcMedia) {
	return funcMedia(n1, n2, n3);
}

// Entrada de dados
const nota1 = Number(prompt("Digite a primeira nota: "));
const nota2 = Number(prompt("Digite a segunda nota: "));
const nota3 = Number(prompt("Digite a terceira nota: "));

// Cálculo e exibição das médias
// Função mediaSimples é passada como valor/argumento
const media1 = calcularMedia(nota1, nota2, nota3, mediaSimples);
console.log(`Média Simples: ${media1.toFixed(2)}`);

// Função mediaPonderada é passada como valor/argumento
const media2 = calcularMedia(nota1, nota2, nota3, mediaPonderada);
console.log(`Média Ponderada: ${media2.toFixed(2)}`);
