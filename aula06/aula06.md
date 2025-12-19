# Arrays e métodos de array

## Shift e Unshift

Os métodos `shift` e `unshift` são usados para manipular o início de um array em JavaScript.

- `shift()`: Remove o primeiro elemento de um array e retorna esse elemento. Esse método altera o comprimento do array.

``` javascript
let frutas = ['maçã', 'banana', 'laranja'];
let primeiraFruta = frutas.shift();
console.log(primeiraFruta); // Output: 'maçã'
console.log(frutas); // Output: ['banana', 'laranja']
```

- `unshift(elemento1, elemento2, ...)`: Adiciona um ou mais elementos ao início de um array e retorna o novo comprimento do array.

``` javascript
let frutas = ['banana', 'laranja'];
let novoComprimento = frutas.unshift('maçã', 'uva');
console.log(novoComprimento); // Output: 4
console.log(frutas); // Output: ['maçã', 'uva', 'banana', 'laranja']
```

### Push e Pop

Os métodos `push` e `pop` são usados para manipular o final de um array em JavaScript.

- `push(elemento1, elemento2, ...)`: Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.

``` javascript
let frutas = ['maçã', 'banana'];
let novoComprimento = frutas.push('laranja', 'uva');
console.log(novoComprimento); // Output: 4
console.log(frutas); // Output: ['maçã', 'banana', 'laranja', 'uva']
```

- `pop()`: Remove o último elemento de um array e retorna esse elemento. Esse método altera o comprimento do array.

``` javascript
let frutas = ['maçã', 'banana', 'laranja'];
let ultimaFruta = frutas.pop();
console.log(ultimaFruta); // Output: 'laranja'
console.log(frutas); // Output: ['maçã', 'banana']
```

## Splice

O método `splice` é usado para adicionar, remover ou substituir elementos em um array.

### Sintaxe

``` javascript
array.splice(indice, numeroDeElementosARemover, elemento1, elemento2, ...);
```

- `indice`: A posição no array onde as alterações começarão.
- `numeroDeElementosARemover`: O número de elementos a serem removidos a partir do índice especificado.
- `elemento1, elemento2, ...`: Os elementos a serem adicionados ao array a partir do índice especificado.

### Exemplos

``` javascript
let frutas = ['maçã', 'banana', 'laranja', 'uva'];
// Remover 1 elemento a partir do índice 1
let removidos = frutas.splice(1, 1);
console.log(removidos); // Output: ['banana']
console.log(frutas); // Output: ['maçã', 'laranja', 'uva']
// Adicionar elementos a partir do índice 1
frutas.splice(1, 0, 'kiwi', 'manga');
console.log(frutas); // Output: ['maçã', 'kiwi', 'manga', 'laranja', 'uva']
// Substituir 2 elementos a partir do índice 2
frutas.splice(2, 2, 'abacaxi', 'coco');
console.log(frutas); // Output: ['maçã', 'kiwi', 'abacaxi', 'coco', 'uva']
```

## Slice

O método `slice` é usado para criar uma cópia superficial de uma parte de um array em um novo array.

### Sintaxe

``` javascript
array.slice(inicio, fim);
```

- `inicio`: O índice onde a extração começa (inclusivo).
- `fim`: O índice onde a extração termina (exclusivo). Se omitido, o slice vai até o final do array.

### Exemplos

``` javascript
let frutas = ['maçã', 'banana', 'laranja', 'uva', 'kiwi'];
let citricas = frutas.slice(1, 4);
console.log(citricas); // Output: ['banana', 'laranja', 'uva']
let todasAsFrutas = frutas.slice();
console.log(todasAsFrutas); // Output: ['maçã', 'banana', 'laranja', 'uva', 'kiwi']
```

## IndexOf e includes

Os métodos `indexOf` e `includes` são usados para procurar elementos em um array.

- `indexOf(elemento, indiceInicial)`: Retorna o primeiro índice em que um determinado elemento pode ser encontrado no array, ou -1 se não estiver presente. O parâmetro `indiceInicial` é opcional e especifica o índice a partir do qual a busca deve começar.

``` javascript
let frutas = ['maçã', 'banana', 'laranja', 'banana'];
let indice = frutas.indexOf('banana');
console.log(indice); // Output: 1
let indiceNaoEncontrado = frutas.indexOf('uva');
console.log(indiceNaoEncontrado); // Output: -1
```

- `includes(elemento, indiceInicial)`: Retorna um valor booleano indicando se o array contém um determinado elemento. O parâmetro `indiceInicial` é opcional e especifica o índice a partir do qual a busca deve começar.

``` javascript
let frutas = ['maçã', 'banana', 'laranja'];
let temBanana = frutas.includes('banana');
console.log(temBanana); // Output: true
let temUva = frutas.includes('uva');
console.log(temUva); // Output: false
```

## Filter and Find

Os métodos `filter` e `find` são usados para buscar elementos em um array com base em uma condição fornecida por uma função callback.

- `filter`: Cria um novo array com todos os elementos que passam no teste da condição fornecida.

### Sintaxe

``` javascript
array.filter((argumento) => condição);
```

