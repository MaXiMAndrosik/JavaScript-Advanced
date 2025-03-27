// У функций есть два специальных свойства: name, с помощью которого мы можем
// получить имя функции и length, позволяющее получить количество аргументов,
// описанных при объявлении без учёта остаточных аргументов

function sayHello() {
	console.log("Hello!");
}

// Свойство name можно использовать для идентификации функции в средствах
// отладки или в сообщениях об ошибках. Оно доступно только для чтения и не может
// быть изменено оператором присваивания

console.log(sayHello.name); // sayHello
console.log(window.name); // ''

// console.log(frames[0].name); // TypeError: Cannot read properties of undefined (reading 'name')

// const obj = {};
// console.log(obj.name); // undefined

class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}
}

const rect = new Rectangle(10, 5);
console.log(rect.constructor.name); // Rectangle

// Свойство length указывает, сколько аргументов ожидает функция, т. е. количество
// формальных параметров

// Массив arguments — это локальный массив, доступный во всех функциях,
// кроме стрелочных. В нём записан каждый аргумент, с которым была
// вызвана функция, начиная с 0


function sum(...args) {
    console.log(arguments.length); // 5
}

sum(1, 2, 3, 4, 5);