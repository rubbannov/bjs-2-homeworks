"use strict"
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    };
    fix() {
        this.state = this.state * 1.5;
    };
    set state(condition) {
        if (condition < 0) {
            this._state = 0;
        } else if (condition > 100) {
            this._state = 100;
        } else {
            this._state = condition;
        };
    };
    get state() {
        return this._state;
    }
};

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    };
};

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    };
};

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    };
};

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    };
};

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    };
};

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    };
    addBook(bookOrMagazine) {
        if (bookOrMagazine.state > 30) {
            this.books.push(bookOrMagazine);
        };
    };
    findBookBy(type, value) {
        let countSearch = 0;
        if (this.books.length > 0) {
            for (let book of this.books) {
                let keys = Object.keys(book);
                let values = Object.values(book);
                if (keys.some(el => el === type) && values.some(el => el === value)) {
                    return book;
                } else {
                    countSearch++;
                };
                if (countSearch == this.books.length) {
                    return null;
                };
            };
        } else {
            return null;
        }
    };
    giveBookByName(bookName) {
        let countSearch = 0;
        if (this.books.length > 0) {
            for (let book of this.books) {
                let values = Object.values(book);
                if (values.some(el => el === bookName)) {
                    this.books = this.books.filter(value => value.name !== bookName);
                    return book;
                } else {
                    countSearch++;
                };
                if (countSearch == this.books.length) {
                    return null;
                };
            };
        } else {
            return null;
        };
    };
};

let library = new Library("Городская Библиотека");

let hobbit = new FantasticBook("Д.Р. Толкин", "Хоббит, или туда и обратно", 1937, 298);
let gifts = new NovelBook("О. Генри", "Дары Волхвов", 1905, 235);
let sherlock = new DetectiveBook("Артур Конан Дойл", "Этюд в багровых тонах", 1887, 100);
let fiveWheel = new Magazine("5 Колесо", 2022, 300);
let book = new Book("А. Блок", "Ямбы", 1919, 41);
let noteBook = new PrintEditionItem("Амбарная книга", 2023, 100);

library.addBook(hobbit);
library.addBook(gifts);
library.addBook(sherlock);
library.addBook(fiveWheel);
library.addBook(book);
library.addBook(noteBook);

let searchBook = library.findBookBy("releaseDate", 1919);

let giveMeBook = library.giveBookByName("Дары Волхвов");

giveMeBook.state = 50;
giveMeBook.fix();

library.addBook(giveMeBook);