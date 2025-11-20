var nom = "Aziz";
console.log("Name: ".concat(nom));
var age = 21;
console.log("Age: ".concat(age));
var isAdmin = true;
console.log("Is Admin: ".concat(isAdmin));
var scores = [1, 2, 3];
console.log("Scores: ".concat(scores));
var student = ["Aziz", 21];
console.log("Student: Name - ".concat(student[0], ", Age - ").concat(student[1]));
var Role;
(function (Role) {
    Role[Role["User"] = 0] = "User";
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["SuperAdmin"] = 2] = "SuperAdmin";
})(Role || (Role = {}));
var role = Role.Admin;
console.log("Role: ".concat(Role[role], " (").concat(role, ")"));
console.log(Role);
/* Output:
{
  '0': 'User',
  '1': 'Admin',
  '2': 'SuperAdmin',
  User: 0,
  Admin: 1,
  SuperAdmin: 2
}
*/
console.log(Role.Admin); // Output: 1
console.log(Role[role]); // Output: 'Admin'
