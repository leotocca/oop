// The reading list - https://github.com/gSchool/JS-Intro-OOP-Exercises#the-reading-list

class Book {
	constructor(title, genre, author) {
		this.title = title;
		this.genre = genre;
		this.author = author;
		this.read = false;
		this.readDate = null;
	}
}

class BookList {
	constructor() {
		this.booksRead = 0;
		this.booksNotRead = 0;
		this.allBooks = [];
		this.nextBook = this.allBooks[2];
		this.nextBook = this.allBooks[1];
		this.nextBook = this.allBooks[0];
	}

	add(bookName) {
		this.allBooks.push(bookName);
		this.booksNotRead += 1;
	}

	finishCurrentBook() {
		this.allBooks[1].read = true;
		this.allBooks[1].readDate = Date.now();
		this.allBooks.shift();
		this.booksRead += 1;
		this.booksNotRead -= 1;
	}
}
