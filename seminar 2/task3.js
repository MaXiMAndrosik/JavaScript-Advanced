const inputEl = document.querySelector(".input");
const button = document.querySelector(".checkbtn");
const answerBox = document.querySelector(".answer");

button.addEventListener("click", () => {
	try {
		const result = inputEl.value;

		if (isNaN(result) || result === null || result === "") {
			throw new Error("Это не число");
		}

		answerBox.textContent = "Значение является числом";
	} catch (error) {
		answerBox.textContent = error.message;
	}
});
