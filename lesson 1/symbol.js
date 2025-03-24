// // Символ объявляется через функцию Symbol():
// const symbol = Symbol(); 

// // значение уникально даже если мы создадим несколько символов с одинаковым описанием
// const dogId = Symbol("dog");
// const dog1 = Symbol("dog");
// const dog2 = Symbol("dog");

// console.log(dog1); // Symbol(dog)
// console.log(dog2); // Symbol(dog)

// console.log(dog1 == dog2); // false
//------------------------------------------------------------------
// const dogID = Symbol("dog");

// // alert(dogID); // TypeError: Failed to execute 'alert' on 'Window': Cannot convert a Symbol value to a string

// console.log(dogID); // Symbol(dog)
// console.log(dogID.description); // dog - можно посмотреть описание
//-------------------------------------------------------------------
// let id = Symbol("id");

// // При создании объекта, где в качестве ключа у нас использован символ, необходимо использовать квадратные скобки
// let buddy = {
// 	[id]: "Жучка", 
// };
// // То же самое, при обращении к полю объекта, в названии которого использован символ
// console.log(buddy[id]); // Жучка

// buddy[id] = "Бобик";
// console.log(buddy[id]); // Бобик
//---------------------------------------------------------------
// // С использованием идентификатора, созданного с помощью Symbol, можно создать
// // так называемые «скрытые» свойства объекта. Эти свойства не получится нечаянно
// // перезаписать, обратившись из различных частей программы

// // Разберём, чем же лучше использовать Symbol(‘id’), а не строку ‘id’? Если объект
// // buddy будет частью стороннего кода, то небезопасно добавлять к нему новые поля

// let buddy = { name: "Тузик" }; // Объявляем в нашем скрипте свойство 'id'
// buddy.id = "Наш идентификатор"; 
// buddy.id = "Их идентификатор"; // ...другой скрипт тоже хочет свой идентификатор

// console.log(buddy.id); // Их идентификатор Упс!
//-----------РЕШЕНИЕ
// // Свойства с ключами-символами игнорируются в итераторе объектов for(… in …) и
// // структурой Object.keys(buddy). Это часть общего принципа сокрытия свойств с
// // ключами-символами. Если какая-то сторонняя библиотека будет перебирать
// // 8свойства, она их также не получит

// let buddies = {
// 	[Symbol("Жучка")]: "Жучка",
// 	[Symbol("Мурка")]: "Мурка",
// 	[Symbol("Таракашка")]: "Таракашка",
// 	elephant: "Слон",
// 	// cat: "Барсик",
// };

// console.log(buddies);

// let newBuddies = {};
// // Копируем все ключи-символы из buddies в newBuddies
// // Object.assign копирует все свойства, в том числе, символьные
// Object.assign(newBuddies, buddies);

// buddies.cat = "Барсик";

// console.log(newBuddies);
// console.log(buddies);
//-------------------------------------------------------Symbol.for  ----
// // читаем символ из глобального реестра и записываем его в переменную
// let id = Symbol.for("id"); // если символа не существует он будет создан

// let idAgain = Symbol.for("id"); // читаем символ снова (возможно из другого кода)
// // и записываем в другую переменную

// alert(id === idAgain); // true - проверяем, что это один и тот же символ

// console.log(id.description); // id
//--------------------Symbol.keyFor---------------------
// метод Symbol.keyFor (идентификатор), возвращающий описание символа
// по идентификатору. Единственное, этот метод работает для глобальных символов, а
// при попытке поиска обычных вернёт undefined

let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

console.log(Symbol.keyFor(sym)); // name
console.log(Symbol.keyFor(sym2)); // id

// Но мы всегда можем использовать свойство description, которое доступно для всех

let globalSimbol = Symbol.for('name');
let localSymbol = Symbol('name');

console.log(globalSimbol.description); // name
console.log(localSymbol.description); // name

console.log(Symbol.keyFor(globalSimbol)); // name
console.log(Symbol.keyFor(localSymbol)); // undefined