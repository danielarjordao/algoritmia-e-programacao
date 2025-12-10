let res1 = 1 + 2;
console.log(`1) 1 + 2 = ${res1} | tipo: ${typeof res1}`);

let res2 = "1" + 2;
console.log(`2) "1" + 2 = ${res2} | tipo: ${typeof res2}`);

let res3 = 1 + "2";
console.log(`3) 1 + "2" = ${res3} | tipo: ${typeof res3}`);

let res4 = 1 == "1";
console.log(`4) 1 == "1" = ${res4} | tipo: ${typeof res4}`);

let res5 = 1 === "1";
console.log(`5) 1 === "1" = ${res5} | tipo: ${typeof res5}`);

let res6 = typeof 42;
console.log(`6) typeof 42 = ${res6} | tipo: ${typeof res6}`);

let res7 = typeof "42";
console.log(`7) typeof "42" = ${res7} | tipo: ${typeof res7}`);

let res8 = typeof true;
console.log(`8) typeof true = ${res8} | tipo: ${typeof res8}`);

let res9 = typeof null;
console.log(`9) typeof null = ${res9} | tipo: ${typeof res9}`);

let res10 = typeof undefined;
console.log(`10) typeof undefined = ${res10} | tipo: ${typeof res10}`);

// Explicações:
// 1) Soma de dois números resulta em número.
// 2) Concatenar string com número resulta em string.
// 3) Concatenar número com string resulta em string.
// 4) Comparação com coerção de tipo resulta em booleano true.
// 5) Comparação sem coerção de tipo resulta em booleano false.
// 6) typeof de um número retorna "number".
// 7) typeof de uma string retorna "string".
// 8) typeof de um booleano retorna "boolean".
// 9) typeof de null retorna "object" (um comportamento histórico do JavaScript).
// 10) typeof de undefined retorna "undefined".
