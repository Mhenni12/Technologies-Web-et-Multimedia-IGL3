// 1. Classe Person
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person("Aziz", 22);
person1.greet();

// 2. Classe Student héritant de Person
class Student extends Person {
  school: string;

  constructor(name: string, age: number, school: string) {
    super(name, age); // Appel au constructeur de Person
    this.school = school;
  }

  greet(): void {
    console.log(`Hi, I'm ${this.name}, ${this.age} years old, and I study at ${this.school}.`);
  }
}

const student1 = new Student("Ali", 20, "FST Tunis");
student1.greet();

// 3. Classe abstraite Shape
abstract class Shape {
  abstract area(): number; // méthode abstraite
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
console.log("Circle area:", circle.area());

const rectangle = new Rectangle(4, 6);
console.log("Rectangle area:", rectangle.area());

// 4. Interface Drivable + classe Car
interface Drivable {
  drive(): void;
}

class Car implements Drivable {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  drive(): void {
    console.log(`${this.brand} is driving...`);
  }
}

const car1 = new Car("Toyota");
car1.drive();
