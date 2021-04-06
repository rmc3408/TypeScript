"use strict";
const names1 = ['r', 'b', 'c'];
const names2 = [];
const names3 = [];
const names4 = [];
names1[0].split('');
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
const merged1 = merge('Max', 30, 30, 30);
const merged2 = merge('Max', 30, [1, 2, 3], 'sapo');
const merged3 = merge('Max', 30, { name: 'R' }, { age: '39' });
merged1.toFixed();
merged2.push();
merged3.age;
