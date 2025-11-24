// 1. Fonction générique identity
function identity(value) {
    return value;
}
console.log("Identity number:", identity(42));
console.log("Identity string:", identity("Hello"));
// 2. Fonction générique getFirst
function getFirst(arr) {
    return arr[0];
}
console.log("First number:", getFirst([10, 20, 30]));
console.log("First string:", getFirst(["TS", "JS", "Node"]));
// 3. Classe générique Repository
var Repository = /** @class */ (function () {
    function Repository() {
        this.items = [];
    }
    Repository.prototype.add = function (item) {
        this.items.push(item);
    };
    Repository.prototype.remove = function (item) {
        this.items = this.items.filter(function (i) { return i !== item; });
    };
    Repository.prototype.getAll = function () {
        return this.items;
    };
    return Repository;
}());
var numberRepo = new Repository();
numberRepo.add(1);
numberRepo.add(2);
numberRepo.remove(1);
console.log("Number repository:", numberRepo.getAll());
var stringRepo = new Repository();
stringRepo.add("Alice");
stringRepo.add("Bob");
console.log("String repository:", stringRepo.getAll());
var successResponse = {
    data: [1, 2, 3]
};
var errorResponse = {
    data: null,
    error: "Something went wrong"
};
console.log("Success Response:", successResponse);
console.log("Error Response:", errorResponse);
