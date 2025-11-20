interface User {
  id: number;
  name: string;
  email? : string; // champ optionnel
  readonly isAdmin: boolean; // champ en lecture seule
}

// Tous les champs doivent être présents sauf email qui est optionnel
const user1 : User = {
  id: 1,
  name: "Aziz",
  email: "aziz@gmail.com",
  isAdmin: false
};
console.log("User1:", user1);

interface Admin extends User {
  permissions: string[];
}

const admin1 : Admin = {
  id: 2,
  name: "Saleh",
  isAdmin: true,
  permissions: ["Execute program", "Add users", "Delete users"]
};
console.log("Admin1:", admin1);