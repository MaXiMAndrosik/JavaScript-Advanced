// Обычная функция
// function regularFunction() {
//   console.log(this); // window
// }

// Стрелочная функция

// Особенности стрелочных функций, что делает их особенными.
	// ● Стрелочные функции не имеют своего this
	// ● В стрелочных функциях отсутствует массив arguments
	// ● Для однострочных стрелочных функций без выражений в фигурных скобках
	// автоматически подставляется return для выражения

// Стрелочные функции не имеют своего контекста выполнения и при использовании
// this внутри стрелочной функции будет возвращаться undefined

// const arrowFunction = () => {
//   console.log(this);  // window
// }

// regularFunction();
// arrowFunction();

const obj = {
	regularMethod: function () {
		console.log(this);
	},
	arrowMethod: () => {
		console.log(this);
	},
};

obj.regularMethod(); // Выводит объект obj
obj.arrowMethod(); // Выводит объект window
