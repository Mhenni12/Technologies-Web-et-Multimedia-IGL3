var nom = "Aziz";
var age = 20;
var isStudent = true;
function add(a, b) {
    return a + b;
}
var student = /** @class */ (function () {
    function student(id, nom, prenom, age) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    student.prototype.affichage = function () {
        console.log("\u00C9tudiant #".concat(this.id, " : ").concat(this.prenom, " ").concat(this.nom, ", ").concat(this.age, " ans"));
    };
    return student;
}());
var etu1 = new student(1, "Mhenni", "Mphamed Aziz", 20);
etu1.affichage();
function fonctionTableau(tab) {
    return tab;
}
var tabnombres = fonctionTableau([1, 2]);
function fonction_union_opt(union, opt) {
    if (opt) {
        console.log("params : ".concat(union, " ").concat(opt));
    }
    else {
        console.log(" params : ".concat(union));
    }
}
var Role;
(function (Role) {
    Role["STUDENT"] = "Student";
    Role["TEACHER"] = "Teacher";
})(Role || (Role = {}));
function afficherNiveau(role) {
    console.log("Niveau s\u00E9lectionn\u00E9 : ".concat(role));
}
