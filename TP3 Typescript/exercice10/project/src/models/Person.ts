export enum Role {
  User = "User",
  Admin = "Admin"
}

// Classe abstraite Person
export abstract class Person {
  constructor(public id: number, public name: string, public role: Role) {}

  abstract describe(): string;
}

// User concrète
export class User extends Person {
  constructor(id: number, name: string) {
    super(id, name, Role.User);
  }

  describe(): string {
    return `User ${this.name} (id=${this.id})`;
  }
}

// Admin concrète
export class Admin extends Person {
  permissions: string[];

  constructor(id: number, name: string, permissions: string[] = []) {
    super(id, name, Role.Admin);
    this.permissions = permissions;
  }

  describe(): string {
    return `Admin ${this.name} (id=${this.id}) - perms: ${this.permissions.join(
      ", "
    )}`;
  }
}