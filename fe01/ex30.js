// Operadores Aritméticos
// * Multiplicação
// / Divisão
// + Adição
// - Subtração
// ** Potenciação
// % Resto da divisão

// ORDEM DE PRECEDÊNCIA (maior para menor):
// 1. Parênteses ()
// 2. Potenciação **
// 3. Multiplicação * e Divisão /
// 4. Adição + e Subtração -

// 1) 2 + 3 * 4
// Multiplicação (*) tem precedência sobre adição (+)
// Cálculo: 2 + (3 * 4) = 2 + 12 = 14
let resultado1 = 2 + 3 * 4;
console.log(`1) 2 + 3 * 4 = ${resultado1}`);

// 2) (2 + 3) * 4
// Parênteses têm maior precedência
// Cálculo: (2 + 3) * 4 = 5 * 4 = 20
let resultado2 = (2 + 3) * 4;
console.log(`2) (2 + 3) * 4 = ${resultado2}`);

// 3) 10 - 2 ** 2
// Potenciação (**) tem precedência sobre subtração (-)
// Cálculo: 10 - (2 ** 2) = 10 - 4 = 6
let resultado3 = 10 - 2 ** 2;
console.log(`3) 10 - 2 ** 2 = ${resultado3}`);

// 4) (10 - 2) ** 2
// Parênteses têm maior precedência
// Cálculo: (10 - 2) ** 2 = 8 ** 2 = 64
let resultado4 = (10 - 2) ** 2;
console.log(`4) (10 - 2) ** 2 = ${resultado4}`);
