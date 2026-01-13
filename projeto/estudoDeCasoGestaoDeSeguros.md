# Estudo de Caso – Sistema de Gestão de Apólices de Seguros

Este documento descreve, em formato de estudo de caso, um projeto desenvolvido em dupla para a disciplina de **Algoritmia e Programação**. O objetivo é conectar o conteúdo das aulas a um exemplo mais próximo de um cenário real.

## Repositório do projeto

Código-fonte completo: https://github.com/gongabriela/gestaoDeSeguros.git

## Visão geral do projeto

O projeto implementa um **sistema de gestão de apólices de seguros**, permitindo cadastrar seguradoras, tomadores, segurados (pessoas ou bens) e apólices, além de gerar relatórios e um dashboard simples.

Foi pensado como **projeto educacional** para a disciplina de Algoritmia e Programação, simulando um cenário real de uma corretora/seguradora.

A interação do usuário é totalmente via **terminal (linha de comando)**, com menus de texto, leitura de opções numéricas e exibição de tabelas formatadas no console.

Os dados são persistidos localmente em um **arquivo JSON**, carregados no início da execução e salvos ao encerrar o programa.

## Stack utilizada

### Linguagens

- JavaScript (ES6+)
- JSON (para persistência de dados)

### Runtime / Frameworks

- Node.js (aplicação de linha de comando)
- Módulos ES (uso de `import`/`export`)

### Bibliotecas relevantes

- **prompt-sync** – entrada síncrona de dados pelo terminal (usado em `Auxiliar.js`).
- **cli-table3** – geração de tabelas formatadas em texto (usado nas “views” como `viewSeguradora.js`, `viewRelatorio.js`).
- Módulos nativos do Node:
  - `fs`, `path`, `url` para leitura/escrita de ficheiros e cálculo de caminhos (em `Persistencia.js`).

### Ferramentas de build/teste

- Não há configuração de build ou testes automatizados.
- Uso direto de `node app.js` (ou script semelhante em `package.json`).

## Funcionalidades principais

### Gestão de seguradoras

- Cadastrar, listar, atualizar e remover seguradoras.
- Implementado principalmente em `gestaoSeguradora.js` e `viewSeguradora.js`.

### Gestão de tomadores

- CRUD completo de tomadores (pessoas que contratam as apólices).
- Cálculo automático de idade a partir da data de nascimento.
- Implementado em `Tomador.js`, `gestaoTomador.js` e `viewTomador.js`.

### Gestão de segurados (pessoas e bens)

- Cadastro de segurados podendo ser **Pessoa** (nome, data de nascimento, morada, contacto) ou **Bem** (descrição, localização).
- Implementado em `Segurados.js`, `gestaoSegurado.js` e `viewSegurado.js`.

### Gestão de apólices

- Criação de apólices relacionando seguradora, tomador e segurado.
- Escolha do tipo de seguro, periodicidade, valor segurado, prémio, estado (Ativa/Inativa).
- Atualização de campos da apólice e “remoção” via inativação.
- Implementado em `Apolice.js`, `gestaoApolice.js` e `viewApolice.js`.

### Relatórios

- Listagem de apólices com detalhes:
  - seguradora, tomador, segurado,
  - tipo de seguro,
  - valor segurado,
  - estado,
  - prémio anual.
- Filtros por segurado, tomador, apenas apólices ativas, por tipo de seguro ou seguradora, e busca por ID.
- Implementado em `gestaoRelatorio.js` e `viewRelatorio.js`.

### Dashboard

- Resumo geral: total de apólices, quantas ativas/inativas.
- Estatísticas agregadas:
  - apólices por seguradora,
  - apólices por tipo de seguro,
  - quantidades e valor médio segurado.
- Exibição em tabelas no terminal.
- Implementado em `gestaoDashboard.js` e `viewDashboard.js`.

### Persistência de dados

- Leitura e escrita de todas as entidades (seguradoras, tomadores, segurados, apólices) em `dados.json`.
- Implementado em `Persistencia.js` e orquestrado por `Dados.js`.

## Organização do código (arquitetura)

### Ponto de entrada

