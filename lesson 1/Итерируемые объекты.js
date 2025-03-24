// // Перебираемые или итерируемые объекты — это обобщение массивов. Концепция,
// // позволяющая любой объект использовать в цикле for(… of …). Естественно, массивы
// // сами по себе являются итерируемыми. Но есть большое количество других
// // встроенных объектов, которые являются итерируемыми. Например, строки

// const string = "Hello";
// console.log(string[2]);
// console.log(string.length);

// for (const str of string) {
// 	console.log(str);
// }
//------------------------
// // Symbol.iterator
// // Объект является итератором, если он умеет обращаться к элементам коллекции по
// // одному за раз, при этом отслеживая своё текущее положение внутри этой
// // последовательности

// // В JavaScript итератор — это объект, который предоставляет метод next(),
// // возвращающий следующий элемент последовательности. Этот метод возвращает
// // объект с двумя свойствами: done и value
// let range = {
// 	from: 1,
// 	to: 10,
// };
// // // TypeError: range is not iterable
// // for (let number of range) {
// // 	console.log(number);
// // }

// // Пример использования Symbol.iterator для создания итератора для числового диапазона

// // 1. Вызов for(...of...) сначала вызывает эту функцию
// range[Symbol.iterator] = function () {
// 	// она возвращает объект итератора:

// 	// 2. Далее for(...of...) работает только с этим итератором, запрашивая у него новые значения
// 	return {
// 		current: this.from,
// 		last: this.to,
// 	// 3. next() вызывается при каждой итерации циклаи возвращает следующий объект с двумя свойствами: done и value
// 		next() {
// 			return this.current <= this.last ? { done: false, value: this.current++ } : { done: true };
// 		},
// 	};
// };

// for (let number of range) {
// 	console.log(number);
// }
//---------------------------
// let range = {
// 	from: 1,
// 	to: 17,
// 	[Symbol.iterator]() {
// 		this.current = this.from;
// 		return this;
// 	},
// 	next() {
// 		return this.current <= this.to ? { done: false, value: this.current++ } : { done: true };
// 	},
// };
// for (let number of range) {
// 	console.log(number);
// }
//---------------Arrray.from
// Псевдомассивом назовём объект, который имеет индексы и свойство length
// такой объект является псевдомассивом, но, в отличие от строк, итерировать его нельзя
let pseudo = {
	0: "first",
	1: "second",
	2: "newAlem",
	length: 3,
};
// Сделать массив из подобного псевдомассива или итерируемого объекта поможет метод Array.from
let array = Array.from(pseudo);
console.log(array);
console.log(array.pop());

let pseudo2 = "It's Array Like!";
let array2 = Array.from(pseudo2);
console.log(array2);
