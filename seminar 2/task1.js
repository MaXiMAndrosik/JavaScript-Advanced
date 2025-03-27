class BankManager {
	#balance = 0;

	constructor(amount) {
		if (amount <= 0) {
			throw new Error("Невозможно пополнить баланс на 0 или отрицательную сумму");
		} else {
			this.#balance = amount;
		}
	}

	get balance() {
		return this.#balance;
	}

	set balance(value) {
		this.#balance = value;
	}

	deposit(amount) {
		if (amount <= 0) {
			throw new Error("Вносимая сумма должна быть больше 0");
		}
		this.#balance += amount;
		return this.#balance;
	}

	withdraw(amount) {
		if (this.#balance < amount) {
			throw new Error("На счете недостаточно средств");
		}
		this.#balance -= amount;
		return this.#balance;
	}
}

let account = new BankManager(500);
console.log(account.balance);

account.deposit(200);
console.log(account.balance);

account.withdraw(100);
console.log(account.balance);
