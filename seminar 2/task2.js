class User {
	#_name;
	#_lastname;

	constructor(name, lastname) {
		this.name = name;
		this.lastname = lastname;
	}

	get getName() {
		return this.name;
	}

	get getLastname() {
		return this.lastname;
	}
}

class PremiumUser extends User {
	premiumAccount = null;

	constructor(name, lastname) {
		super(name, lastname);
		this.premiumAccount = new Date().getFullYear() + 1;
	}

	get getPremiumAccount() {
		return this.premiumAccount;
	}
}

class RegularUser extends User {
	constructor(name, lastname) {
		super(name, lastname);
	}
}

class Cat { }

const getAccountInfo = (user) => {
	if (user instanceof PremiumUser && user.premiumAccount) {
		console.log(`Пользователь ${user.getName} ${user.getLastname}. Премиум аккаунт действителен до: ${user.premiumAccount}`);
	}

	if (user instanceof RegularUser) {
		console.log(`Пользователь ${user.getName} ${user.getLastname}. Без премиум аккаунта`);
	}

	if (!(user instanceof PremiumUser) && !(user instanceof RegularUser)) {
		console.log(`Тип ${user?.getName ?? 'no name'} ${user?.getLastname ?? 'no lastname'} пользователя не определен`);
	}
};

const premUser = new PremiumUser("John", "Doe");
const regUser = new RegularUser("John", "Smith");
const user = new User("User", "Luser");
const user2 = new Cat();

// console.log(premUser.getPremiumAccount);
getAccountInfo(premUser);
getAccountInfo(regUser);
getAccountInfo(user);
getAccountInfo(user2);

