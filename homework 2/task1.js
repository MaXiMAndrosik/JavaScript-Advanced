class Books {
    #books = [];

    constructor(books) {
        this.#books = books;
    }
    // возвращает текущий список книг
    allBooks() {
        return this.#books;
    }
    // проверяет наличие книги в библиотеке и возвращать true или false
    hasBook(title) {
        return this.#books.some(book => book.title === title);
    }
    // добавляет книгу в список. Если книга с таким названием уже существует в списке, выбрасывает ошибку с соответствующим сообщением
    addBook(title, author, year) {
        if (this.hasBook(title)) {
            // Выбрасывание ошибки при попытке добавления дубликата книги
            throw new Error(`Book with title "${title}" already exists.`);
        }
        this.#books.push({ title, author, year });
    }
    // удаляет книгу из списка по названию. Если книги с таким названием нет в списке, выбрасывает ошибку с соответствующим сообщением
    removeBook(title) {
        if (!this.hasBook(title)) {
            // Выбрасывание ошибки при попытке удаления книги, которой нет в списке
            throw new Error(`Book with title "${title}" does not exist.`);
        }
        this.#books = this.#books.filter(book => book.title !== title);
    }
    totalBooks() {
        return this.#books.length;
    }
}

const library = new Books([
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
]);

console.log(library.allBooks());

library.addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925);
console.log(library.allBooks());

// library.addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925); // Error: Book with title "The Great Gatsby" already exists.

library.removeBook("To Kill a Mockingbird");
console.log(library.allBooks());

// library.removeBook("To Kill a Mockingbird"); // Error: Book with title "To Kill a Mockingbird" does not exist.

console.log(library.totalBooks()); // 3

console.log(library.hasBook("1984")); // true
