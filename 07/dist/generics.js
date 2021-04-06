"use strict";
const names1 = ['r', 'b', 'c'];
names1[0].split('');
const names2 = [1, 2, 3];
const names3 = [];
const names4 = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is results');
    }, 1000);
});
promise.then(data => console.log(data.toUpperCase()));
function merge(a, b, c, d) {
    a.toUpperCase();
    b.toFixed(2);
    return Object.assign(c, d);
}
const merged1 = merge('Max', 30, 30, 40);
const merged2 = merge('Max', 30, [1, 2, 3], 'sapo');
const merged3 = merge('Max', 30, { name: 'R' }, { age: 39 });
merged2.push();
merged3.age = 23;
console.log(merged3);
//give any structure of object
function joint(c, d) {
    return Object.assign(c, d);
}
const merged4 = joint({ name: 'R' }, { age: 39 });
const merged5 = joint({ name: 'R' }, 39);
console.log(merged4);
console.log(merged5);
function countPrint(c) {
    let description = 'no values';
    if (c.length !== 0) {
        description = 'Got ' + c.length + ' elements.';
    }
    return [c, description];
}
console.log(countPrint('hello'));
console.log(countPrint([1, 2, 3]));
console.log(countPrint(''));
function extractKey(obj, key) {
    return 'value of key is ' + obj[key];
}
console.log(extractKey({ name: 'Raph' }, 'name'));
