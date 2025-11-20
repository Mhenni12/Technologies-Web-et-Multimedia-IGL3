// une variable qui peut avoir deux types possibles

let id: number | string = 42;
console.log(`ID: ${id}`);

id = 'item';
console.log(`ID: ${id}`);

// l'intersection entre les types

type A = {name: string};
type B  = {age : number};
type C = A & B;

const person : C = {name : "Aziz", age : 21};
console.log(`Person: Name - ${person.name}, Age - ${person.age}`);

// Aliases

type Status = 'pending' | 'done' | 'canceled';
const statusObj: Status = 'pending';
console.log(`Status: ${statusObj}`);
console.log(`Type: ${typeof statusObj}`);
// statusObj = "random string"; //! -> ERROR

// unknown data type

const unknownVar: unknown = 'This is a string';
if (typeof unknownVar === "string") {
  const length : number = (unknownVar as string).length; // assertion de type
  console.log(`String: ${unknownVar} - String length: ${length}`);
}