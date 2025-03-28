// let fetchData = (url) => {
// 	return new Promise((resolve, reject) => {
// 		fetch(url)
// 			.then((response) => response.json())
// 			.then((data) => resolve(data))
// 			.catch((error) => reject("Ошибка загрузки данных"));
// 	});
// };
// //https://randombig.cat/roar.json
// fetchData("https://jsonplaceholder.typicode.com/users")
// 	.then((data) => {
// 		console.log("Получены данные:", data);
// 	})
// 	.catch((error) => {
// 		console.log("Ошибка:", error);
// 	});

// // ----------------------------

// let checkIfFileExists = (file) => { };

// let checkFileExists = (file) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const fileExists = checkIfFileExists(file);
// 			if (fileExists) {
// 				resolve("Файл существует");
// 			} else {
// 				reject("Файл не существует");
// 			}
// 		}, 2000);
// 	});
// };

// checkFileExists("example.txt")
// 	.then((message) => {
// 		console.log(message);
// 	})
// 	.catch((error) => {
// 		console.log("Ошибка:", error);
// 	});

// // ------------------------------

// let calculateSum = (a, b) => {
// 	return new Promise((resolve, reject) => {
// 		const sum = a + b;
// 		resolve(sum);
// 	});
// };

// calculateSum("sad", 7).then((result) => {
// 	console.log("Сумма чисел:", result);
// });

// // -------------------------------

// let divideNumbers = (a, b) => {
// 	return new Promise((resolve, reject) => {
// 		b === 0 ? reject("Невозможно делить на 0") : resolve(a / b);
// 	});
// };

// divideNumbers("10", 5)
// 	.then((result) => {
// 		console.log("Результат деления:", result);
// 	})
// 	.catch((error) => {
// 		console.log("Ошибка:", error);
// 	});

// // --------------------------------

// new Promise(function (resolve) {
// 	setTimeout(() => resolve(1), 1000);
// })
// 	.then(function (result) {
// 		console.log(result);
// 		return new Promise((resolve) => {
// 			setTimeout(() => resolve(result * 2), 1000);
// 		});
// 	})
// 	.then(function (result) {
// 		console.log(result);
// 		return new Promise((resolve) => {
// 			setTimeout(() => resolve(result * 2), 1000);
// 		});
// 	})
// 	.then(function (result) {
// 		console.log(result);
// 	});

// // ----------------finally-----------------------

// let processData = (data) => { };

// let performOperation = (data) => {
// 	return new Promise((resolve, reject) => {
// 		let result = processData(data);

// 		if (result) {
// 			resolve(result);
// 		} else {
// 			reject("Ошибка операции");
// 		}
// 	}).finally(() => {
// 		console.log("Операция завершена");
// 	});
// };

// performOperation("example")
// 	.then((result) => {
// 		console.log("Результат операции:", result);
// 	})
// 	.catch((error) => {
// 		console.log("Ошибка:", error);
// 	});

// // --------------Promise.all----------------------

// Promise.all([
// 	new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
// 	new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
// 	new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ])
// 	.then(console.log)
// 	.catch(console.log);

// // -----------------------------------------------------

let checkServerResponse = (urls) => {
	let promises = urls.map((url) => fetch(url));

	return Promise.race(promises).then((response) => {
		return response.url;
	});
};

const urls = ["https://api.example.com/server1", "https://api.example.com/server2", "https://jsonplaceholder.typicode.com/users"];

checkServerResponse(urls)
	.then((fastestServer) => {
		console.log("Самый быстрый сервер:", fastestServer);
	})
	.catch((error) => {
		console.log("Ошибка:", error);
	});
