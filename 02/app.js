/*
*
*             Types
*
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
    name: 'Max',
    age: 40,
    hobbies: ['cooking', 'music'],
    roles: [2, 'author'],
    infoAuthor: ['Stephen', 43, 120.99] // tuple with 3 elements
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