- `app.js` é o ponto de entrada da aplicação.
- Responsabilidades principais:
  - carregar os dados persistidos,
  - mostrar o dashboard inicial,
  - apresentar o menu principal em loop,
  - chamar as “views” específicas (seguradoras, tomadores, segurados, apólices, relatórios, dashboard).

### Camada de dados

- Pasta `models` contém as **classes de domínio**:
  - `Apolice`, `Seguradora`, `Tomador`, `Segurados`, e `Definicoes` (tipos de seguro, estados, periodicidade etc.).
- `Dados.js` age como **“repositório em memória”**:
  - mantém arrays globais (`seguradoras`, `tomadores`, `segurados`, `apolices`),
  - expõe referências para o resto do sistema.
- `Persistencia.js` cuida da **leitura/escrita do ficheiro JSON**, incluindo também os contadores de IDs.

### Camada de regras de negócio (controllers)

- Pasta `controllers` contém a lógica de negócio e manipulação dos arrays:
  - `gestaoSeguradora`, `gestaoTomador`, `gestaoSegurado`, `gestaoApolice`, `gestaoRelatorio`, `gestaoDashboard`, `gestaoDefinicoes`.
- Estes módulos **não interagem diretamente com o usuário**:
  - recebem dados prontos (já validados ou coletados nas views),
  - usam funções auxiliares para buscar e manipular entidades.

### Camada de interface (views)

- Pasta `views` contém os **menus** e a **formatação de saída** no terminal.
- Cada view possui:
  - uma função de menu (`menuXxx`) que mostra opções, lê escolhas e chama o controller correspondente;
  - funções de listagem com `cli-table3` para exibição tabular.

### Helpers

- `Auxiliar.js` concentra funções utilitárias, por exemplo:
  - entrada/validação: `lerNumero`, `lerNumeroPositivo`, `lerOpcao`, `lerData`;
  - buscas em arrays e verificação de dependências: `buscarIndice`, `temDependencias`;
  - utilidades de interface: `truncarTexto`, `selecionarDaLista`, `selecionarOuCriar`.

### Separação de camadas (visão geral)

Há uma separação educacional clara entre:

- **Modelos** – dados puros (classes e estruturas).
- **Controllers** – regra de negócio e manipulação de listas.
- **Views** – menus e apresentação no terminal.
- **Persistência** – entrada/saída com ficheiros JSON.

O fluxo geral é: `app.js` → `viewX` → `controllerX` → `Dados`/`Models`/`Auxiliar` → `Persistencia`.


## Conceitos de Algoritmia e Programação utilizados

Nesta secção, são destacados conceitos da disciplina e como aparecem no projeto.

- **Variáveis e tipos de dados**: uso extensivo de `let` e `const` com números (IDs, contadores), strings (nomes, mensagens), objetos e arrays. Exemplos claros são os contadores globais de IDs em `Apolice.js`, `Seguradoras.js`, `Tomador.js`, `Segurados.js`.

- **Operadores e expressões**: operadores aritméticos (`+`, `-`, `*`, `/`) em cálculos de idade e prémio anual (em `Auxiliar.js` e `viewRelatorio.js`), além de operadores de comparação (`===`, `!==`, `<`, `>`) e lógicos (`&&`, `||`) para validações (`lerData`, `lerOpcao`, filtros de arrays etc.).

- **Estruturas condicionais (if/else, switch)**: `if/else` é usado para validar entradas (datas, números, listas vazias) e decidir fluxos em funções como `lerData`, `lerNumero`, `removerSegurado`, `removerTomador`. Estruturas `switch` aparecem nos menus e submenus em `app.js` e nas várias `view*.js`.

- **Estruturas de repetição (for, while, do...while, métodos de array)**:
  - `do...while` mantém os menus em loop até o usuário escolher sair (`menuSeguradoras`, `menuTomadores`, `menuRelatorios` etc.).
  - `for` clássico percorre arrays em `gestaoDashboard.js` e outros controladores.
  - Métodos de array como `filter`, `reduce`, `find` aparecem em filtros e buscas, especialmente em `gestaoRelatorio.js` e `viewRelatorio.js`.

