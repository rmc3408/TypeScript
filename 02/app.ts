/*
*
*             Types
*
*      number, string, boolean, array, tuple, object, enum, any
**/


// types boolean, number , string
function add(n1: number, n2: number, isP: boolean, msg: string) {
    const sum = n1 + n2;
    if (isP) { console.log(msg + sum); }
    else console.log(msg + 'a text');

}

let number1: number;
number1 = 5;
const number2 = 2.8;
const isNumber = true;
const text = 'The result is ';

add(number1, number2, isNumber, text);


// types object and Arrays and tuples

const person: { 
    id: any,
    name: string;
    age: number;
    hobbies: string[];
    roles: [number, string]; // tuple array with fixed-size elements. 
    infoAuthor: [string, number, number];

} = {  // : object
    id: 'anyCode',
    name: 'Max',
    age: 40,
    hobbies: ['cooking', 'music'],
    roles: [2, 'author'],  // tuple with 2 elements - number, string.
    infoAuthor: ['Stephen', 43, 120.99] // tuple with 3 elements

};

console.log(person.age);

let favoritesNum: number[] = [1, 2, 4];

for (const num in favoritesNum) { //give the index
    console.log(num);
}
for (const num of favoritesNum) { //give the value 
    console.log(num);
}

let randomTxt: any[] = ['error', 22, true];
console.log(randomTxt);

person.roles[1] = 'S. King';
person.roles[0] = 3409;

console.log(person.roles);


// enum

enum idRoles { ADMIN = 5, SUPERVISOR, USER }

const myroles = {
    id: idRoles.ADMIN
};

console.log('ADMIN is ', myroles.id);
console.log('2 X USER is ', idRoles.USER * 2);


// 
