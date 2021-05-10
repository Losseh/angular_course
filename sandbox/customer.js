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
exports.__esModule = true;
exports.Customerr = exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.welcome = function () {
        return "Hello " + this.name;
    };
    return Person;
}());
exports.Person = Person;
var Customerr = /** @class */ (function (_super) {
    __extends(Customerr, _super);
    function Customerr(name, age, advisor) {
        var _this = _super.call(this, name, age) || this;
        _this.advisor = advisor;
        return _this;
    }
    Customerr.prototype.welcome = function () {
        return "Good morning " + this.name;
    };
    return Customerr;
}(Person));
exports.Customerr = Customerr;
