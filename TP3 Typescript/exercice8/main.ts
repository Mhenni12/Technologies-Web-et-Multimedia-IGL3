import { add, subtract } from "./index";

console.log("Add(10, 4):", add(10, 4));
console.log("Subtract(10, 4):", subtract(10, 4));


import type { User } from "./types"; // n’importe que le type, pas de code JS généré

const user: User = { id: 1, name: "Aziz" };
console.log("User:", user);
