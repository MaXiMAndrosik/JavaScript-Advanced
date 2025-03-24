// // Map — это коллекция ключ/значение, как и Object. Но основное отличие в том, что
// // Map позволяет использовать ключи любого типа

// let map = new Map(); // new Map() — создаёт коллекцию

// map.set("1", "str1"); // map.set(key, value) — записывает по ключу key значение value
// map.set(1, "num1");
// map.set(true, "bool1");

// console.log(map);
// //---------------------------------
// console.log(map.get(1)); // map.get(key) — возвращает значение по ключу или undefined, если ключ key отсутствует
// console.log(map.get("1"));
// console.log(map.size); // map.size — возвращает текущее количество элементов
//----------------get & set
// let map = new Map();
// map.set("1", "We");
// map.set(1, "likes");
// map.set(true, "JS");
// console.log(map);

// map.has(key) — возвращает true, если ключ key присутствует в коллекции, иначе false
// map.delete(key) — удаляет элемент (пару «ключ/значение») по ключу key
// map.clear() — очищает коллекцию от всех элементов

//--------------Перебор коллекции Map

// // Для перебора коллекции Map есть 4 метода:
// let = recipeMap = new Map([
// 	["огурец", 500],
// 	["помидор", 350],
// 	["лук", 50],
// ]);

// console.log(recipeMap);

//     // ● map.keys() — возвращает итерируемый объект по ключам
// for (const vegitable of recipeMap.keys()) {
// 	console.log(vegitable);
// }

//     // ● map.values() — возвращает итерируемый объект по значениям
// for (const amount of recipeMap.values()) {
// 	console.log(amount);
// }

//     // ● map.entries() — возвращает итерируемый объект по парам вида [ключ,
//     // значение], этот вариант используется по умолчанию в for(..of..)
// for (const entry of recipeMap) {
// 	console.log(entry);
// }

//     // ● map.forEach() — итератор, работающий так же, как и с массивом
// recipeMap.forEach((value, key, map) => {
// 	console.log(`${key}: ${value}`);
// });

//---------------------------------Работа с объектами
// Мы можем создавать коллекции Map из объектов и, наоборот, объекты из Map
// let map = new Map(Object.entries(obj));
// let obj = Object.fromEntries(map);

//------------------------------------SET----------------
// Объект Set — это особый вид коллекции: «множество» значений (без ключей), где
// каждое значение может появляться только один раз
// Его основные методы это:
    // ● new Set(iterable) — создаёт Set, и если в качестве аргумента был предоставлен
    // итерируемый объект (обычно это массив), то копирует его значения в новый Set
    // ● set.add(value) — добавляет значение (если оно уже есть, то ничего не делает),
    // возвращает тот же объект set
    // ● set.delete(value) — удаляет значение, возвращает true, если value было во
    // множестве на момент вызова, иначе false
    // ● set.has(value) — возвращает true, если значение присутствует во множестве,
    // иначе false
    // ● set.clear() — удаляет все имеющиеся значения
    // ● set.size — возвращает количество элементов во множестве

// let buddies = ["Жучка", "Тузик", "Булька", "Тузик", "Бобик", "Жучка", "Валера", "Жучка", "Тузик", "Манька"];
// let uniqBuddies = new Set(buddies);

// console.log(uniqBuddies);
// //------------------------------------------------

//     Перебор элементов объекта Set происходит схоже с перебором у Map специально
// для совместимости между ними. И теми же методами: forEach, keys, values, entries

// let arr = Array.from(uniqBuddies);
// console.log(arr);

// for (const element of uniqBuddies) {
// 	console.log(element);
// }
