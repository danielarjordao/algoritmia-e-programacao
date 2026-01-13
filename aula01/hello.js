// Exemplo simples para execução no navegador
// Abra aula01/index.html no navegador e veja o resultado no console (F12)

const nome = prompt("Digite o seu nome: ");

console.log("Hello, " + nome + "! (navegador)");

document.body.insertAdjacentHTML("beforeend", `<p>Hello, ${nome}! (navegador)</p>`);
