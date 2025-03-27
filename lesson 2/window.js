// Глобальный объект — хранит функции и переменные, которые могут быть доступны
// в любой части программы. По умолчанию — это встроенные объекты
console.log(window);
console.log(window.window);
console.log(self);
console.log(frames);
console.log(globalThis);
console.log(globalThis == window); // true

const newWindow = window.open('https://www.example.com', '_blank');
console.log(window.innerHeight);
console.log(window.innerWidth);
self.resizeTo(800,600);
console.log(frames.length);

// Устаревший оператор объявления переменной var создавал переменные в
// глобальном объекте. Функции, объявленные с ключевым словом function, также
// создаются с привязкой к window
var glob = 5;
function increment(val) {
    return val + 1;
}
console.log(window.glob);
console.log(window.increment);

const local = 5;
let localFunc = () => 'localFunc';
console.log(local); // 5
console.log(localFunc()); // localFunc
console.log(window.local); // undefined
console.log(window.localFunc); // undefined
