const user = {
	name: "John",
	age: 30,
	address: {
		city: "New York",
		street: "123 Main Str",
	},
	contacts: {
		email: "john@gmail.com",
		phone: "+123456789",
	},
};

// Опциональная цепочка вызовов
const email = user?.contacts?.email;
console.log(email);

// Если значение не определено или равно null или undefined,
// используется значение по умолчанию
const defaultValue = user?.otherValue ?? "Default Value";
console.log(defaultValue);

// Опциональная цепочка вызовов и оператор нулевого слияния
const streetName = user?.address?.street ?? "Unknown";
console.log(streetName);
