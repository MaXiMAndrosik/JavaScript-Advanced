function* numberGenerator() {
	let number = 1;

	while (true) {
		yield number;
		number++;
	}
}

const generator = numberGenerator();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
