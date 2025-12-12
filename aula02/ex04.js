// Determine o resultado das seguintes expressões, considerando as variáveis do tipo lógico e as respetivas atribuições.
// • a = verdadeiro; b = falso; c = falso; d = verdadeiro;
// • a OU (b E c) OU (NAO d OU NAO a);
// • NAO(NAO a OU b) E (c OU d);
// • b E NAO c OU a E d;
// • NAO a E NAO NAO c E d.
// De seguida desenvolva um programa em javascript que permita a confirmação dos resultados obtidos.

const a = true;
const b = false;
const c = false;
const d = true;

const expressao1 = a || (b && c) || (!d || !a);
const expressao2 = !( !a || b) && (c || d);
const expressao3 = b && !c || a && d;
const expressao4 = !a && !!c && d;

console.log(`Resultado da expressão 1: ${expressao1}`); // true
console.log(`Resultado da expressão 2: ${expressao2}`); // true
console.log(`Resultado da expressão 3: ${expressao3}`); // true
console.log(`Resultado da expressão 4: ${expressao4}`); // false
