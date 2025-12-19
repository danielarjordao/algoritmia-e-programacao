const prompt = require("prompt-sync")();

const a = [1, 2, 3];

console.log("Array inicial: ");
printArray(a);

// Adiciona no fim
a.push(10);

console.log("Depois do a.push(10): ");
printArray(a);

// Remove do fim
if (a.length > 0)
	a.pop();

console.log("Depois do a.pop(): ");
printArray(a);

// Adiciona no início
a.unshift(5);

console.log("Depois do a.unshift(5): ");
printArray(a);

//Remove do início
if (a.length > 0)
	a.shift();

console.log("Depois do a.shift(): ");
printArray(a);

// Remove 2 elementos a partir do índice 1
// a.splice(a partir de qual índice, quantos elementos)
a.splice(1, 1);

console.log("Depois do a.splice(1, 1): ");
printArray(a);

// Quando colocado 0 como segundo argumento, significa inserir
// a.splice(a partir de qual índice, 0 para inserir, argumento a inserir)
a.splice(1, 0, 15);

console.log("Depois do a.splice(1, 0, 15): ");
printArray(a);

// Quando colocado 1 como segundo argumento, significa substituir
// a.splice(qual índice substituir, 1 para substituir, argumento a inserir)
a.splice(1, 1, 10);

console.log("Depois do a.splice(1, 1, 10): ");
printArray(a);

// slice() = cria uma cópia integral do array
const copia = a.slice();

console.log("Cópia depois de copia = copia.splice(): ");
printArray(copia);

// cópia parcial
// a.slice(índice inicial, índice final)
const copiaParcial = a.slice(1, 2);

console.log("Cópia parcial depois de copiaParcial = copiaParcial.slice(1, 2): ");
printArray(copiaParcial);

// Devolve o índice da primeira ocorrência
// Se não tiver ocorrência devolve o -1
// a.indexOf(número para procurar)
console.log("Procurar a.indexOf(3) no array: ");
printArray(a);
console.log(`Resultado: ${a.indexOf(3)}`);

// Devolve true se houver ocorrência e false se não houver
// a.includes(número para procurar)
console.log("Procurar a.includes(3) no array: ");
printArray(a);
console.log(`Resultado: ${a.includes(3)}`);

// Desenvolver myInclude
console.log("Procurar myIncludes(a, 3) no array: ");
printArray(a);
console.log(`Resultado: ${myIncludes(a, 3)}`);

// filter a.filter((argumento) => condição)
// devolve um novo array com os elementos que satisfazem a condição
console.log("Filtrar a.filter((x) => x > 2) no array: ");
printArray(a);
const filtered = a.filter((x) => x > 2);
console.log("Resultado: ");
printArray(filtered);

// find a.find((argumento) => condição)
// devolve o primeiro elemento que satisfaz a condição
console.log("Procurar a.find((x) => x > 2) no array: ");
printArray(a);
const found = a.find((x) => x > 2);
console.log(`Resultado: ${found}`);

// 0 map a.map((argumento) => transformação)
// devolve um novo array com os elementos transformados
console.log("Transformar a.map((x) => x * 2) no array: ");
printArray(a);
const mapped = a.map((x) => x * 2);
console.log("Resultado: ");
printArray(mapped);

// reduce a.reduce((acumulador, argumento) => transformação, valor inicial do acumulador)
// devolve um único valor resultante da transformação de todos os elementos
// Exemplo de produto de todos os elementos
console.log("Reduzir a.reduce((acc, x) => acc * x, 1) no array: ");
printArray(a);
const reduced = a.reduce((acc, x) => acc * x, 1);
console.log(`Resultado: ${reduced}`);

// reduce com expressão ternária
// Exemplo para encontrar o maior elemento
console.log("Reduzir a.reduce((acc, x) => (x > acc ? x : acc), a[0]) no array: ");
printArray(a);
const max = a.reduce((acc, x) => (x > acc ? x : acc), a[0]);
console.log(`Resultado: ${max}`);


function printArray(arr) {
	for (let i = 0; i <  arr.length; i++)
		console.log(arr[i]);
}

function myIncludes(arr, num) {
	let find = false;
	let i = 0;
	while (i < arr.length && !find) {
		if (arr[i] === num)
			find = true;
		i++;
	}
	return find;
}
