"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(id, title, author, year, available) {
        if (available === void 0) { available = true; }
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.available = available;
    }
    return Book;
}());
exports.Book = Book;
