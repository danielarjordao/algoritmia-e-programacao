let a = 3, b = 7, c = 4;
let resultado;

console.log(`Valores: a = ${a}, b = ${b}, c = ${c}`);

// 1.
resultado = (a + b) > b;
console.log(`(a + b) > b: ${resultado}`);

// 2.
resultado = b >= (a + 2);
console.log(`b >= (a + 2): ${resultado}`);

// 3.
resultado = c === b - a;
console.log(`c === b - a: ${resultado}`);

// 4.
resultado = (b + a) <= c;
console.log(`(b + a) <= c: ${resultado}`);

// 5.
resultado = (c + a) > b;
console.log(`(c + a) > b: ${resultado}`);
