# Operadores relacionais

Operadores relacionais são usados para comparar dois valores e retornar um valor booleano (`true` ou `false`) com base na comparação.

## Tabela de operadores
| Operador | Descrição                  | Exemplo      | Resultado |
|----------|----------------------------|--------------|-----------|
| `<`      | Menor que                  | `3 < 5`      | `true`    |
| `>`      | Maior que                  | `5 > 3`      | `true`    |
| `<=`     | Menor ou igual a           | `3 <= 5`     | `true`    |
| `>=`     | Maior ou igual a           | `5 >= 5`     | `true`    |
| `==`     | Igualdade                  | `5 == 5`     | `true`    |
| `===`    | Estritamente igual         | `5 === '5'`  | `false`   |
| `!=`     | Diferença                  | `5 != 3`     | `true`    |
| `!==`    | Estritamente diferente     | `5 !== '5'`  | `true`    |
|----------|----------------------------|--------------|-----------|

### Cuidados ao usar operadores relacionais
- Diferença entre `==` e `===`: O operador `==` compara valores após conversão de tipo, enquanto `===` compara valores e tipos sem conversão.

# Operadores lógicos

Operadores lógicos são usados para combinar expressões booleanas e retornar um valor booleano.

## Tabela de operadores
| Operador | Descrição          | Exemplo         | Resultado |
|----------|--------------------|-----------------|-----------|
|` & / &&` | E lógico           | `true && false` | `false`   |
|`| / ||`  | OU lógico          | `true || false` | `true`    |
|`!`       | Negação lógica     | `!true`         | `false`   |
|----------|--------------------|-----------------|-----------|

### Short-circuit - && e || tem comportamento especial
- No operador `&&`, se o primeiro operando for `false`, o segundo não é executado.
- - Ex: false && console.log("Isso não acontece");
- No operador `||`, se o primeiro operando for `true`, o segundo não é executado.
- - Ex: true || console.log("Isso não acontece");
- Outra situacão comum é usar `||` para definir valores padrão:
- - Ex: let nome = entradaNome || "Anônimo";

# Precedência de operadores
1. Aritméticos: `*`, `/`, `%`, `+`, `-`
2. Relacionais: `<`, `>`, `<=`, `>=`, `==`, `===`, `!=`, `!==`
3. Negação lógica: `!`
4. E lógico: `&&`
5. OU lógico: `||`

# Operador ternário

O operador ternário é uma forma concisa de expressar uma condição `if-else` em uma única linha.

## Estruturas de controlo condicional

- se... então / if...
- se... então... senão / if... else...
- se... então... senão se... então... / if... else if... else...
- Se... então... senão se... então / switch case

## Estrutura básica
```javascript
if (condição1) {
	// bloco de código se condição1 for verdadeira
} else if (condição2) {
	// bloco de código se condição2 for verdadeira
} else {
	// bloco de código se nenhuma condição for verdadeira
}
```

# Switch case

O `switch` é uma estrutura de controle que permite selecionar entre múltiplas opções com base no valor de uma expressão.

## Estrutura básica
```javascript
switch (expressão) {
	case valor1:
		// bloco de código para valor1
		break;
	case valor2:
		// bloco de código para valor2
		break;
	// mais casos...
	default:
		// bloco de código se nenhum caso corresponder
}
```
## Truthy e Falsy

Em JavaScript, valores podem ser avaliados como "truthy" (verdadeiros) ou "falsy" (falsos) em contextos booleanos.

### Valores Falsy
- `false`
- `0`
- `""` (string vazia)
- `null`
- `undefined`
- `NaN`

### Valores Truthy
- Qualquer valor que não seja falsy é considerado truthy, como:
- `true`
- Números diferentes de zero (ex: `1`, `-1`)
- Strings não vazias (ex: `"hello"`)
- Objetos (ex: `{}`, `[]`)

#### NaN - Not a Number

`NaN` é um valor especial em JavaScript que representa um valor que não é um número válido. Ele é do tipo `number`, mas indica uma operação matemática inválida.

#### Undefined em JavaScript

`undefined` é um valor especial em JavaScript que indica que uma variável foi declarada, mas ainda não foi atribuída a ela um valor. Também é o valor retornado por funções que não possuem uma instrução `return`.

#### null em JavaScript

`null` é um valor especial em JavaScript que representa a ausência intencional de qualquer valor ou objeto. É usado para indicar que uma variável deve estar vazia ou não possuir um valor válido.



