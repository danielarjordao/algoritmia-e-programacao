import seguros from './Apolice.js';
import entidade from './Tomador.js';
import segurados from './Segurados.js';
import seguradora from './Seguradoras.js';
import auxiliar from './Auxiliar.js';

let apolices = [];

do {
	let novaApolice = new seguros();
	apolices.push(novaApolice);
} while (auxiliar.continuarOperacao("Deseja adicionar outra apólice? (s/n): "));

console.log("\nLista de Apólices:");
auxiliar.imprimirArray(apolices);


let entidades = [];

do {
	let novaEntidade = new entidade();
	entidades.push(novaEntidade);
} while (auxiliar.continuarOperacao("Deseja adicionar outra entidade? (s/n): "));

console.log("\nLista de Entidades:");
auxiliar.imprimirArray(entidades);
