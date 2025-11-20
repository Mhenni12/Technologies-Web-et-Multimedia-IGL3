// 1. Fonction add
function add(a, b) {
    return a + b;
}
console.log("Add:", add(5, 7));
// 2. Fonction greet avec paramètre optionnel
function greet(name, age) {
    var message = age ? "Nom: ".concat(name, ", Age: ").concat(age) : "Nom: ".concat(name);
    console.log(message);
}
greet("Aziz");
greet("Ali", 22);
// 3. Fonction power avec valeur par défaut pour exp
function power(base, exp) {
    if (exp === void 0) { exp = 2; }
    return Math.pow(base, exp);
}
console.log("Power(3):", power(3));
console.log("Power(2, 5):", power(2, 5));
function combine(a, b) {
    return a + b;
}
console.log("Combine numbers:", combine(10, 20)); // 30
console.log("Combine strings:", combine("Hello, ", "TS")); // "Hello, TS"
// console.log("Combine mixed:", combine("Age: ", 30));   //!Error
