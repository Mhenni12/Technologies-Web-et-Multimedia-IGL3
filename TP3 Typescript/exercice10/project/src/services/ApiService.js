"use strict";
// Service fictif qui "récupère" une liste de livres (simulé avec Promise + setTimeout)
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
var Book_1 = require("../models/Book");
var ApiService = /** @class */ (function () {
    function ApiService() {
    }
    ApiService.fetchBooks = function () {
        var fakeBooks = [
            new Book_1.Book(1, "Le Petit Prince", "Antoine de Saint-Exupéry", 1943, true),
            new Book_1.Book(2, "1984", "George Orwell", 1949, true),
            new Book_1.Book(3, "Clean Code", "Robert C. Martin", 2008, true),
            new Book_1.Book(4, "The Pragmatic Programmer", "Andrew Hunt", 1999, true)
        ];
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(fakeBooks); }, 500); // simule latence réseau
        });
    };
    return ApiService;
}());
exports.ApiService = ApiService;
