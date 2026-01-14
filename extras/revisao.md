# Fundamentos Avançados de JavaScript: Guia de Reforço

## 1. Sistema de Tipagem e Coerção
O JavaScript é uma linguagem de **tipagem dinâmica e fraca**. Ele tenta converter tipos automaticamente para evitar que o código pare de executar.

### A Regra da Adição vs. Outras Operações
* **Adição (`+`):** Funciona como operador matemático **OU** como concatenador de strings. Se um dos lados for string, o JS converte tudo para string.
* **Subtração, Multiplicação e Divisão (`-`, `*`, `/`):** Funcionam **apenas** para matemática. O JS tentará converter strings em números.
    * *Exemplo:* `"10" + 2 = "102"` | `"10" - 2 = 8`

### Igualdade Ampla (`==`) vs. Estrita (`===`)
* **`==`**: Utiliza coerção (converte tipos antes de comparar).
* **`===`**: Compara **Valor e Tipo**. É a boa prática recomendada para evitar bugs.

## 2. Gerenciamento de Memória: Valor vs. Referência

### Tipos Primitivos (Copiados por Valor)
* `Number`, `String`, `Boolean`, `null`, `undefined`.
* Ao atribuir a uma nova variável, você cria uma **cópia real** do dado.

### Tipos Estruturados (Copiados por Referência)
* `Objects`, `Arrays`, `Functions`.
* A variável guarda um **endereço de memória** (um ponteiro).
* **Por que `[] == []` é falso?** Porque cada `[]` cria um novo endereço na memória. Você está comparando "endereços" e não o conteúdo.

## 3. Escopo Moderno e "Hoisting" (Içamento)

### Escopo de Bloco (`let` e `const`)
Variáveis declaradas com `let` e `const` pertencem estritamente ao bloco (entre chaves `{ }`) onde foram criadas. Isso evita a poluição do escopo global.

### Hoisting de Funções
As declarações de funções (`function nome() {}`) são processadas antes da execução. O motor do JS as "iça" para o topo, permitindo chamá-las antes da linha de definição.

## 4. A Lógica do "Truthy" e "Falsy"
Todo valor tem um booleano intrínseco em contextos condicionais.

* **Falsy (Sempre Falso):** `false`, `0`, `""` (vazio), `null`, `undefined`, `NaN`.
* **Truthy (Sempre Verdadeiro):** Inclui arrays vazios `[]` e objetos vazios `{}`. No JS, uma lista vazia **não** é falsa.

## 5. Anatomia da Iteração (Loops Modernos)
* **`for...of`:** Itera sobre os **valores** (os itens da lista).
* **`for...in`:** Itera sobre as **chaves** (índices ou nomes de propriedades).
* **Métodos de Ordem Superior:** `map`, `filter`, `find` e `reduce`. São a base do desenvolvimento moderno.

## 6. Comportamento do `this` e Retornos
* **Arrow Functions (`=>`):** Não possuem seu próprio `this`, elas herdam o contexto de onde foram criadas.
* **Funções sem Retorno:** Se não houver a palavra `return`, a função devolve `undefined` por padrão.
