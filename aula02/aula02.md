# Operadores relacionais

Operadores relacionais são usados para comparar dois valores e retornar um valor booleano (`true` ou `false`) com base na comparação.

## Tabela de Operadores

| Operador | Descrição                  | Exemplo      | Resultado |
|----------|----------------------------|--------------|-----------||
| `<`      | Menor que                  | `3 < 5`      | `true`    |
| `>`      | Maior que                  | `5 > 3`      | `true`    |
| `<=`     | Menor ou igual a           | `3 <= 5`     | `true`    |
| `>=`     | Maior ou igual a           | `5 >= 5`     | `true`    |
| `==`     | Igualdade                  | `5 == 5`     | `true`    |
| `===`    | Estritamente igual         | `5 === '5'`  | `false`   |
| `!=`     | Diferença                  | `5 != 3`     | `true`    |
| `!==`    | Estritamente diferente     | `5 !== '5'`  | `true`    |

## Cuidados ao Usar Operadores Relacionais

- **Diferença entre `==` e `===`**: O operador `==` compara valores após conversão de tipo, enquanto `===` compara valores e tipos sem conversão.
  ```javascript
  5 == "5"   // true (conversão de tipo)
  5 === "5"  // false (sem conversão)
  ```

# Operadores lógicos

Operadores lógicos são usados para combinar expressões booleanas e retornar um valor booleano.

## Tabela de Operadores

| Operador   | Descrição          | Exemplo         | Resultado |
|------------|--------------------|-----------------|-----------||
| `&&`       | E lógico (AND)     | `true && false` | `false`   |
| `||`       | OU lógico (OR)     | `true || false` | `true`    |
| `!`        | Negação lógica (NOT) | `!true`       | `false`   |

## Short-Circuit Evaluation

Os operadores `&&` e `||` têm comportamento especial de avaliação em curto-circuito:

### Operador `&&` (E lógico)
- Se o primeiro operando for `false`, o segundo não é avaliado.
  ```javascript
  false && expressão; // expressão não é avaliada
  ```

### Operador `||` (OU lógico)
- Se o primeiro operando for `true`, o segundo não é avaliado.
  ```javascript
  true || expressão; // expressão não é avaliada
  ```

### Uso Comum: Valores Padrão
- É comum usar `||` para definir valores padrão:
  ```javascript
  let nome = entrada || "Padrão";
  ```

# Precedência de operadores
1. Aritméticos: `*`, `/`, `%`, `+`, `-`
2. Relacionais: `<`, `>`, `<=`, `>=`, `==`, `===`, `!=`, `!==`
3. Negação lógica: `!`
4. E lógico: `&&`
5. OU lógico: `||`

# Operador Ternário

O operador ternário é uma forma concisa de expressar uma condição `if-else` em uma única linha. É o único operador em JavaScript que aceita três operandos.

## Sintaxe
```javascript
condição ? valorSeVerdadeiro : valorSeFalso
```

## Exemplo
```javascript
let resultado = condição ? "verdadeiro" : "falso";

// Aninhado (evite para manter legibilidade)
let valor = cond1 ? "A" : cond2 ? "B" : "C";
```

# Estruturas de Controle Condicional

As estruturas de controle condicional permitem que o programa tome decisões baseadas em condições:

- **if**: se... então
- **if...else**: se... então... senão
- **if...else if...else**: se... então... senão se... então
- **switch case**: múltiplas opções baseadas em um valor

## Estrutura Básica do if

```javascript
// if simples
if (condição) {
    // bloco de código se condição for verdadeira
}

// if...else
if (condição) {
    // bloco de código se condição for verdadeira
} else {
    // bloco de código se condição for falsa
}

// if...else if...else
if (condição1) {
    // bloco de código se condição1 for verdadeira
} else if (condição2) {
    // bloco de código se condição2 for verdadeira
} else {
    // bloco de código se nenhuma condição for verdadeira
}
```

## Exemplo

```javascript
if (condição1) {
    // código
} else if (condição2) {
    // código
} else {
    // código
}
```

# Switch Case

O `switch` é uma estrutura de controle que permite selecionar entre múltiplas opções com base no valor de uma expressão.

## Estrutura Básica

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

## Exemplo

```javascript
switch (variável) {
    case valor1:
        // código
        break;
    case valor2:
        // código
        break;
    default:
        // código padrão
}
```

## Importante: Break

- O `break` é essencial para sair do `switch` após executar um caso.
- Sem o `break`, a execução continua para os próximos casos (fall-through).

```javascript
switch (valor) {
    case 1:
    case 2:
    case 3:
        // código para 1, 2 ou 3
        break;
    default:
        // código padrão
}
```
# Truthy e Falsy

Em JavaScript, valores podem ser avaliados como "truthy" (verdadeiros) ou "falsy" (falsos) em contextos booleanos.

## Valores Falsy

Apenas **6 valores** são considerados falsy em JavaScript:

- `false` - O valor booleano falso
- `0` - O número zero
- `""` ou `''` - String vazia
- `null` - Ausência intencional de valor
- `undefined` - Variável não inicializada
- `NaN` - Not a Number (resultado de operação matemática inválida)

```javascript
if (0) { /* não executa */ }
if ("") { /* não executa */ }
```

## Valores Truthy

Qualquer valor que **não seja falsy** é considerado truthy:

- `true` - O valor booleano verdadeiro
- Números diferentes de zero: `1`, `-1`, `3.14`, etc.
- Strings não vazias: `"hello"`, `"0"`, `"false"`, etc.
- Objetos: `{}`, `[]`, `function() {}`, etc.
- Arrays: mesmo vazios `[]` são truthy

```javascript
if ("0") { /* executa - string não vazia é truthy */ }
if ([]) { /* executa - array vazio é truthy */ }
```

# Valores Especiais em JavaScript

## NaN - Not a Number

`NaN` é um valor especial que representa um resultado de operação matemática inválida. Curiosamente, `NaN` é do tipo `number`.

```javascript
let resultado = "texto" * 2;  // NaN
typeof NaN;                   // "number"
NaN === NaN;                  // false (NaN não é igual a si mesmo!)
isNaN(NaN);                   // true
Number.isNaN(NaN);            // true (mais rigoroso)
```

## undefined

`undefined` indica que uma variável foi declarada mas ainda não recebeu um valor. Também é retornado por funções sem `return`.

```javascript
let x;
x;  // undefined

function semRetorno() { }
semRetorno();  // undefined

let obj = {};
obj.propriedadeInexistente;  // undefined
```

## null

`null` representa a **ausência intencional** de valor. É usado quando queremos indicar explicitamente que uma variável está vazia.

```javascript
let usuario = null;  // intencionalmente vazio
typeof null;  // "object" (bug histórico do JavaScript)

// Diferença entre null e undefined
let a;           // undefined (não inicializada)
let b = null;    // null (intencionalmente vazia)

a == b;   // true (conversão de tipo)
a === b;  // false (tipos diferentes)
```



