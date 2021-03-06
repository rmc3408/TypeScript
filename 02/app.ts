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
let myTxt: string = 'hello';
myTxt = 'hi';

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
    toConvert: 'as-num' | 'as-txt'

} = {  // : object
    id: 'anyCode',
    name: 'Max',
    age: 40,
    hobbies: ['cooking', 'music'],
    roles: [2, 'author'],  // tuple with 2 elements - number, string.
    infoAuthor: ['Stephen', 43, 120.99], // tuple with 3 elements
    toConvert: 'as-num'

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


//////   Union type
type CombinableNT = number | string; //give Alias
type convert = 'as-num' | 'as-txt';

function combine(n1: number | string, n2: CombinableNT, t: string ) {
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

function addReturn(n1: number, n2: number):number {  // return is outside parameters.
    return n1 + n2;
}
function printVoid(n1: number):void {  // return is outside parameters.
    console.log('Result adding is ' + n1); 
    
}

printVoid(addReturn(8, 10));

let combineNum: Function;
combineNum = addReturn;
combineNum(8, 5);  
combineNum = printVoid;
combineNum(12);   

let newAdd: (a: number, b: number) => number;
newAdd = addReturn;
//newAdd = printVoid; // must follow the definition.

