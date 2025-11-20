const nom: string = "Aziz";
console.log(`Name: ${nom}`);

const age: number = 21;
console.log(`Age: ${age}`);

const isAdmin: boolean = true;
console.log(`Is Admin: ${isAdmin}`);

const scores: number[] = [1, 2, 3];
console.log(`Scores: ${scores}`);

const student: [string, number] = ["Aziz", 21];
console.log(`Student: Name - ${student[0]}, Age - ${student[1]}`);

enum Role { User, Admin, SuperAdmin }
const role: Role = Role.Admin;
console.log(`Role: ${Role[role]} (${role})`);

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