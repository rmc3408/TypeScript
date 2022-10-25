"use strict";
/**
 * CLASSES
 *
 * Build company must have depatment.
 * Create object for each department.
 */
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
        this.departID = 2;
        //private name: string;
        this.employees = [];
        //this.name = n;
    }
    Department.prototype.describe = function () {
        console.log('Department 00' + this.departID + ': ' + this.name);
    };
    Department.prototype.addingEmp = function (fName) {
        this.employees.push(fName);
        //this.departID = this.departID + 1; //error because readonly
    };
    Department.prototype.printEmp = function () {
        console.log(this.employees);
    };
    return Department;
}());
var acc = new Department("financial");
console.log(acc);
acc.describe();
acc.addingEmp('Anna');
//acc.employees[1] = 'Suzy';
acc.printEmp();
/**
 * Use describe metho from Department as pointing reference.
 * Calling this method; this.name will look in acc2 object
 * need to have name.
 *
 * it must have same model as department class
 */
var acc2 = {
    name: 'Warehouse',
    describe: acc.describe
};
//acc2.describe(); // if name is a private field it wont access from outside class.
var acc3 = {
    name: 'Shippping',
    described: acc.describe
};
//acc3.described();
//# sourceMappingURL=classes.js.map