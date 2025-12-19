const contaBancaria = {
	titular: "Daniela",
	saldo: 1500,
	depositar(valor) {
		this.saldo += valor;
	},
	levantar(valor) {
		if (valor <= this.saldo) {
			this.saldo -= valor;
		} else {
			console.log("Saldo insuficiente.");
		}
	}
};

console.log("Saldo inicial:");
console.log(contaBancaria.saldo);

contaBancaria.depositar(500);
console.log("Após depósito de 500:");
console.log(contaBancaria.saldo);

contaBancaria.levantar(300);
console.log("Após levantamento de 300:");
console.log(contaBancaria.saldo);

console.log("Tentativa de levantamento de 2000:");
contaBancaria.levantar(2000);

