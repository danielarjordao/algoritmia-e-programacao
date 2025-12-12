// Escreve um programa que declare uma
// variável contador, lhe atribua um valor
// inicial e a incremente várias vezes
// usando diferentes formas de
// incremento.
// • Mostra no ecrã o valor atual da variável
// após cada operação realizada.

let contador = 0;

console.log(`Valor inicial do contador: ${contador}`);

// Incremento usando o operador de atribuição composta
contador += 1;
console.log(`Após incremento com atribuição composta: ${contador}`);

// Incremento usando o operador de adição
contador = contador + 1;
console.log(`Após incremento com operador de adição: ${contador}`);

// Incremento usando o operador de incremento pós-fixado
contador++;
console.log(`Após incremento com operador pós-fixado: ${contador}`);
