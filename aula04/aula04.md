# Funções

Funções são blocos de código reutilizáveis que executam uma tarefa específica. Elas ajudam a organizar o código, tornando-o mais legível e fácil de manter.

## Por que usar funções?

### Vantagens das funções

- **Reutilização de código**: Você pode chamar a mesma função várias vezes sem precisar reescrever o código.
- **Organização**: Funções ajudam a dividir o código em partes menores e mais gerenciáveis.
- **Redução de código duplicado**: Evita a repetição de código, facilitando a manutenção.
- **Maior legibilidade**: Funções com nomes descritivos tornam o código mais fácil de entender.
- **Manutenção facilitada**: Alterações podem ser feitas em um único lugar, afetando todas as chamadas da função.
- **Facilita trabalho em equipe**: Diferentes membros da equipe podem trabalhar em funções separadas sem interferir no código principal.
- **Abstração**: Permite focar na lógica de alto nível sem se preocupar com os detalhes de implementação.

### Exemplos de uso

```javascript
function saudacao(nome) {
	console.log("Olá, " + nome + "!");
}

saudacao("Maria"); // Chama a função e imprime "Olá, Maria!"
saudacao("João");  // Chama a função e imprime "Olá, João!"
```

## Conceitos básicos

### O que é uma função?

- Uma função é um bloco de código que pode ser definido uma vez e executado várias vezes.
- Pode receber entradas (parâmetros) e retornar uma saída (valor de retorno).

### Estrutura básica de uma função

```javascript
function nomeDaFuncao(parametro1, parametro2) {
	// Corpo da função
	return resultado; // Opcional
}
```

### Observações

- Todos os parâmetros são opcionais; uma função pode não receber nenhum parâmetro.
- O valor de retorno também é opcional; uma função pode não retornar nenhum valor.
- Os parâmetros são enviados por valor, ou seja, uma cópia do valor é passada para a função.

## Tipos de funções

### Function declaration (Declaração de função)

- **Hoisted** - Não importa onde a função é declarada, ela pode ser chamada antes da sua definição no código.

```javascript
function soma(a, b) {
	return a + b;
}
```

### Function expression (Expressão de função)

- Função anônima atribuída a uma variável.
- **Não é hoisted** - Deve ser definida antes de ser chamada.

```javascript
const soma = function(a, b) {
	return a + b;
};

const resultado = soma(2, 3); // Chama a função e armazena o resultado
```

### Arrow function (Função arrow)

- Sintaxe mais curta para expressões de função.

```javascript
const soma = (a, b) => {
	return a + b;
};
```

- Forma ainda mais curta quando há uma única expressão de retorno:

```javascript
const soma2 = (a, b) => a + b;
```

### Função anônima

- Função sem nome, geralmente usada como argumento para outras funções.

```javascript
setTimeout(function() {
	console.log("Executa após 2 segundos");
}, 2000);
```

### Métodos de objetos

- Funções que são propriedades de objetos.

```javascript
const pessoa = {
	nome: "Ana",
	saudacao: function() {
		console.log("Olá, " + this.nome + "!");
	}
};
pessoa.saudacao(); // Chama o método do objeto
```

### Funções recursivas

- Funções que chamam a si mesmas para resolver um problema.
- **Importante**: Toda função recursiva precisa de uma condição de paragem (caso base) para evitar loop infinito.

```javascript
function fatorial(n) {
	if (n === 0) {  // Condição de paragem (caso base)
		return 1;
	}
	return n * fatorial(n - 1);  // Chamada recursiva
}

const resultado = fatorial(5); // resultado é 120
```

### Funções assíncronas e callbacks

- Permitem "pausar" a execução até que uma operação assíncrona seja concluída.
- Correm em segundo plano, permitindo que o restante do código continue executando.

```javascript
function buscarDados(callback) {
	setTimeout(function() {
		const dados = { nome: "João", idade: 30 };
		callback(dados);  // Executa a função callback passando os dados
	}, 2000);
}

buscarDados(function(dados) {
	console.log("Dados recebidos:", dados);
});
```

## Parâmetros e argumentos

- Parâmetros são variáveis listadas na definição da função.
- Argumentos são os valores reais passados para a função quando ela é chamada.

### Parâmetros opcionais e valores por omissão

- Parâmetros podem ser opcionais, e você pode definir valores padrão para eles.

```javascript
function saudacao(nome = "Visitante") {
	console.log("Olá, " + nome + "!");
}
saudacao(); // Imprime "Olá, Visitante!"
saudacao("Carlos"); // Imprime "Olá, Carlos!"
```

## Escopo de variáveis

### Escopo local

- Variáveis definidas dentro de uma função têm **escopo local** e não podem ser acessadas fora dela.
- Não são visíveis fora da função, protegendo o estado interno da função.
- Evita "poluição" do escopo global, reduzindo conflitos entre variáveis.

```javascript
function exemplo() {
	let mensagem = "Olá!";  // Variável local
	console.log(mensagem);  // Funciona
}

exemplo();
console.log(mensagem);  // Erro: mensagem não está definida
```

## Retorno de valores

- Funções podem retornar valores usando a palavra-chave `return`.

```javascript
function soma(a, b) {
	return a + b;
}

const resultado = soma(2, 3); // resultado agora é 5
```

### Importante saber

- A execução da função **termina** quando `return` é alcançado.
- Se nenhuma instrução `return` for especificada, a função retorna `undefined` por padrão.

```javascript
function semRetorno() {
	console.log("Esta função não retorna nada.");
}

const resultado = semRetorno(); // resultado é undefined
```

## Funções como valores (Higher-Order Functions)

- Funções podem ser **atribuídas a variáveis**, **passadas como argumentos** para outras funções e **retornadas** de outras funções.
- Funções que recebem outras funções como argumentos ou retornam funções são chamadas de **"Higher-Order Functions"**.

### Exemplo: Função como argumento

```javascript
function cumprimentar(nome, callback) {
	console.log("Olá, " + nome + "!");
	callback();  // Executa a função passada como argumento
}

function despedida() {
	console.log("Até logo!");
}

cumprimentar("Ana", despedida);  // Passa a função despedida como argumento
```

### Benefícios

- Maior flexibilidade e reutilização de código
- Permite criar abstrações mais poderosas
- Facilita programação funcional




