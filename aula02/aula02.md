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

# Condicionais (if, else if, else)

Condicionais são usadas para executar diferentes blocos de código com base em condições booleanas.

## Estrutura básica
```javascript
if (condição1) {
	// bloco de código se condição1 for verdadeira
} else if (condição2) {
	// bloco de código se condição2 for verdadeira
} else {
	// bloco de código se nenhuma condição for verdadeira
}
