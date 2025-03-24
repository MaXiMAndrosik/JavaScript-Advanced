function addMetadata(book, metadataType, data) {
	if (!data instanceof Array && book[metadataType]) {
		book[metadataType].push(data);
	} else {
		book[metadataType] = [data];
	}
}

function getMetadata(book, metadataType) {
	return book[metadataType];
}

const book = {
	title: "1984",
	author: "George Orwell",
};

const reviews = Symbol("review");
const rating = Symbol("rating");
const tags = Symbol("tags");

addMetadata(book, reviews, "Очень интересная книга про утопию");
addMetadata(book, rating, "10");
addMetadata(book, tags, ["утопия", "детектив", "большой брат"]);

console.log(getMetadata(book, reviews));
console.log(getMetadata(book, rating));
console.log(getMetadata(book, tags));

console.log(book);
