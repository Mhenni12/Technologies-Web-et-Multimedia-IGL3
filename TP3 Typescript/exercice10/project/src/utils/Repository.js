"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
var Repository = /** @class */ (function () {
    function Repository() {
        this.items = [];
    }
    Repository.prototype.add = function (item) {
        // prevent duplicate ids
        if (this.items.find(function (i) { return i.id === item.id; })) {
            throw new Error("Item with id ".concat(item.id, " already exists."));
        }
        this.items.push(item);
    };
    Repository.prototype.remove = function (id) {
        var lengthBefore = this.items.length;
        this.items = this.items.filter(function (i) { return i.id !== id; });
        return this.items.length < lengthBefore;
    };
    Repository.prototype.getAll = function () {
        return __spreadArray([], this.items, true);
    };
    Repository.prototype.getById = function (id) {
        return this.items.find(function (i) { return i.id === id; });
    };
    Repository.prototype.find = function (predicate) {
        return this.items.filter(predicate);
    };
    return Repository;
}());
exports.Repository = Repository;