``` javascript
let numeros = [1, 2, 3, 4, 5, 6];
let numerosPares = numeros.filter((numero) => numero % 2 === 0);
console.log(numerosPares); // Output: [2, 4, 6]
```

- `find`: Retorna o primeiro elemento do array que satisfaz a condição fornecida pela função callback. Se nenhum elemento for encontrado, retorna `undefined`.

### Sintaxe
``` javascript
array.find((argumento) => condição);
```

``` javascript
let numeros = [1, 2, 3, 4, 5, 6];
let primeiroNumeroPar = numeros.find((numero) => numero % 2 === 0);
console.log(primeiroNumeroPar); // Output: 2
```

## Map

O método `map` é usado para criar um novo array com os resultados da chamada de uma função para cada elemento do array original.

### Sintaxe

``` javascript
array.map((argumento) => expressão);
```

``` javascript
let numeros = [1, 2, 3, 4, 5];
let numerosAoQuadrado = numeros.map((numero) => numero * numero);
console.log(numerosAoQuadrado); // Output: [1, 4, 9, 16, 25]
```

## Reduce

O método `reduce` é usado para reduzir um array a um único valor, aplicando uma função a um acumulador e a cada elemento do array (da esquerda para a direita).

### Sintaxe

``` javascript
array.reduce((acumulador, elementoAtual) => expressão, valorInicial);
```

``` javascript
let numeros = [1, 2, 3, 4, 5];
let soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(soma); // Output: 15
```

### Uso do reduce

- Somar todos os números em um array
- Encontrar o valor máximo em um array
- Contar a ocorrência de elementos em um array
- Agrupar objetos por uma propriedade específica


### Exemplo de reduce com ternário

``` javascript
let numeros = [1, 2, 3, 4, 5];
let maximo = numeros.reduce((acumulador, numero) => (numero > acumulador ? numero : acumulador), numeros[0]);
console.log(maximo); // Output: 5
```

# Objetos

Os objetos em JavaScript são coleções de propriedades, onde cada propriedade é uma associação entre uma chave (ou nome) e um valor. Eles são usados para armazenar dados estruturados e podem conter diferentes tipos de valores, incluindo outros objetos, arrays, funções, etc.

- Agrupamento de dados relacionados
- Cada valor pode ser acessado usando a chave correspondente
- Melhor leitura e manutenção do código

``` javascript
let pessoa = {
	nome: 'João',
	idade: 30,
	cidade: 'São Paulo',
	saudacao: function() {
		console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
	}
};

console.log(pessoa.nome); // Output: 'João'
pessoa.saudacao(); // Output: 'Olá, meu nome é João e tenho 30 anos.'
```

## Métodos de Objetos

Os métodos de objetos em JavaScript são funções que são propriedades de um objeto. Eles permitem que você defina comportamentos específicos para o objeto, encapsulando a lógica relacionada aos dados do objeto.

``` javascript
const pessoa = {
	nome: 'Maria',
	idade: 25,
	cumprimentar: function() {
		console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
	},
	aniversario: function() {
		this.idade += 1;
		console.log(`Feliz aniversário, ${this.nome}! Agora você tem ${this.idade} anos.`);
	}
};

pessoa.cumprimentar(); // Output: 'Olá, meu nome é Maria e tenho 25 anos.'
pessoa.aniversario(); // Output: 'Feliz aniversário, Maria! Agora você tem 26 anos.'
```

## Coleções de Entidades

Em programação, uma coleção de entidades refere-se a um conjunto de objetos que compartilham características ou propriedades semelhantes. Essas entidades podem ser armazenadas em estruturas de dados como arrays, listas ou conjuntos, permitindo que você gerencie e manipule grupos de objetos relacionados de maneira eficiente.

Por exemplo, em um sistema de gerenciamento de biblioteca, você pode ter uma coleção de entidades chamadas "Livros". Cada livro pode ser representado como um objeto com propriedades como título, autor, ano de publicação e ISBN. A coleção de livros pode ser armazenada em um array, permitindo que você adicione, remova ou pesquise livros facilmente.

``` javascript
let livros = [
	{ titulo: '1984', autor: 'George Orwell', ano: 1949, isbn: '1234567890' },
	{ titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', ano: 1954, isbn: '0987654321' },
	{ titulo: 'A Revolução dos Bichos', autor: 'George Orwell', ano: 1945, isbn: '1122334455' }
];
```

Você pode então usar métodos de array, como `filter`, `map` e `reduce`, para manipular essa coleção de entidades conforme necessário.

# Classes

As classes em JavaScript são uma forma de definir objetos e seus comportamentos de maneira mais estruturada e orientada a objetos. Introduzidas no ECMAScript 2015 (ES6), as classes fornecem uma sintaxe mais clara e concisa para criar objetos e lidar com herança.

## Definição de Classe

- Criar moldes reutilizáveis para objetos
- Evitar repetição de código
- Facilitar a manutenção e a organização do código

``` javascript
class Pessoa {
	constructor(nome, idade) {
		this.nome = nome;
		this.idade = idade;
	}
	cumprimentar() {
		console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
	}
}

let pessoa1 = new Pessoa('Carlos', 28);
pessoa1.cumprimentar(); // Output: 'Olá, meu nome é Carlos e tenho 28 anos.'
```
