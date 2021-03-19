"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * Var, Const, Let
 */
var num = 5;
var userName = 'Raph';
if (num === 5) {
    var isOld;
    isOld = false;
    var isOlder = true;
}
console.log(isOld); // exist but not reassigned
//console.log(isOlder); // dont exist
/**
 *  Arrow Function
 */
var add = function (a, b) { return a + b; };
//const printOutput = (msg: string | number) => console.log(msg);
var printOutput = function (output) { return console.log(output); };
printOutput(add(2, 3));
var btn = document.querySelector('button');
if (btn) {
    btn.addEventListener('click', function (evt) { console.log(evt); });
}
/**
 *  Default Function Parameters - last in order
 */
var adding = function (a, b) {
    if (b === void 0) { b = 10; }
    return a + b;
};
console.log(adding(3));
/**
 *  Spread Operator
 */
var hobbies = ['Sport', 'Cooking', 'Sleeping', 'Painting'];
var hob = ['Hike'];
//hob.push(hobbies); //wrong  ['Hike', ['Sport', 'Cooking'] ]
hob.push.apply(hob, hobbies);
console.log(hob);
var person1 = {
    Fname: "rapha",
    age: 39
};
var personCopy = __assign(__assign({}, person1), { food: 'nuggets' });
console.log(personCopy);
/**
 *  Rest Paramenter using spread Operator
 */
var addRest = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var result = 0;
    return numbers.reduce(function (total, cur) {
        total += cur;
        return total;
    }, 0);
};
console.log(addRest(2, 3, 5, 10));
/**
 *  Array or Object destruciton
 */
var a1 = hobbies[0], a2 = hobbies[1];
var h1 = hob[0], h2 = hob[1], remainHob = hob.slice(2);
console.log(h1 + ' - ' + h2 + ' - ' + remainHob);
console.log(remainHob);
var food = personCopy.food, firstName = personCopy.Fname; // Alias the name ... is not typescript.
console.log(food + ' - ' + firstName);
//# sourceMappingURL=app.js.map