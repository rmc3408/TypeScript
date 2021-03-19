"use strict";
/**
 * Build company must have depatment.
 * Create object for each department.
 */
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log('Department: ' + this.name);
    };
    return Department;
}());
var acc = new Department("financial");
console.log(acc);
acc.describe();
/**
 * Use describe metho from Department as pointing reference.
 * Calling this method; this.name will look in acc2 object
 * need to have name.
 *
 * it must have same name as department class and object key
 */
var acc2 = {
    name: 'Warehouse',
    describe: acc.describe
};
acc2.describe();
//# sourceMappingURL=app.js.map