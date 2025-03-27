try {
	undefined = 1;
} catch {
	console.log("Что-то пошло не так...");
} finally {
	console.log("Отличный результат");
}

function divideNumbers(a, b) {
	try {
		const result = a / b;
		if (isNaN(result)) {
			throw new Error("Результат не является числом");
		}
		console.log("Результат деления:", result);
	} catch (error) {
		console.log("Ошибка деления:", error);
	} finally {
		console.log("Операция деления завершена");
	}
}

divideNumbers(10, 2);
divideNumbers("123", "fbzfvg"); // Ошибка деления: Error: Результат не является числом

//----------------------------------

class CustomError extends Error {
	constructor(message) {
		super(message);
		this.name = "CustomError";
	}
}

function validateNumber(value) {
	if (typeof value !== "number") {
		throw new CustomError("Значеине должно быть числом");
	}
	console.log("Валидация успешна");
}

try {
	validateNumber('42');
} catch (error) {
	if (error instanceof CustomError) {
		console.error("Ошибка", error.message);
		console.log("Тип ошибки", error.name);
	} else {
		console.error("Произошла ошибка:", error);
	}
}
