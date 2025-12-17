# Arrays

## O que é um Array?

- Estrutura de dados que armazena uma coleção de elementos.
- Cada elemento pode ser acessado por um índice.
- Estrutura ordenada, onde a ordem dos elementos é mantida.

## Arrays em JavaScript

- São dinâmicos, ou seja, podem crescer e diminuir conforme necessário.
- Podem armazenar diferentes tipos de dados (números, strings, objetos, etc.).
- São objetos
- São passados nas funções por referência.
- Encapsulam métodos úteis para manipulação de dados.

## Índices e acesso aos elementos

- Índices começam em 0.
- Índices inválidos retornam `undefined`.
- Não gerenciam erros de acesso.

```javascript
const arr = [10, 20, 30, 40];
console.log(arr[0]); // 10
console.log(arr[1]); // 20
console.log(arr[2]); // 30
console.log(arr[3]); // 40
console.log(arr[4]); // undefined
```

## Tamanho do Array

- Propriedade `length` retorna o número de elementos no array.

```javascript
const arr = [10, 20, 30, 40];
console.log(arr.length); // 4
```

## Percorrendo Arrays

- Usando loops `for`, `for...of`, `for..in`.

```javascript
const arr = [10, 20, 30, 40];
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
for (const value of arr) {
	console.log(value);
}
for (let n in arr) {
	console.log(arr[n]);
}
```

## Pesquisa de Elementos

- Percorrer o array e comparar cada elemento com o valor desejado.
- Descobrir a sua posição ou se existe no array.

## Ordenação de Arrays

- Reordenar os elementos com base em critérios específicos.
- Ascendente, descendente, alfabética, numérica, etc.

### Ordenação por seleção

- Encontrar o menor (ou maior) elemento e colocá-lo na posição correta.
- Repetir o processo para os elementos restantes.
