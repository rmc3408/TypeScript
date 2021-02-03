/*
*
*             Types
*
*      number, string, boolean, array, tuple, object, enum, any
**/
// types boolean, number , string
function add(n1, n2, isP, msg) {
    var sum = n1 + n2;
    if (isP) {
        console.log(msg + sum);
    }
    else
        console.log(msg + 'a text');
}
var number1;
number1 = 5;
var number2 = 2.8;
var isNumber = true;
var text = 'The result is ';
add(number1, number2, isNumber, text);
// types object and Arrays and tuples
var person = {
    id: 'anyCode',
    name: 'Max',
    age: 40,
    hobbies: ['cooking', 'music'],
    roles: [2, 'author'],
    infoAuthor: ['Stephen', 43, 120.99],
    toConvert: 'as-num'
};
console.log(person.age);
var favoritesNum = [1, 2, 4];
for (var num in favoritesNum) { //give the index
    console.log(num);
}
for (var _i = 0, favoritesNum_1 = favoritesNum; _i < favoritesNum_1.length; _i++) { //give the value 
    var num = favoritesNum_1[_i];
    console.log(num);
}
var randomTxt = ['error', 22, true];
console.log(randomTxt);
person.roles[1] = 'S. King';
person.roles[0] = 3409;
console.log(person.roles);
// enum
var idRoles;
(function (idRoles) {
    idRoles[idRoles["ADMIN"] = 5] = "ADMIN";
    idRoles[idRoles["SUPERVISOR"] = 6] = "SUPERVISOR";
    idRoles[idRoles["USER"] = 7] = "USER";
})(idRoles || (idRoles = {}));
var myroles = {
    id: idRoles.ADMIN
};
console.log('ADMIN is ', myroles.id);
console.log('2 X USER is ', idRoles.USER * 2);
function combine(n1, n2, t) {
    if (typeof n1 == 'number' && typeof n2 == 'number' || t === 'as-num') {
        return +n1 + +n2;
    }
    else {
        return n1.toString() + n2.toString();
    }
}
console.log(combine(5, 8, person.toConvert));
console.log(combine('5', 'Max', 'as-txt'));
/// Functions
function addReturn(n1, n2) {
    return n1 + n2;
}
function printVoid(n1) {
    console.log('Result adding is ' + n1);
}
printVoid(addReturn(8, 10));
var combineNum;
combineNum = addReturn;
combineNum(8, 4);
combineNum = printVoid;
combineNum(12);
