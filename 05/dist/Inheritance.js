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
var Dept = /** @class */ (function () {
    function Dept(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    //{
    //console.log(`Department ${this.id}: ${this.name}`);
    //}
    Dept.prototype.createEmp = function () {
    };
    Dept.prototype.addEmp = function (name) {
        this.employees.push(name);
    };
    return Dept;
}());
var IT = /** @class */ (function (_super) {
    __extends(IT, _super);
    function IT(id, name, adm, report) {
        var _this = _super.call(this, id, name) || this;
        _this.adm = adm;
        _this.lastR = report;
        return _this;
    }
    Object.defineProperty(IT.prototype, "myLastR", {
        get: function () {
            if (this.lastR !== '') {
                return this.lastR;
            }
            throw new Error("Report not found");
        },
        set: function (v) {
            this.lastR = v;
        },
        enumerable: false,
        configurable: true
    });
    IT.prototype.printNames = function () {
        this.adm.forEach(function (p) { return console.log(p); });
    };
    IT.prototype.addEmp = function (name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    };
    IT.prototype.describe = function () {
        console.log("IT Department " + this.id + ": " + this.name);
    };
    IT.fiscalYear = 2021;
    return IT;
}(Dept));
var myAcc1 = new IT(2, 'IT', ['Rapha', 'Alessandro', 'Ivan'], '0');
myAcc1.describe();
myAcc1.printNames();
myAcc1.addEmp('Maxi');
console.log(myAcc1);
//GET and SET acess
console.log(myAcc1.myLastR);
myAcc1.myLastR = 'new report';
console.log(myAcc1.myLastR);
//static
console.log(IT.fiscalYear);
//# sourceMappingURL=Inheritance.js.map