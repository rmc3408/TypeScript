"use strict";
/**
 *
 * Type guard use TYPEOF to verify string or number.
 *
 * typeof
 * in
 * instance of
 *
 */
function adding(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return +a + +b;
}
function checkUser(emp) {
    console.log('name: ' + emp.name);
    //does not work 
    // if (typeof emp === 'object' || typeof emp === 'user' ) {
    //     console.log('id: ' + emp.id);
    // };
    if ('id' in emp) {
        console.log('id: ' + emp.id);
    }
    if ('start' in emp) {
        console.log('start Date: ' + emp.start);
    }
}
var user1 = {
    name: 'Sofie',
    id: 13
};
checkUser(user1);
checkUser({ name: 'Apolo', id: 10, start: new Date() });
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Car...');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Truck...');
    };
    Truck.prototype.loading = function (n) {
        console.log('loading: ' + n);
    };
    return Truck;
}());
var veh01 = new Car();
var veh02 = new Truck();
function checkVeh(v) {
    v.drive();
    if (v instanceof Truck) {
        v.loading(15);
    }
}
checkVeh(veh01);
checkVeh(veh02);
