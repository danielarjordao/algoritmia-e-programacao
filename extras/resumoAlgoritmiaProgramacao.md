# Resumo de Algoritmia e Programação

Este resumo serve como referência rápida do que foi trabalhado na disciplina, para você reutilizar depois (por exemplo, em outra cadeira de JavaScript).

## 1. Fundamentos de programação e JavaScript

- Ideia de algoritmo: sequência finita de passos bem definidos para resolver um problema.
- Formas de representação: linguagem natural, pseudocódigo, fluxograma e código (JavaScript).
- Ambientes usados:
  - Node.js no terminal (`console.log`, leitura com prompt-sync).
  - Navegador (HTML + `<script>` + console das ferramentas de desenvolvedor).
- Conceitos básicos:
  - Variáveis (`let`, `const`) e identificadores claros.
  - Tipos primitivos: `number`, `string`, `boolean`, `undefined`, `null`, `bigint`, `symbol`.
  - Operadores aritméticos, de atribuição, comparação (`==` x `===`) e lógicos (`&&`, `||`, `!`).
  - Valores truthy/falsy e avaliação de curto-circuito.

### Valores especiais e falsy

- Valores **falsy** (avaliam como falso em um `if`): apenas `false`, `0`, `""` (string vazia), `null`, `undefined` e `NaN`.
- Valores **truthy**: todo o resto (números diferentes de 0, strings não vazias, objetos, arrays, funções, etc.).
- `NaN` (Not a Number): resultado de operações numéricas inválidas (ex.: `"texto" * 2`), é do tipo `number` e não é igual nem a si mesmo (`NaN === NaN` é `false`).
- `undefined`: variável declarada mas não inicializada, ou retornos de funções sem `return`.
- `null`: ausência **intencional** de valor (usado quando queremos indicar explicitamente que algo está “vazio”).

## 2. Controle de fluxo

- Condicionais:
  - `if`, `if…else`, `if…else if…else` para decisões encadeadas.
  - `switch` para múltiplas alternativas sobre um mesmo valor.
  - Operador ternário `cond ? a : b` para decisões simples em uma expressão.
- Boas práticas:
  - Escrever condições legíveis e evitar negações duplas.
  - Não abusar de ternário aninhado.
  - Validar entradas antes de usar (ex.: checar divisão por zero, intervalos válidos etc.).

## 3. Estruturas de repetição (loops)

- `while`: repete enquanto a condição for verdadeira (pode executar 0 vezes).
- `do...while`: sempre executa pelo menos 1 vez e testa a condição depois.
- `for` clássico: ideal quando se conhece (ou controla) o número de iterações.
- `for...in`: itera chaves/propriedades (objetos; não recomendado para arrays).
- `for...of`: itera valores (arrays, strings, coleções iteráveis).
- `break` e `continue` para controlar o fluxo dentro do loop.
- Erros comuns vistos nos exercícios:
  - Loops infinitos por não atualizar a variável de controle.
  - Erros de intervalo (off-by-one), como usar `i <= length` em vez de `< length`.

## 4. Funções

- Formas principais:
  - Declaração: `function soma(a, b) { return a + b; }` (sofre hoisting).
  - Expressão: `const soma = function(a, b) { … }`.
  - Arrow function: `const soma = (a, b) => a + b;`.
- Conceitos importantes:
  - Parâmetros x argumentos e valores padrão de parâmetros.
  - `return` para devolver valores e encerrar a função.
  - Escopo local x global (variáveis internas não “vazam” para fora).
- Callbacks e funções de ordem superior:
  - Funções que recebem outras funções como parâmetro ou retornam funções.
  - Exemplos em métodos de array (`map`, `filter`, `reduce`) e callbacks em geral.
- Recursão:
  - Função chamando a si mesma para resolver subproblemas.
  - Importância de ter um caso base bem definido para evitar recursão infinita.

## 5. Arrays

- Conceito: coleção ordenada de valores, indexada a partir de 0.
- Operações básicas:
  - Acesso por índice, propriedade `length`.
  - Percorrer com `for` e `for...of`.
- Métodos de modificação:
  - `push` / `pop`: adicionam/removem no final.
  - `unshift` / `shift`: adicionam/removem no início.
  - `splice`: remover, inserir ou substituir em qualquer posição.
- Métodos de cópia e busca:
  - `slice`: produzir uma cópia (total ou parcial) de um array.
  - `indexOf` / `includes`: localizar valores.
- Algoritmos estudados:
  - Pesquisa linear: percorrer o array comparando elemento a elemento.
  - Ordenação por seleção (selection sort): encontrar o menor elemento e trocar de lugar repetidamente.

## 6. Arrays com métodos funcionais

- `filter`:
  - Cria um novo array apenas com elementos que passam em uma condição.
- `find`:
  - Retorna o primeiro elemento que satisfaz a condição (ou `undefined`).
- `map`:
  - Transforma cada elemento, gerando um novo array do mesmo tamanho.
- `reduce`:
  - Acumula valores em um único resultado (soma, produto, máximo, contagens etc.).
- Padrões comuns:
  - Encadear `filter` → `map` → `reduce` para processar coleções.
  - Usar callbacks curtos e descritivos para manter o código legível.

## 7. Objetos e classes

- Objetos literais:
  - Exemplo: `{ nome: "Ana", idade: 25, aprovado() { return this.idade >= 18; } }`.
  - Acesso via `obj.propriedade` ou `obj["propriedade"]`.
- Coleções de objetos:
  - Arrays de objetos (por exemplo, lista de alunos, livros ou segurados).
  - Uso de `for...of`, `filter`, `map`, `find` e `reduce` para trabalhar com essas coleções.
- Classes (sintaxe ES6):
  - Exemplo genérico: `class Aluno { constructor(id, nome, nota) { … } aprovado() { … } }`.
  - Criação de instâncias com `new` e encapsulamento de dados + comportamento.
- Boas práticas trabalhadas:
  - Nomear classes em PascalCase.
  - Manter métodos pequenos e com responsabilidade única.

## 8. Organização de código e projeto de seguros

- Organização por arquivos e módulos ao longo das aulas.
- No projeto de gestão de seguros (em outro repositório):
  - Separação em camadas:
    - models (dados/entidades),
    - controllers (regras de negócio),
    - views (menus e interface no terminal),
    - persistência (gravação em JSON).
  - Uso intenso de condicionais, loops, arrays, objetos e classes em um cenário mais realista.
  - Menus no terminal, validação de entrada, listas em memória e gravação de dados em ficheiro JSON.
  - Conceitos importantes aplicados:
    - IDs auto-incrementais,
    - integridade referencial (não apagar entidades com vínculos),
    - dashboards com estatísticas usando `filter` e `reduce`.

