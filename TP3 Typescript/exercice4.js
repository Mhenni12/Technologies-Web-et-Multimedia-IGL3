// Tous les champs doivent être présents sauf email qui est optionnel
var user1 = {
    id: 1,
    name: "Aziz",
    email: "aziz@gmail.com",
    isAdmin: false
};
console.log("User1:", user1);
var admin1 = {
    id: 2,
    name: "Saleh",
    isAdmin: true,
    permissions: ["Execute program", "Add users", "Delete users"]
};
console.log("Admin1:", admin1);
