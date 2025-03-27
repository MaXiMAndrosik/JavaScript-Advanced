// class AutoMobile {
//   _horsePower = 0; // свойство защищённое

//   set horsePower(value) {
//     if (value < 0) throw new Error('Отрицательное количество сил');
//     this._horsePower = value;
//   }

//   get horsePower () {
//     return this._horsePower;
//   }

//   constructor(power) {
//     this._horsePower = power;
//   }
// }

// let auto = new AutoMobile(100);

// auto.horsePower = 10;

//------------------------------------

class AutoMobile {
	#horsePower = 0; // приватное свойство

	set horsePower(value) {
		if (value < 0) throw new Error("Отрицательное количество сил");
		this.#horsePower = value;
	}

	get horsePower() {
		return this.#horsePower;
	}

	constructor(power) {
		this.#horsePower = power;
	}
}

let auto = new AutoMobile(100);
auto.horsePower = 50;
console.log(auto.horsePower); // 50

// auto.#horsePower = 50; //Uncaught SyntaxError: Private field '#horsePower' must be declared in an enclosing class
