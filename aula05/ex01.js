let numeros = [3, 7, 9, 4, 6, 2];
let soma = 0;

for (let n in numeros) {
	soma+= numeros[n];
}

console.log(`A soma dos elementos do array é: ${soma}`);

