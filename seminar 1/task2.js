const books = [
	{ title: "1984", author: "George Orwell" },
	{ title: "Brave New World", author: "Aldous Huxley" },
	{ title: "Fahrenheit 451", author: "Ray Bradburry" },
];

const library = {
	books,
	[Symbol.iterator]() {
		this.current = this.books[0];
		return this;
	},
	next() {
		return this.current <= this.books.length ? { flag: false, value: this.current++ } : { flag: true };
	},
};

for (let book of books) {
	console.log(`Книга под названием: ${book.title}, автор: ${book.author}`);
}
