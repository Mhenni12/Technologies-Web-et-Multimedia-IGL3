// une variable qui peut avoir deux types possibles
var id = 42;
console.log("ID: ".concat(id));
id = 'item';
console.log("ID: ".concat(id));
var person = { name: "Aziz", age: 21 };
console.log("Person: Name - ".concat(person.name, ", Age - ").concat(person.age));
var statusObj = 'pending';
console.log("Status: ".concat(statusObj));
console.log("Type: ".concat(typeof statusObj));
// statusObj = "random string"; //! -> ERROR
// unknown data type
var unknownVar = 'This is a string';
if (typeof unknownVar === "string") {
    var length_1 = unknownVar.length; // assertion de type
    console.log("String: ".concat(unknownVar, " - String length: ").concat(length_1));
}