- **Funções (declaração, funções anônimas, callbacks, arrow functions)**:
  - A maior parte das funções é declarada com `function nome(...)` em quase todos os módulos.
  - Callbacks aparecem em métodos de array, como `apolices.filter(a => ...)` com arrow functions em `viewApolice.js` e `viewTomador.js`.
  - Funções utilitárias como `lerNumero`, `calcularAnosEntreDatas`, `buscarIndice` são exemplos claros de abstração de comportamento.

- **Arrays e coleções**: arrays principais (`seguradoras`, `tomadores`, `segurados`, `apolices`) vivem em `Dados.js` e simulam um “banco de dados em memória”. Operações típicas: `push`, `splice`, acesso por índice, além de `filter`, `find`, `reduce` para estatísticas e filtros.

- **Objetos e classes**: classes representam entidades de domínio (`Apolice`, `Tomador`, `Segurados`, `Seguradora` em `models`). Instâncias são criadas nos controllers (por exemplo, `new Tomador()` em `gestaoTomador.js`) e armazenadas nas coleções globais em `Dados.js`. Objetos literais com configurações fixas aparecem em `Definicoes.js`.

- **Modularização (import/export e separação em módulos)**: o projeto inteiro usa módulos ES com `import`/`export` (`app.js` e demais ficheiros). Há separação clara de responsabilidades: `models`, `controllers`, `views`, helpers, persistência e dados centrais em módulos distintos.

- **Lógica de validação de dados**: em `Auxiliar.js`, funções como `lerNumero`, `lerNumeroPositivo`, `lerOpcao` e `lerData` garantem que apenas entradas válidas sejam aceitas. A função `temDependencias` impede remoções de entidades que ainda possuem apólices associadas.

- **Uso de assíncrono**: o projeto não utiliza `async/await` ou Promises; toda a lógica é síncrona, com `prompt-sync` para entrada e `fs.readFileSync`/`fs.writeFileSync` em `Persistencia.js`.

## Desafios e soluções técnicas

- **Gestão de IDs auto-incrementais e persistência**
  Desafio: manter IDs únicos mesmo após fechar e reabrir a aplicação.
  Solução: cada modelo possui um contador global (`proximoIdX`), e `Persistencia.js` salva/restaura esses contadores no JSON, reconfigurando-os em `Dados.js` ao carregar.

- **Integridade referencial entre entidades**
  Desafio: impedir remoção de entidades (seguradora, tomador, segurado) com apólices associadas para não “quebrar” o sistema.
  Solução: a função `temDependencias` em `Auxiliar.js` verifica se há apólices referenciando aquele ID; os controllers de remoção recusam apagar nesses casos.

- **Trabalhar com múltiplos tipos de segurado (Pessoa/Bem)**
  Desafio: mesmas operações (listar, atualizar, remover) com campos diferentes conforme o tipo.
  Solução: em `Segurados.js` o construtor decide o tipo, e em `gestaoSegurado.js` há funções separadas `atualizarSeguradoPessoa` e `atualizarSeguradoBem`, além de lógicas específicas nas views.

- **Dashboard e relatórios agregados**
  Desafio: produzir estatísticas (quantidade, média de valores) a partir de arrays em memória.
  Solução: em `gestaoDashboard.js` e `viewRelatorio.js`, laços `for`, `filter`, `reduce` e agrupamentos são usados para montar estatísticas por seguradora/tipo de seguro e calcular médias e totais.

- **Contagem de apólices por estado (Ativa/Inativa)**
  Desafio: manter contagens atualizadas por estado.
  Solução: `gestaoDefinicoes.js` centraliza funções como `incrementarEstado`, `decrementarEstado` e `recalcularQuantidadesEstados`, chamadas ao criar, atualizar ou carregar apólices.

- **Código incompleto/bugado como oportunidade didática**
  Em `gestaoApolice.js`, o `switch` de `atualizarApolice` tenta chamar `atualizarEstadoApolice(apolice, novoEstado)` mas `novoEstado` não existe e a função recebe apenas um parâmetro.
  Em `atualizarTodosOsCamposApolice`, há provavelmente um erro de escrita em `police.valorPremio` (faltando o "a").
  Esses pontos são bons exemplos de bugs reais para atividades de depuração.
