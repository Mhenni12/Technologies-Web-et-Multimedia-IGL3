"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Repository_1 = require("../utils/Repository");
var Library = /** @class */ (function () {
    function Library(bookRepo, userRepo) {
        // map bookId -> userId (qui a emprunté)
        this.loans = new Map();
        this.books = bookRepo !== null && bookRepo !== void 0 ? bookRepo : new Repository_1.Repository();
        this.users = userRepo !== null && userRepo !== void 0 ? userRepo : new Repository_1.Repository();
    }
    // Books management
    Library.prototype.addBook = function (book) {
        this.books.add(book);
    };
    Library.prototype.removeBook = function (bookId, requester) {
        // Optionnel : only admin can remove
        if (requester && requester.role !== "Admin") {
            throw new Error("Only admins can remove books.");
        }
        // Also prevent removing borrowed book
        if (this.loans.has(bookId)) {
            throw new Error("Book is currently borrowed and cannot be removed.");
        }
        return this.books.remove(bookId);
    };
    Library.prototype.searchByTitle = function (title) {
        return this.books.find(function (b) { return b.title.toLowerCase().indexOf(title.toLowerCase()) !== -1; });
    };
    Library.prototype.searchByAuthor = function (author) {
        return this.books.find(function (b) { return b.author.toLowerCase().indexOf(author.toLowerCase()) !== -1; });
    };
    Library.prototype.getAllBooks = function () {
        return this.books.getAll();
    };
    Library.prototype.listAvailableBooks = function () {
        return this.books.find(function (b) { return b.available; });
    };
    // Users management
    Library.prototype.addUser = function (user) {
        this.users.add(user);
    };
    Library.prototype.getUser = function (userId) {
        return this.users.getById(userId);
    };
    // Borrow/return
    Library.prototype.borrowBook = function (bookId, userId) {
        var book = this.books.getById(bookId);
        if (!book)
            throw new Error("Book id=".concat(bookId, " not found."));
        if (!book.available)
            throw new Error("Book \"".concat(book.title, "\" is not available."));
        var user = this.users.getById(userId);
        if (!user)
            throw new Error("User id=".concat(userId, " not found."));
        // mark as borrowed
        book.available = false;
        this.loans.set(bookId, userId);
    };
    Library.prototype.returnBook = function (bookId) {
        var book = this.books.getById(bookId);
        if (!book)
            throw new Error("Book id=".concat(bookId, " not found."));
        if (!this.loans.has(bookId))
            throw new Error("Book id=".concat(bookId, " is not borrowed."));
        book.available = true;
        this.loans.delete(bookId);
    };
    // For debugging / display
    Library.prototype.getLoans = function () {
        return Array.from(this.loans.entries()).map(function (_a) {
            var bookId = _a[0], userId = _a[1];
            return ({ bookId: bookId, userId: userId });
        });
    };
    return Library;
}());
exports.Library = Library;
