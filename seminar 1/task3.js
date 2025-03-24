function dataActiveFunction() {
	const divEls = document.querySelectorAll("div");

	const arrayEls = Array.from(divEls);

	const filterArray = arrayEls.filter((element) => element.dataset.active);

	filterArray.forEach((element) => {
		console.log(element);
	});

	arrayEls.forEach((div) => {
		if (div.getAttribute("data-active")) {
			console.log(div);
		}
	});
}

dataActiveFunction();
