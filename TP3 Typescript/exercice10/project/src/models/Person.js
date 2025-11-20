"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = exports.User = exports.Person = exports.Role = void 0;
var Role;
(function (Role) {
    Role["User"] = "User";
    Role["Admin"] = "Admin";
})(Role || (exports.Role = Role = {}));
// Classe abstraite Person
var Person = /** @class */ (function () {
    function Person(id, name, role) {
        this.id = id;
        this.name = name;
        this.role = role;
    }
    return Person;
}());
exports.Person = Person;
// User concrète
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(id, name) {
        return _super.call(this, id, name, Role.User) || this;
    }
    User.prototype.describe = function () {
        return "User ".concat(this.name, " (id=").concat(this.id, ")");
    };
    return User;
}(Person));
exports.User = User;
// Admin concrète
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(id, name, permissions) {
        if (permissions === void 0) { permissions = []; }
        var _this = _super.call(this, id, name, Role.Admin) || this;
        _this.permissions = permissions;
        return _this;
    }
    Admin.prototype.describe = function () {
        return "Admin ".concat(this.name, " (id=").concat(this.id, ") - perms: ").concat(this.permissions.join(", "));
    };
    return Admin;
}(Person));
exports.Admin = Admin;
