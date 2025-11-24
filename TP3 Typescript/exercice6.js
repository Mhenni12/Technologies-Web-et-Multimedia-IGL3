var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1. Classe Person
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
var person1 = new Person("Aziz", 22);
person1.greet();
// 2. Classe Student héritant de Person
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, school) {
        var _this = _super.call(this, name, age) || this; // Appel au constructeur de Person
        _this.school = school;
        return _this;
    }
    Student.prototype.greet = function () {
        console.log("Hi, I'm ".concat(this.name, ", ").concat(this.age, " years old, and I study at ").concat(this.school, "."));
    };
    return Student;
}(Person));
var student1 = new Student("Ali", 20, "FST Tunis");
student1.greet();
// 3. Classe abstraite Shape
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var circle = new Circle(5);
console.log("Circle area:", circle.area());
var rectangle = new Rectangle(4, 6);
console.log("Rectangle area:", rectangle.area());
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    Car.prototype.drive = function () {
        console.log("".concat(this.brand, " is driving..."));
    };
    return Car;
}());
var car1 = new Car("Toyota");
car1.drive();
