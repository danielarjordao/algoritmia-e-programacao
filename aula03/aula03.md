# Repetições

Em JavaScript, repetições são usadas para executar um bloco de código várias vezes, até que uma condição específica seja atendida. Existem várias estruturas de repetição em JavaScript, sendo as mais comuns o `for`, `while` e `do...while`.

## Estrutura `do...while`

A estrutura `do...while` é semelhante ao `while`, mas a diferença principal é que o bloco de código dentro do `do` é executado pelo menos uma vez, antes de verificar a condição no `while`. A sintaxe básica é a seguinte:

```javascript
do {
	// bloco de código a ser executado
} while (condição);
```

## Estrutura `while`

A estrutura `while` executa um bloco de código enquanto uma condição especificada for verdadeira. A sintaxe básica é a seguinte:

```javascript
while (condição) {
	// bloco de código a ser executado
}
```

## Estrutura `for`

A estrutura `for` é usada para repetir um bloco de código um número específico de vezes. A sintaxe básica é a seguinte:

```javascript
for (inicialização; condição; incremento) {
	// bloco de código a ser executado
}
```

## for...in

A estrutura `for...in` é usada para iterar sobre as propriedades enumeráveis de um objeto. A sintaxe básica é a seguinte:

```javascript
for (variável in objeto) {
	// bloco de código a ser executado
}
```

## for...of

A estrutura `for...of` é usada para iterar sobre objetos iteráveis, como arrays, strings, mapas, conjuntos, entre outros. A sintaxe básica é a seguinte:

```javascript
for (variável of objetoIterável) {
	// bloco de código a ser executado
}
```

## Break e Continue

Dentro das estruturas de repetição, podemos usar as palavras-chave `break` e `continue` para controlar o fluxo da repetição.

- `break`: Encerra a repetição imediatamente, saindo do loop.
- `continue`: Pula a iteração atual e passa para a próxima iteração do loop.

Exemplo de uso do `break` e `continue`:

```javascript
for (let i = 0; i < 10; i++) {
	if (i === 5) {
		break; // Sai do loop quando i é igual a 5
	}
	if (i % 2 === 0) {
		continue; // Pula os números pares
	}
	console.log(i); // Imprime apenas os números ímpares menores que 5
}
```

## Boas práticas e erros comuns

- Usar sempre let ou const, evitar var (problemas de scope).
- Garantir que a condição do ciclo eventualmente se torna falsa evitar ciclos infinitos.
- Atenção aos “off-by-one errors”:
- i < array.length vs i <= array.length.
- Em for...in:
- Não usar para percorrer arrays (pode apanhar propriedades extra).
- Preferir for clássico ou for...of.
	