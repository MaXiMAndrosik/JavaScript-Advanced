// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации
const chefs = new Map();
chefs.set("Виктор", Symbol.for("Пицца"));
chefs.set("Ольга", Symbol.for("Суши"));
chefs.set("Дмитрий", Symbol.for("Десерт"));
// console.log(chef);

// Блюда и их повара
const dishes = new Map();
dishes.set(Symbol.for("Пицца"), ["Маргарита", "Пепперони"]);
dishes.set(Symbol.for("Суши"), ["Филадельфия", "Калифорния"]);
dishes.set(Symbol.for("Десерт"), ["Тирамису", "Чизкейк"]);
// console.log(dishes);

// Заказы клиентов и их блюда
const orders = new Map();
orders.set('Алексей', ["Маргарита", "Тирамису"]);
orders.set('Мария', ["Калифорния", "Маргарита"]);
orders.set('Ирина', ["Чизкейк"]);
// console.log(orders);

/**
 * Retrieves the names of chefs who prepare specific dishes.
 * @returns [{название блюда} - повар: {имя повара}., ...]
 */
// Пицца Маргарита - повар: Виктор
function getChefNamesByDishes() {
    let chefsDishes = [];
    let allDishes = [];
    for (const order of orders.values()) { // allDishes - массив блюд из всех текущих заказов
        allDishes = [...order, ...allDishes]; // ['Чизкейк', 'Суши Калифорния', 'Пицца Маргарита', 'Пицца Маргарита', 'Тирамису']
    }
    for (const dish of dishes.entries()) { // [Symbol(Пицца), Array(2)]
        allDishes.forEach(element => {
            if (dish[1].includes(element)) {
                for (const chef of chefs.entries()) { // ['Виктор', Symbol(Пицца)]
                    if (chef[1] == dish[0]) {
                        console.log(`${Symbol.keyFor(chef[1])} ${element} - повар: ${chef[0]}`);  // Вывод задействованных поваров в консоль
                        chefsDishes.push(`${Symbol.keyFor(chef[1])} ${element} - повар: ${chef[0]}`);
                    }
                }
            }
        });
    }
    return chefsDishes;
}

console.log(getChefNamesByDishes());

/**
 * Returns orders from visitors.
 * @returns [Клиент {имя клиента} заказал: {названия блюд}, ...]
 */
// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
function getOrders() {
    let allOrders = [];
    for (const client of orders.entries()) { // ['Алексей', Array(2)] client[0] -> имя клиента
        let temp = [];
        for (const order of client[1]) { // order -> название блюда из заказа: "Маргарита"
            for (const dish of dishes) { // [Symbol(Пицца), Array(2)]
                if (dish[1].includes(order)) {
                    temp.push(`${Symbol.keyFor(dish[0])} ${order}`);
                }
            }
        }
        console.log(`Клиент ${client[0]} заказал: ${temp.join(", ")}.`); // Вывод заказов в консоль
        allOrders.push(`Клиент ${client[0]} заказал: ${temp.join(", ")}.`);
    }
    return allOrders;
}

console.log(getOrders());



