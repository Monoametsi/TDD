"use strict";
exports.__esModule = true;
var Calc = /** @class */ (function () {
    function Calc() {
    }
    // subtract, multiply, divide, power of, root of
    Calc.prototype.add = function (a, b) {
        var result = a + b;
        if (typeof result !== 'number') {
            throw new Error('you must provide a number');
        }
        return result;
    };
    Calc.prototype.subtract = function (a, b) {
        return a - b;
    };
    Calc.prototype.multiply = function (a, b) {
        return a * b;
    };
    Calc.prototype.divide = function (a, b) {
        return a / b;
    };
    Calc.prototype.powerOf = function (a, b) {
        return Math.pow(a, b);
    };
    Calc.prototype.rootOf = function (a) {
        return Math.sqrt(a);
    };
    return Calc;
}());
var x = new Calc();
console.log(isNaN(x.add(3, 2 / 0)));
exports["default"] = new Calc();
