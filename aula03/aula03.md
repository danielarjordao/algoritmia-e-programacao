# Estruturas de Repetição (Loops)

Em JavaScript, estruturas de repetição (ou loops) são usadas para executar um bloco de código várias vezes, até que uma condição específica seja atendida. São fundamentais para automatizar tarefas repetitivas e processar coleções de dados.

## Principais Estruturas de Repetição

- `while` - Executa enquanto a condição for verdadeira
- `do...while` - Executa pelo menos uma vez, depois verifica a condição
- `for` - Loop com contador, ideal para número conhecido de iterações
- `for...in` - Itera sobre propriedades de objetos
- `for...of` - Itera sobre valores de iteráveis (arrays, strings, etc.)

---

## Estrutura `while`

A estrutura `while` executa um bloco de código **enquanto** uma condição especificada for verdadeira. A condição é verificada **antes** de cada iteração.

### Sintaxe

```javascript
while (condição) {
    // bloco de código a ser executado
}
```

### Exemplo

```javascript
let contador = 0;

while (contador < 5) {
    // código a executar
    contador++;
}
```

### Quando Usar
- Quando não se sabe quantas iterações serão necessárias
- Quando a condição de parada depende de eventos ou entrada do usuário
- Para loops baseados em condições complexas

---

## Estrutura `do...while`

A estrutura `do...while` é semelhante ao `while`, mas com uma diferença crucial: o bloco de código é executado **pelo menos uma vez**, pois a condição é verificada **após** a execução do bloco.

### Sintaxe

```javascript
do {
    // bloco de código a ser executado
} while (condição);
```

### Exemplo

```javascript
let valor;

do {
    // código a executar
    valor = obterValor();
} while (condição não satisfeita);
```

### Quando Usar
- Quando o código precisa executar pelo menos uma vez
- Menus de programas
- Validação de entrada do usuário
- Processos que devem ocorrer antes da verificação

### Diferença entre while e do...while

```javascript
// while - pode não executar
while (condição) {
    // código
}

// do...while - executa pelo menos uma vez
do {
    // código
} while (condição);
```

---

## Estrutura `for`

A estrutura `for` é usada quando sabemos **quantas vezes** queremos repetir um bloco de código. É ideal para iterar com contadores ou percorrer arrays.

### Sintaxe

```javascript
for (inicialização; condição; incremento) {
    // bloco de código a ser executado
}
```

### Componentes do for

1. **Inicialização**: Executada uma vez no início (ex: `let i = 0`)
2. **Condição**: Verificada antes de cada iteração (ex: `i < 10`)
3. **Incremento**: Executado após cada iteração (ex: `i++`)

### Exemplos

```javascript
// Contagem básica
for (let i = 0; i < 5; i++) {
    // código
}

// Percorrer array
for (let i = 0; i < array.length; i++) {
    // acessar array[i]
}

// Loop reverso
for (let i = 10; i >= 0; i--) {
    // código
}
```

### Quando Usar
- Quando o número de iterações é conhecido
- Para percorrer arrays com índices
- Para criar contadores e sequências
- Loops aninhados para matrizes

---

## `for...in`

A estrutura `for...in` é usada para iterar sobre as **propriedades enumeráveis** de um objeto. Retorna os **nomes das propriedades** (chaves).

### Sintaxe

```javascript
for (variável in objeto) {
    // bloco de código a ser executado
}
```

### Exemplo

```javascript
let objeto = { prop1: valor1, prop2: valor2 };

for (let propriedade in objeto) {
    // acessar objeto[propriedade]
}
```

### ⚠️ Aviso Importante

**NÃO use `for...in` para arrays!**

```javascript
// ❌ EVITAR
for (let i in array) { }

// ✅ Use for clássico ou for...of
for (let i = 0; i < array.length; i++) { }
```

### Quando Usar
- Iterar sobre propriedades de objetos
- Verificar se um objeto tem determinadas propriedades
- Listar chaves de um objeto

---

## `for...of`

A estrutura `for...of` é usada para iterar sobre objetos **iteráveis**, como arrays, strings, mapas, conjuntos, etc. Retorna os **valores** diretamente.

### Sintaxe

```javascript
for (variável of objetoIterável) {
    // bloco de código a ser executado
}
```

### Exemplos

```javascript
// Iterar sobre array
for (let item of array) {
    // usar item
}

// Iterar sobre string
for (let caractere of string) {
    // usar caractere
}
```

### Quando Usar
- Iterar sobre valores de arrays (mais limpo que for clássico)
- Percorrer caracteres de strings
- Trabalhar com Set, Map e outros iteráveis
- Quando não precisa do índice

---

## Break e Continue

Dentro das estruturas de repetição, podemos usar as palavras-chave `break` e `continue` para controlar o fluxo da execução.

### `break`

Encerra a repetição **imediatamente**, saindo do loop por completo.

```javascript
for (let i = 0; i < 10; i++) {
    if (condição) {
        break; // sai do loop
    }
}
```

### `continue`

Pula a iteração **atual** e passa para a **próxima** iteração do loop.

```javascript
for (let i = 0; i < 10; i++) {
    if (condição) {
        continue; // pula para próxima iteração
    }
    // código
}
```

---

## Boas Práticas e Erros Comuns

### ✅ Usar `let` ou `const`, Evitar `var`

```javascript
// ❌ EVITAR - var tem problemas de escopo
for (var i = 0; i < 3; i++) { }

// ✅ CORRETO - let tem escopo de bloco
for (let i = 0; i < 3; i++) { }
```

### ⚠️ Evitar Loops Infinitos

```javascript
// ❌ Loop infinito
while (i < 5) {
    // faltou incrementar i
}

// ✅ CORRETO
while (i < 5) {
    i++;
}
```

### 🔢 Atenção aos "Off-by-One Errors"

```javascript
// ❌ ERRO - usa <=
for (let i = 0; i <= array.length; i++) { }

// ✅ CORRETO - usa <
for (let i = 0; i < array.length; i++) { }
```

### 🚫 Não Usar `for...in` para Arrays

```javascript
// ❌ EVITAR
for (let i in array) { }

// ✅ Use for...of
for (let item of array) { }
```

### 📊 Resumo: Quando Usar Cada Loop

| Loop | Uso Ideal |
|------|----------|
| `while` | Condição desconhecida, baseada em eventos |
| `do...while` | Executar pelo menos uma vez (menus, validações) |
| `for` | Número conhecido de iterações, arrays com índices |
| `for...in` | Propriedades de objetos (NÃO arrays) |
| `for...of` | Valores de iteráveis (arrays, strings, Set, Map) |

---

## Comparação entre Loops

```javascript
// for clássico - com índice
for (let i = 0; i < array.length; i++) {
    // usar array[i]
}

// for...of - sem índice, mais simples
for (let item of array) {
    // usar item
}
```
