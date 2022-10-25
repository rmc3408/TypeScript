"use strict";
var user1 = {
    name: 'Ivan',
    age: 47,
    greet: function (phr) {
        console.log(phr);
    }
};
var Person = /** @class */ (function () {
    function Person(n, d) {
        if (d === void 0) { d = 0; }
        this.fName = "Maxi";
        this.lName = "Minions";
        this.name = 'Max';
        this.username = 'Soth'; //can have more than Personable
        if (n) {
            this.name = n;
        }
    }
    Person.prototype.greet = function (phr) {
        console.log(phr, this.name);
    };
    return Person;
}());
var user2;
user2 = new Person("Jane Doe");
user2.greet('Hi, here is');
var add1;
add1 = function (n1, n2) { return n1 + n2; };
//# sourceMappingURL=interfaces.js.map