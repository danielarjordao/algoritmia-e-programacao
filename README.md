# Algoritmia e Programação

Material didático da disciplina de Algoritmia e Programação, focado no ensino de fundamentos de programação utilizando JavaScript.

## Objetivo da Disciplina

Este repositório contém material introdutório para o ensino de:
- Conceitos fundamentais de algoritmos e estruturas de dados
- Programação imperativa e funcional em JavaScript
- Resolução de problemas através de código
- Boas práticas de programação

## Estrutura do Repositório

```
algoritmia-e-programacao/
├── aula01/          # Introdução à Algoritmia e JavaScript
│   ├── aula01.md   # Teoria: algoritmos, variáveis, operadores
│   ├── ex01-07.js  # Exercícios básicos
│   └── FE01/       # Ficha de exercícios 01
├── aula02/          # Operadores e Estruturas Condicionais
│   ├── aula02.md   # Teoria: operadores relacionais, lógicos, if/switch
│   └── ex01-11.js  # Exercícios de condicionais
├── aula03/          # Estruturas de Repetição
│   ├── aula03.md   # Teoria: while, do-while, for, for...in, for...of
│   ├── ex01-05.js  # Exercícios de loops
│   ├── FE02/       # Ficha de exercícios 02
│   └── FE03/       # Ficha de exercícios 03
├── aula04/          # Funções
│   ├── aula04.md   # Teoria: funções, parâmetros, callbacks
│   ├── callback.js # Exemplo de callbacks
│   ├── ex01-07.js  # Exercícios de funções
│   └── FE04/       # Ficha de exercícios 04
├── aula05/          # Arrays
│   ├── aula05.md   # Teoria: arrays, pesquisa, ordenação
│   ├── array.js    # Exemplos de arrays
│   ├── pesquisa.js # Algoritmos de pesquisa
│   ├── ordenacao.js # Algoritmos de ordenação
│   └── ex01-03.js  # Exercícios de arrays
├── aula06/          # Arrays Avançados e Objetos
│   ├── aula06.md   # Teoria: métodos de array, objetos, classes
│   ├── Aluno.js    # Exemplo de classe
│   ├── ex01-02.js  # Exercícios
│   ├── exAula06-Arrays.js
│   ├── exAula06-Objetos.js
│   └── FE07/       # Ficha de exercícios 07
└── extras/         # Material complementar
```

## Como Usar Este Material

### Pré-requisitos

- **Node.js** (versão 14 ou superior) instalado no seu sistema
- Editor de código (recomendado: VS Code)
- Conhecimentos básicos de terminal/linha de comando

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/algoritmia-e-programacao.git
cd algoritmia-e-programacao
```

2. Instale as dependências:
```bash
npm install
```

### Executando os Exemplos

Todos os arquivos JavaScript podem ser executados diretamente com Node.js:

```bash
# Exemplo: executar exercício 1 da aula 1
node aula01/ex01.js

# Exemplo: executar exercício da ficha FE01
node aula01/FE01/ex04.js
```

## Ordem de Estudo Recomendada

### Nível Iniciante

1. **Aula 01** - Fundamentos
   - Leia o [aula01.md](aula01/aula01.md)
   - Execute os exemplos `ex01.js` a `ex07.js`
   - Pratique com a ficha `FE01/`

2. **Aula 02** - Decisões
   - Leia o [aula02.md](aula02/aula02.md)
   - Pratique com os exercícios `ex01.js` a `ex11.js`

3. **Aula 03** - Repetições
   - Leia o [aula03.md](aula03/aula03.md)
   - Execute os exemplos `ex01.js` a `ex05.js`
   - Resolva as fichas `FE02/` e `FE03/`

### Nível Intermediário

4. **Aula 04** - Funções
   - Leia o [aula04.md](aula04/aula04.md)
   - Estude o exemplo de `callback.js`
   - Pratique com `ex01.js` a `ex07.js` e ficha `FE04/`

5. **Aula 05** - Arrays
   - Leia o [aula05.md](aula05/aula05.md)
   - Analise os exemplos de pesquisa e ordenação
   - Pratique com os exercícios

6. **Aula 06** - Arrays Avançados e Objetos
   - Leia o [aula06.md](aula06/aula06.md)
   - Estude o exemplo da classe `Aluno.js`
   - Complete os exercícios de arrays e objetos

## Estudo de Caso – Projeto de Seguros

Além dos exercícios de cada aula, há um projeto prático maior que aplica os conceitos da disciplina em um sistema de gestão de apólices de seguros (linha de comando, Node.js, persistência em JSON).

- Repositório do projeto: https://github.com/gongabriela/gestaoDeSeguros.git
- Estudo de caso deste projeto neste repositório: [projeto/estudoDeCasoGestaoDeSeguros.md](projeto/estudoDeCasoGestaoDeSeguros.md)

## Principais Conceitos Abordados

### Aula 01 - Fundamentos
- Algoritmos e estruturas de dados
- Variáveis e tipos de dados
- Operadores aritméticos
- Input/Output básico

### Aula 02 - Controle Condicional
- Operadores relacionais e lógicos
- Estruturas `if`, `else if`, `else`
- `switch case`
- Operador ternário
- Valores truthy e falsy

### Aula 03 - Estruturas de Repetição
- Loop `while`
- Loop `do...while`
- Loop `for`
- `for...in` e `for...of`
- `break` e `continue`

### Aula 04 - Funções
- Declaração de funções
- Parâmetros e retorno
- Arrow functions
- Callbacks e funções assíncronas
- Recursão

### Aula 05 - Arrays
- Manipulação de arrays
- Algoritmos de pesquisa
- Algoritmos de ordenação (seleção)

### Aula 06 - Arrays Avançados e Objetos
- Métodos de array: `push`, `pop`, `shift`, `unshift`
- Métodos: `splice`, `slice`, `indexOf`, `includes`
- Métodos funcionais: `map`, `filter`, `find`, `reduce`
- Objetos e suas propriedades
- Classes em JavaScript

## Informações Adicionais

Este material é fornecido como parte do curso de Algoritmia e Programação.
