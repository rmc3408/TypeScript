/**
 * Var, Const, Let
 */
var num = 5;
const userName = 'Raph';

if (num === 5) {
    var isOld;
    isOld = false;

    let isOlder = true;
}
console.log(isOld); // exist but not reassigned
//console.log(isOlder); // dont exist








/**
 *  Arrow Function
 */
const add = (a: number, b: number): number => a + b;

//const printOutput = (msg: string | number) => console.log(msg);
const printOutput: (msg: string | number) => void = output => console.log(output);
printOutput(add(2, 3));

const btn = document.querySelector('button');

if (btn) {
    btn.addEventListener('click', (evt) => { console.log(evt) });
}








/**
 *  Default Function Parameters - last in order
 */
const adding = (a: number, b: number = 10): number => a + b;
console.log(adding(3));






/**
 *  Spread Operator
 */
const hobbies = ['Sport', 'Cooking', 'Sleeping', 'Painting'];
const hob = ['Hike'];

//hob.push(hobbies); //wrong  ['Hike', ['Sport', 'Cooking'] ]
hob.push(...hobbies);

console.log(hob);

const person1: {
    Fname: string,
    age: number
} = {
    Fname: "rapha",
    age: 39
};

const personCopy = {
    ...person1,
    food: 'nuggets'

}
console.log(personCopy);





/**
 *  Rest Paramenter using spread Operator
 */

const addRest = (...numbers: Array<number>) => {
    let result = 0;
    return numbers.reduce((total, cur) => {
        total += cur;
        return total;
    }, 0);
};

console.log(addRest(2, 3, 5, 10));







/**
 *  Array or Object destruciton
 */

const [a1, a2] = hobbies;
const [h1, h2, ...remainHob] = hob;

console.log(h1 + ' - ' + h2 + ' - ' + remainHob)
console.log(remainHob);

const { food, Fname: firstName } = personCopy; // Alias the name ... is not typescript.
console.log(food + ' - ' + firstName);

