// 1. Fonction add
function add(a: number, b: number): number {
  return a + b;
}
console.log("Add:", add(5, 7));

// 2. Fonction greet avec paramètre optionnel
function greet(name: string, age?: number): void {
  const message :  string = age ? `Nom: ${name}, Age: ${age}` : `Nom: ${name}`;
  console.log(message);
}
greet("Aziz");
greet("Ali", 22);

// 3. Fonction power avec valeur par défaut pour exp
function power(base: number, exp: number = 2): number {
  return Math.pow(base, exp);
}
console.log("Power(3):", power(3));       
console.log("Power(2, 5):", power(2, 5)); 

// 4. Fonction combine avec surcharge
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}

console.log("Combine numbers:", combine(10, 20));       // 30
console.log("Combine strings:", combine("Hello, ", "TS")); // "Hello, TS"
// console.log("Combine mixed:", combine("Age: ", 30));   //!Error