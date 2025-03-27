// Оператор instanceof нам поможет для определения
// 	● Принадлежит ли объект к предлагаемому классу
// 	● Либо к одному из встроенных классов, как в примере с Array
// 	● Или для функций — конструкторов

class Animal {
	constructor(name) {
		this.name = name;
	}
}

class Dog extends Animal {
	bark() {
		console.log("Woof!");
	}
}

const animal = new Animal("Animal");
const dog = new Dog("Dog");

console.log(animal instanceof Animal);
console.log(dog instanceof Animal);
console.log(dog instanceof Dog);

console.log(animal instanceof Dog);

console.log(dog instanceof Cat);
